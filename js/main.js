import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { getData } from './api.js';
import { showAlert } from './utill.js';
import { getPictures } from './data.js';

getData(
  showAlert,
  renderPictures,
  renderInfoFullPicture,
  openPhotoEditingModal
);
