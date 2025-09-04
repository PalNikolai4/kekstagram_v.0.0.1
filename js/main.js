import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
import { getPictures } from './data.js';

const picturesData = getPictures(25);
renderPictures(picturesData);
renderInfoFullPicture(picturesData);
openPhotoEditingModal();
