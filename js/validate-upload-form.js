import { getArrFromStr, checksForDuplicates } from './utill.js';

const form = document.querySelector('.img-upload__form');
const imgUploadFieldset = form.querySelector('.img-upload__text');
const hashtagsField = imgUploadFieldset.querySelector('.text__hashtags');
const descriptionField = imgUploadFieldset.querySelector('.text__description');

hashtagsField.removeAttribute('min');
hashtagsField.removeAttribute('max');
descriptionField.removeAttribute('maxlength');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error'
});

const validateHashtag = (value) =>
  value &&
  value.length >= 2 &&
  value.length <= 20 &&
  /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(value);

const validateHashtags = () => {
  const hashtags = getArrFromStr(hashtagsField.value);
  const hasDublicate = checksForDuplicates(hashtags);
  const isValid = hashtags.every((hashtag) => validateHashtag(hashtag));
  return hasDublicate && isValid;
};

const appliesStylesToErrors = () => {
  imgUploadFieldset.style.color = 'red';
}

const getHashtagsErrorMessage = () => {
  let errorMessage = '';
  const hashtags = getArrFromStr(hashtagsField.value);

  const isValid = hashtags.every((hashtag) => validateHashtag(hashtag));
  if (!isValid) {
    errorMessage += '\nТеги должны начинаться с символа # и состоять только из букв и (или) цифр. Тег не может быть короче 2 символов.';
  }

  if (hashtags.length > 5) {
    errorMessage += '\nМаксимальное число тегов - 5.';
  }

  const hasDublicate = checksForDuplicates(hashtags);
  if (!hasDublicate) {
    errorMessage += '\nПовторяющиеся теги недопустимы. Теги в разном регистре считаются одинаковыми.';
  }

  if (errorMessage) {
    appliesStylesToErrors();
  }

  return errorMessage;
};

pristine.addValidator(
  hashtagsField,
  validateHashtags,
  getHashtagsErrorMessage
);

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  pristine.validate();
  validateHashtags();
});

// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;


// <fieldset class="img-upload__text text">
//   <input class="text__hashtags" type="text" name="hashtags" placeholder="#ХэшТег" min="2" max="20">
//   <textarea class="text__description" name="description" placeholder="Ваш комментарий..." maxlength="140"></textarea>
// </fieldset>
