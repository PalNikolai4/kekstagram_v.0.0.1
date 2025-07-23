import { showFullPicture } from "./big-picture.js";

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

// Копирует и  заполняет шаблон #picture данными. Возвращает заполненный шаблон 1 фотографии
const renderPicture = (data) => {
  const { url, description, likes, comments} = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.addEventListener('click', () => {
    showFullPicture(data);
  });
  return picture;
}

// Создаёт фрагмент-хранилище. Создаёт шаблоны по количеству данных и заполняет их этими данными. Возвращает хранилище с заполненными шаблонами
const renderPictures = (elements) => {
  const picturesFragment = document.createDocumentFragment();
  elements.forEach(element => {
    const picture = renderPicture(element);
    picturesFragment.append(picture);
  });

  picturesContainer.append(picturesFragment);
}

export { renderPictures }
