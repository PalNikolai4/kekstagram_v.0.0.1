const form = document.querySelector('.img-upload__form');
const imgUploadFieldset = form.querySelector('.img-upload__text');
const hashtagsField = imgUploadFieldset.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__text',
  errorTextParent: 'img-upload__text',
  errorTextClass: 'img-upload__text-error'
});

const validateHashtag = (value) => {
  return value &&
    value.length >= 2 &&
    value.length <= 20 &&
    /^#[A-Za-zА-Яа-яЁё0-9]{1,19}$/.test(value);
}

const validateHashtags = () => {
  let errorMessage = null;

  const hashtags = hashtagsField.value.split(' ');

  hashtags.forEach((hashtag, index, array) => {
    array[index] = hashtag.toLowerCase();
  });

  const uniqueElements = new Set(hashtags);
  const isHasDublicate = (hashtags.length === uniqueElements.size);
  if (!isHasDublicate) {errorMessage = 'Повторяющиеся тэги недопустимы.'};

  const isValid = hashtags.every(hashtag => validateHashtag(hashtag));
  // #qwErTYuI123 #QDKJNCSkjnkj #323eDSAKJ #323edsakj
  console.log(errorMessage);
}

// pristine.addValidator(
//   hashtagsField,
//   validateHashtags,
//   'НИ ХУ Я (error text)'
// );

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
