import { isEsc } from './utill.js';
import { showSelectedPhoto, blockingScaleButtonsOnLoading, onUploadScaleClick } from './edit-upload.js';
import { removeClass, addedDefaultEffectClass, useEffects } from './effects-upload.js';
import { useEffectLevel } from './slider-upload.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadField = form.querySelector('#upload-file');
const closeButton = form.querySelector('.img-upload__cancel');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadScale = form.querySelector('.img-upload__scale');
const effectsList = form.querySelector('.effects__list');

const onEscKeyDown = (evt) => {
  if (isEsc(evt)) {
    closePhotoEditingModal();
  }
};

const onUploadOverlayClick = (evt) => {
  if (evt.target === uploadOverlay) {
    closePhotoEditingModal();
  }
};

const onUseEffects = (evt) => useEffects(evt.target);
const onUseEffectLevel = (evt) => useEffectLevel(evt.target);

function openPhotoEditingModal () {
  uploadField.addEventListener('change', () => {
    body.classList.add('modal-open');
    imgUploadOverlay.classList.remove('hidden');
    showSelectedPhoto();
    blockingScaleButtonsOnLoading();
    document.addEventListener('keydown', onEscKeyDown);
    uploadOverlay.addEventListener('click', onUploadOverlayClick);
    closeButton.addEventListener('click', closePhotoEditingModal);
    uploadScale.addEventListener('click', onUploadScaleClick);
    removeClass();
    addedDefaultEffectClass();

    effectsList.addEventListener('change', onUseEffects);
    effectsList.addEventListener('change', onUseEffectLevel);
  });
}

function closePhotoEditingModal () {
  body.classList.remove('modal-open');
  imgUploadOverlay.classList.add('hidden');

  document.removeEventListener('keydown', onEscKeyDown);
  uploadOverlay.removeEventListener('click', onUploadOverlayClick);
  closeButton.removeEventListener('click', closePhotoEditingModal);
  uploadScale.removeEventListener('click', onUploadScaleClick);
  effectsList.removeEventListener('change', onUseEffects);
  effectsList.removeEventListener('change', onUseEffectLevel);
  showSelectedPhoto(true);
}

export { openPhotoEditingModal };
