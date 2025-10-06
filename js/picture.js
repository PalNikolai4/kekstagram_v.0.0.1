import { openFullPicture } from './full-picture.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const picturesContainer = document.querySelector('.pictures');

const renderPicture = (data) => {
  const { url, description, likes, comments, id } = data;
  const picture = pictureTemplate.cloneNode(true);
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__img').alt = description;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;
  picture.dataset.id = id;
  return picture;
};

const renderPictures = (elements) => {
  const picturesFragment = document.createDocumentFragment();
  elements.forEach((element) => {
    const picture = renderPicture(element);
    picturesFragment.append(picture);
  });

  picturesContainer.append(picturesFragment);
};

const renderInfoFullPicture = (pictures) => {
  picturesContainer.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      const id = Number(currentPicture.dataset.id);
      const pictureData = pictures.find((picture) => picture.id === id);
      if (pictureData) {
        openFullPicture(pictureData);
      }
    }
  });
};

export { renderPictures, renderInfoFullPicture };
