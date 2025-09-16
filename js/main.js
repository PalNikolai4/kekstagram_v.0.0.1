import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { createLoader } from './api.js';
import { showAlert } from './utill.js';
import { getPictures } from './data.js';

const getData = createLoader(
  showAlert,
  renderPictures,
  renderInfoFullPicture,
  openPhotoEditingModal
);

getData();
