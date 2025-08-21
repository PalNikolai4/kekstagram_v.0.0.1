import { getPictures } from './data.js';
import { renderPictures, renderInfoFullPicture } from './picture.js';
import { openPhotoEditingModal } from './modal-upload.js';
// import { createdEffectsSlider } from './slider-upload.js';

const picturesData = getPictures(25);
renderPictures(picturesData);
renderInfoFullPicture(picturesData);
openPhotoEditingModal();
// createdEffectsSlider();
