import { isEsc, clearHtml } from "./utill.js";

const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count')
const commentsLoader = bigPicture.querySelector('.comments-loader');
const closeButton = bigPicture.querySelector('.big-picture__cancel');


const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) element.textContent = text;
  return element;
}

const createComment = ({ avatar, name, message }) => {
  const comment = createElement('li', 'social__comment');
  const commentAvatar = createElement('img', 'social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  const commentText = createElement('p', 'social__text', message);
  comment.append(commentAvatar);
  comment.append(commentText);
  return comment;
}

const createComments = (elements) => {
  const fragment = document.createDocumentFragment();
  elements.forEach(element => {
    fragment.append(createComment(element));
  });
  return fragment;
}

const renderBigPicture = ({ url, description, likes, comments }) => {
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
  bigPicture.removeEventListener('click', onClickOverlay);
  closeButton.removeEventListener('click', closeFullPicture);
}

const onEscKeyDown = (evt) => {
  if (isEsc(evt)) {
    closeFullPicture();
  }
}

const onClickOverlay = (evt) => {
  if (evt.target === bigPicture) {
    closeFullPicture();
  }
}

// обьявить функцию закрытия просмотра bigPicture при клике вне области bigPicture

const openFullPicture = (data) => {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPicture.addEventListener('click', onClickOverlay);
  commentsCount.style = 'display: none';
  commentsLoader.style = 'display: none';

  clearHtml(socialComments);
  renderBigPicture(data);
  socialComments.append(createComments(data.comments));
  document.addEventListener('keydown', onEscKeyDown);
  bigPicture.addEventListener('click', onClickOverlay);
  closeButton.addEventListener('click', closeFullPicture);
}

export { openFullPicture }
