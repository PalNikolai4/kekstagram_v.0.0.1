import { getArrFromStr, checksForDuplicates } from './utill.js';

const form = document.querySelector('.img-upload__form');
const imgUploadFieldset = form.querySelector('.img-upload__text');
const hashtagsField = imgUploadFieldset.querySelector('.text__hashtags');

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

// хэш-тег начинается с символа # (решётка);
// строка после решётки должна состоять из букв и чисел и не может содержать пробелы, спецсимволы (#, @, $ и т. п.), символы пунктуации (тире, дефис, запятая и т. п.), эмодзи и т. д.;
// хеш-тег не может состоять только из одной решётки;
// максимальная длина одного хэш-тега 20 символов, включая решётку;
// хэш-теги нечувствительны к регистру: #ХэшТег и #хэштег считаются одним и тем же тегом;
// хэш-теги разделяются пробелами;
// один и тот же хэш-тег не может быть использован дважды;
// нельзя указать больше пяти хэш-тегов;
// хэш-теги необязательны;
// если фокус находится в поле ввода хэш-тега, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.


// комментарий не обязателен;
// длина комментария не может составлять больше 140 символов;
// если фокус находится в поле ввода комментария, нажатие на Esc не должно приводить к закрытию формы редактирования изображения.


// <fieldset class="img-upload__text text">
//   <input class="text__hashtags" type="text" name="hashtags" placeholder="#ХэшТег" min="2" max="20">
//   <textarea class="text__description" name="description" placeholder="Ваш комментарий..." maxlength="140"></textarea>
// </fieldset>
