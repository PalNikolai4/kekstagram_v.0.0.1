const form = document.querySelector('.img-upload__form');
const imgUploadFieldset = form.querySelector('.img-upload__text');
const hashtagsField = imgUploadFieldset.querySelector('.text__hashtags');
// const

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


// img-upload__form
// <fieldset class="img-upload__text text">
//   <input class="text__hashtags" type="text" name="hashtags" placeholder="#ХэшТег" min="2" max="20">
//   <textarea class="text__description" name="description" placeholder="Ваш комментарий..." maxlength="140"></textarea>
// </fieldset>
