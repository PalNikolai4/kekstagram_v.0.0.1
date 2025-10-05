import { getRandomElements } from './utill.js';

const imgFilters = document.querySelector('.img-filters');
const imgFiltersForm = imgFilters.querySelector('.img-filters__form');
const filtersButtons = imgFiltersForm.querySelectorAll('button.img-filters__button');
const picturesContainer = document.querySelector('.pictures');

const imgFiltersToggle = (data, renderPictures) => {

  imgFilters.classList.remove('img-filters--inactive');
  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      filtersButtons.forEach((button) => {
        button.classList.remove('img-filters__button--active');
      });
      evt.target.classList.add('img-filters__button--active');

      const pictures = picturesContainer.querySelectorAll('a.picture');
      pictures.forEach(picture => picture.remove());

      let renderData = null;
      if (evt.target.id === 'filter-default') {
        renderData = data;
      }
      if (evt.target.id === 'filter-random') {
        renderData = getRandomElements(data, 10);
      }
      if (evt.target.id === 'filter-discussed') {
        renderData = data.slice().sort((a, b) => b.comments.length - a.comments.length);
      }
      renderPictures(renderData);
    }
  });
};



export { imgFiltersToggle };
