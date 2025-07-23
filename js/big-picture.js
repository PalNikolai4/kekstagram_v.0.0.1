const bigPicture = document.querySelector('.big-picture');
const socialComments = bigPicture.querySelector('.social__comments');

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

const createComment = ({avatar, message}) => {
  const comment = createElement('li', 'social__comment');
  const commentAvatar = createElement('img', 'social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = 'Аватар комментатора фотографии';
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  const commentText = createElement('p', 'social__text', message);
  comment.append(commentAvatar);
  comment.append(commentText);
  return comment;
}

const createComments = (elements) => {
  elements.forEach(element => {
    socialComments.append(createComment(element));
  });
}

const showFullPicture = (data) => {
  const { url, description, likes, comments } = data;
  // функция добавляется в слушатель событий при создании 1 фотографии (в функцию renderPicture)
  // она должна:
    // удалять класс hidden у элемента .big-picture
    bigPicture.classList.remove('hidden');

    // подставлять адрес картинки в адрес большой фотографии, кол-во лайков и комментариев, описание фото
    bigPicture.querySelector('.big-picture__img').querySelector('img').src = url;
    bigPicture.querySelector('.big-picture__img').querySelector('img').alt = description;
    bigPicture.querySelector('.social__caption').textContent = description;
    bigPicture.querySelector('.likes-count').textContent = likes;
    bigPicture.querySelector('.comments-count').textContent = comments.length;

    // вставлять комментарии под фото
    createComments(comments);

    // после открытия окна спрятать блок счётчика комментариев, загрузки новых коммент
    bigPicture.querySelector('.social__comment-count').style = 'display: none';
    bigPicture.querySelector('.comments-loader').style = 'display: none';

    // после открытия окна добавить боди класс модал опен
    document.querySelector('body').classList.add('modal-open');
    console.log(document.querySelector('body'));
    // после открытия окна должен навешиваться слушатель для закрытия окна на esc
    closeFullPicture();

    // при закрытии окна удалять класс модал опен у боди - complete!!!

}

export { showFullPicture }
