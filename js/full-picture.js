import { isEsc, clearHtml } from "./utill.js";
import { createComments } from "./comments.js";

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count')
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const renderFullPicture = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.big-picture__img').querySelector('img').alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
}

const closeFullPicture = () => {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
  bigPicture.removeEventListener('click', onOverlayClick);
  closeButton.removeEventListener('click', closeFullPicture);
}

const onEscKeyDown = (evt) => {
  if (isEsc(evt)) {
    closeFullPicture();
  }
}

const onOverlayClick = (evt) => {
  if (evt.target === bigPicture) {
    closeFullPicture();
  }
}

const openFullPicture = (data) => {
  clearHtml(socialComments);
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.addEventListener('click', onOverlayClick);
  commentsCount.style = 'display: none';
  commentsLoader.style = 'display: none';
  renderFullPicture(data);
  socialComments.append(createComments(data.comments));
  document.addEventListener('keydown', onEscKeyDown);
  bigPicture.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', closeFullPicture);
}

export { openFullPicture }
