const toggleImgFilters = () => {
  const imgFilters = document.querySelector('.img-filters');
  const imgFiltersForm = imgFilters.querySelector('.img-filters__form');
  const filtersButtons = imgFiltersForm.querySelectorAll('button.img-filters__button');

  imgFilters.classList.remove('img-filters--inactive');

  imgFiltersForm.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('img-filters__button')) {
      filtersButtons.forEach((button) => {
        button.classList.remove('img-filters__button--active');
      });

      evt.target.classList.add('img-filters__button--active');``
    }
  });
};

export { toggleImgFilters };
