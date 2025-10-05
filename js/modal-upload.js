import { showSelectedPhoto, blockingScaleButtonsOnLoading, onUploadScaleClick } from './edit-upload.js';
import { createdEffectsSlider, removeEffectsSlider, useEffectLevel } from './slider-upload.js';
import { removeClass, addedDefaultEffect, useEffects } from './effects-upload.js';
import { validateForm, onValidateFieldForm, clearForm } from './user-form.js';
import { isEsc } from './utill.js';

const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const uploadField = form.querySelector('#upload-file');
const closeButton = form.querySelector('.img-upload__cancel');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadScale = form.querySelector('.img-upload__scale');
const effectsList = form.querySelector('.effects__list');
const hashtagsField = form.querySelector('.text__hashtags');
const textDescription = form.querySelector('.text__description');

const onEscKeyDown = (evt) => {
  const activeElement = document.activeElement;
  if (
    isEsc(evt) &&
    activeElement !== hashtagsField &&
    activeElement !== textDescription) {
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
const onImgUploadApplyAllActions = () => {
  body.classList.add('modal-open');
  imgUploadOverlay.classList.remove('hidden');
  showSelectedPhoto();
  blockingScaleButtonsOnLoading();
  document.addEventListener('keydown', onEscKeyDown);
  uploadOverlay.addEventListener('click', onUploadOverlayClick);
  closeButton.addEventListener('click', closePhotoEditingModal);
  uploadScale.addEventListener('click', onUploadScaleClick);
  createdEffectsSlider();
  effectsList.addEventListener('change', onUseEffects);
  effectsList.addEventListener('change', onUseEffectLevel);
  removeClass();
  addedDefaultEffect();
};

const onValidateForm = (evt) => {
  validateForm(evt);
  closePhotoEditingModal();
};

function openPhotoEditingModal() {
  uploadField.addEventListener('change', onImgUploadApplyAllActions);
  form.addEventListener('input', onValidateFieldForm);
  form.addEventListener('submit', onValidateForm);
}

function closePhotoEditingModal() {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onEscKeyDown);
  uploadOverlay.removeEventListener('click', onUploadOverlayClick);
  closeButton.removeEventListener('click', closePhotoEditingModal);
  uploadScale.removeEventListener('click', onUploadScaleClick);
  effectsList.removeEventListener('change', onUseEffects);
  effectsList.removeEventListener('change', onUseEffectLevel);
  form.removeEventListener('input', onValidateFieldForm);
  form.removeEventListener('submit', onValidateForm);
  clearForm();
  imgUploadOverlay.classList.add('hidden');
  removeEffectsSlider();
  showSelectedPhoto(true);
}

export { openPhotoEditingModal };
