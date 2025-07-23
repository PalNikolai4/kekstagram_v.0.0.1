const body = document.querySelector('body');
const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');
const commentsCount = bigPicture.querySelector('.social__comment-count')
const commentsLoader = bigPicture.querySelector('.comments-loader');

const closeFullPicture = () => {
  const closeButton = bigPicture.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
  })
}

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

const renderBigPicture = ({url, description, likes, comments}) => {
  bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
  bigPicture.querySelector('.big-picture__img').querySelector('img').alt = description;
  bigPicture.querySelector('.social__caption').textContent = description;
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;
}

const showFullPicture = (data) => {
  bigPicture.classList.remove('hidden');
  body.classList.add('modal-open');
  commentsCount.style = 'display: none';
  commentsLoader.style = 'display: none';

  // подставлять адрес картинки в адрес большой фотографии, кол-во лайков и комментариев, описание фото
  renderBigPicture(data);

  // вставлять комментарии под фото
  socialComments.innerHTML = '';
  socialComments.append(createComments(data.comments));

  // после открытия окна должен навешиваться слушатель для закрытия окна на esc
  closeFullPicture();


  // при закрытии окна удалять класс модал опен у боди - complete!!!

}

export { showFullPicture }
