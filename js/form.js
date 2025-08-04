const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const fileField = form.querySelector('#upload-file');
const overlay = form.querySelector('.img-upload__overlay');
const hashtagsField = form.querySelector('.text__hashtags');
const commentField = form.querySelector('.text__description');




const showModal = () => {
  overlay.classList.remove('hidden');
  body.classList.add('modal-open');
}

const hideModal = () => {
  overlay.classList.add('hidden');
  body.classList.remove('modal-open');
}



// validation
const pristine = new Pristine(form);
form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  let message = 'Форма валидна';
  if (!pristine.validate()) message = 'Форма не валидна';
  console.log(message);
})
