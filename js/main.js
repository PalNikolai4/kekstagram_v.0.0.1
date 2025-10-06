import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { imgFiltersToggle } from './img-filters.js';
import { createLoader } from './api.js';
import { showAlert } from './utill.js';

const getData = createLoader(
  showAlert,
  renderPictures,
  renderInfoFullPicture,
  openPhotoEditingModal,
  imgFiltersToggle
);

getData();
