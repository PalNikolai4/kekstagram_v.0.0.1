import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { createLoader } from './api.js';
import { showAlert } from './utill.js';
import { toggleImgFilters } from './img-filters.js';

const getData = createLoader(
  showAlert,
  renderPictures,
  renderInfoFullPicture,
  openPhotoEditingModal,
  toggleImgFilters
);

getData();
