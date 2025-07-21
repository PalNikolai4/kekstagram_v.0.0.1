const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

// Копирует и  заполняет шаблон #picture данными. Возвращает заполненный шаблон 1 фотографии
const renderPicture = ({ url, description, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  return picture;
}

// Создаёт фрагмент-хранилище. Создаёт шаблоны по количеству данных и заполняет из этими данными. Возвращает хранилище с заполненными шаблонами
const renderPictures = (elements) => {
  const picturesFragment = document.createDocumentFragment();
  elements.forEach(element => {
    picturesFragment.append(renderPicture(element));
  });

  return picturesFragment;
}

export { renderPictures }
