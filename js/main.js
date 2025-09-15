import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { getData } from './api.js';
import { getPictures } from './data.js';

getData(renderPictures, renderInfoFullPicture, openPhotoEditingModal);
