import { isEsc, clearHtml } from './utill.js';
import { createOnShowMoreComments, createComments, hideCommentsLoaderButton } from './comments.js';

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const commentsCount = bigPicture.querySelector('.social__comment-count');
const closeButton = bigPicture.querySelector('.big-picture__cancel');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
let currentCommentsHandlerCounter = null;

const renderFullPicture = ({ url, description, likes, comments }) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.big-picture__img').querySelector('img').alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
};

const onEscKeyDown = (evt) => {
  if (isEsc(evt)) {
    closeFullPicture();
  }
};

const onOverlayClick = (evt) => {
  if (evt.target === bigPicture) {
    closeFullPicture();
  }
};

function openFullPicture (data) {
  const dataComments = data.comments;
  clearHtml(socialComments);
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.addEventListener('click', onOverlayClick);
  renderFullPicture(data);

  const onShowMoreComments = createOnShowMoreComments(dataComments, socialComments);
  if (onShowMoreComments) {
    currentCommentsHandlerCounter = () => {
      const shouldRemove = onShowMoreComments();
      if (shouldRemove) {
        commentsLoader.removeEventListener('click', currentCommentsHandlerCounter);
      }
    };
    commentsLoader.addEventListener('click', currentCommentsHandlerCounter);
  }


  document.addEventListener('keydown', onEscKeyDown);
  bigPicture.addEventListener('click', onOverlayClick);
  closeButton.addEventListener('click', closeFullPicture);
}

function closeFullPicture () {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onEscKeyDown);
  bigPicture.removeEventListener('click', onOverlayClick);
  closeButton.removeEventListener('click', closeFullPicture);
  if (currentCommentsHandlerCounter) {
    commentsLoader.removeEventListener('click', currentCommentsHandlerCounter);
    currentCommentsHandlerCounter = null;
  }
}

export { openFullPicture };
