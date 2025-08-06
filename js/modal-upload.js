import { isEsc } from './utill.js';
import { showSelectedPhoto } from './edit-upload.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadField = form.querySelector('#upload-file');
const closeButton = form.querySelector('.img-upload__cancel');
const uploadOverlay = form.querySelector('.img-upload__overlay');

const openPhotoEditingModal = () => {
  uploadField.addEventListener('change', () => {
    body.classList.add('modal-open');
    imgUploadOverlay.classList.remove('hidden');

    showSelectedPhoto();
    document.addEventListener('keydown', onEscKeyDown);
    closeButton.addEventListener('click', closePhotoEditingModal);
    uploadOverlay.addEventListener('click', onUploadOverlayClick);
    })
}

const closePhotoEditingModal = () => {
    body.classList.remove('modal-open');
    imgUploadOverlay.classList.add('hidden');

    document.removeEventListener('keydown', onEscKeyDown);
    closeButton.removeEventListener('click', closePhotoEditingModal);
    uploadOverlay.removeEventListener('click', onUploadOverlayClick);
    showSelectedPhoto(true);
}

const onEscKeyDown = (evt) => {
  if (isEsc(evt)) {
    closePhotoEditingModal();
  }
}

const onUploadOverlayClick = (evt) => {
  if (evt.target === uploadOverlay) {
    closePhotoEditingModal();
  }
}

export { openPhotoEditingModal }
