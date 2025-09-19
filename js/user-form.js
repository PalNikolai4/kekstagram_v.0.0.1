import { getArrFromStr, checksForDuplicates } from './utill.js';
import { sendData } from './api.js';

const form = document.querySelector('.img-upload__form');
const imgUploadFieldset = form.querySelector('.img-upload__text');
const hashtagsField = imgUploadFieldset.querySelector('.text__hashtags');
const descriptionField = imgUploadFieldset.querySelector('.text__description');
const submitButtonForm = form.querySelector('.img-upload__submit');

hashtagsField.removeAttribute('min');
hashtagsField.removeAttribute('max');
descriptionField.removeAttribute('maxlength');

const validateHashtag = (value) =>
  value &&
  value.length >= 2 &&
  value.length <= 20 &&
  /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(value);

const validateHashtags = () => {
  if (hashtagsField.value.length === 0) {
    return true;
  }

  let hashtags = hashtagsField.value.trim();
  hashtags = getArrFromStr(hashtags);
  const hasNotDublicate = checksForDuplicates(hashtags);
  const isValid = hashtags.every((hashtag) => validateHashtag(hashtag));
  return hasNotDublicate && isValid && (hashtags.length <= 5);
};

const getHashtagsErrorMessage = () => {
  let errorMessage = '';
  if (hashtagsField.value.length > 0) {
    let hashtags = hashtagsField.value.trim();
    hashtags = getArrFromStr(hashtags);
    if (hashtags.length > 5) {
      errorMessage += 'Максимальное число тегов - 5. ';
    }

    const maxLength = hashtags.every((hashtag) => hashtag.length <= 20);
    if (!maxLength) {
      errorMessage += 'Максимальная длина одного тега - 20 символов. ';
    }

    const isValid = hashtags.every((hashtag) => validateHashtag(hashtag));
    if (!isValid) {
      errorMessage += 'Теги должны начинаться с символа "#". Кроме символа "#" содержать буквы и (или) цифры. Другие специальные символы не допускаются. ';
    }

    const hasNotDublicate = checksForDuplicates(hashtags);
    if (!hasNotDublicate) {
      errorMessage += 'Одинаковые теги не допустимы. ';
    }
  }
  return errorMessage;
};

const validateDescription = () => {
  let flag = null;

  if (descriptionField.value.length === 0) {
    flag = true;
  }

  if (descriptionField.value.length > 140) {
    flag = false;
  } else {
    flag = true;
  }
  return flag;
};

const appliesStylesToErrors = () => {
  imgUploadFieldset.style.color = 'red';
  imgUploadFieldset.style.textTransform = 'none';
};

const onValidateFieldForm = () => {
  const hashtags = validateHashtags();
  const description = validateDescription();
  if (!hashtags || !description) {
    submitButtonForm.disabled = true;
    appliesStylesToErrors();
  } else {
    submitButtonForm.disabled = false;
  }
};

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error'
});

pristine.addValidator(
  hashtagsField,
  validateHashtags,
  getHashtagsErrorMessage
);

pristine.addValidator(
  descriptionField,
  validateDescription,
  'Максимальная длина комментария - 140 символов'
);

const showMessageFormSubmissionResult = (isSuccess) => {
  let classElement = null;
  isSuccess ? classElement = 'success' : classElement = 'error';
  const messageElement = document
  .querySelector(`#${classElement}`)
  .content
  .querySelector(`.${classElement}`);

  const body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', messageElement);
};

const validateForm = (evt) => {
  evt.preventDefault();
  const isValid = pristine.validate();
  if (isValid) {
    submitButtonForm.disabled = true;
    sendData(
      () => {
        submitButtonForm.disabled = false;
        showMessageFormSubmissionResult(true);
      },
      () => {
        submitButtonForm.disabled = false;
        showMessageFormSubmissionResult(false);
      },
      new FormData(evt.target)
    )
  };
};

const clearForm = () => {
  hashtagsField.value = '';
  descriptionField.value = '';
};

export { validateForm, onValidateFieldForm, clearForm };
