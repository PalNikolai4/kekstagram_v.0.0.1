const form = document.querySelector('.img-upload__form');
const effectLevel = form.querySelector('.effect-level');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const effectField = effectLevel.querySelector('.effect-level__value');
const effectSlider = effectLevel.querySelector('.effect-level__slider');


const createdEffectsSlider = () => {
  noUiSlider.create(effectSlider, {
    start: 1,
    range: {
      'min': 0,
      'max': 1
    },
    step: 0.1,
    connect: 'lower',
  });
  effectSlider.setAttribute('disabled', true);
  effectSlider.style.display = 'none';
}

const removeEffectsSlider = () => {
  effectSlider.noUiSlider.destroy();
  imgUploadPreview.removeAttribute('style');
}

const DEFAULT_EFFECT_VALUES = { min: 0, max: 1, step: 0.1 };
const getUpdateSlider = (value) => {
  const updatedEffectValues = { ...DEFAULT_EFFECT_VALUES };

  switch (value) {
    case 'chrome':
    case 'sepia':
      break;
    case 'marvin':
      Object.assign(updatedEffectValues, { max: 100, step: 1 });
      break;
    case 'phobos':
      Object.assign(updatedEffectValues, { max: 3 });
      break;
    case 'heat':
      Object.assign(updatedEffectValues, { min: 1, max: 3 });
      break;
    case 'none':
    default:
      break;
  }
  return updatedEffectValues;
}

const setUpdateSlider = ({ min, max, step }) => {
  effectSlider.noUiSlider.updateOptions({
    range: {
      'min': min,
      'max': max
    },
    'start': max,
    'step': step
  })
}

const locksUnlocksSlider = (value) => {
  switch (value) {
    case 'chrome':
    case 'sepia':
    case 'marvin':
    case 'phobos':
    case 'heat':
      effectSlider.removeAttribute('disabled');
      effectSlider.style.display = 'block';
      break;
    case 'none':
    default:
      effectSlider.style.display = 'none';
      effectSlider.setAttribute('disabled', true);
      break;
  }
}

const applyEffectPhoto = (effectName, effectValue, srcPhoto) => {
  switch (effectName) {
    case 'chrome':
      srcPhoto.style.filter = `grayscale(${effectValue})`;
      break;
    case 'sepia':
      srcPhoto.style.filter = `sepia(${effectValue})`;
      break;
    case 'marvin':
      srcPhoto.style.filter = `invert(${effectValue}%)`;
      break;
    case 'phobos':
      srcPhoto.style.filter = `blur(${effectValue}px)`;
      break;
    case 'heat':
      srcPhoto.style.filter = `brightness(${effectValue})`;
      break;
    case 'none':
    default:
      srcPhoto.style.filter = `none`;
      break;
  }
}

const useEffectLevel = (evt) => {
  effectSlider.noUiSlider.off('update');
  const updatedValue = getUpdateSlider(evt.value);
  setUpdateSlider(updatedValue);
  locksUnlocksSlider(evt.value);

  const effectName = evt.value;
  let countAfterDecimal = null;
  let effectValue = null;
  const onUpdateEffectValue = () => {
    effectValue = Number(effectSlider.noUiSlider.get());
    Number.isInteger(effectValue) ? countAfterDecimal = 0 : countAfterDecimal = 1;
    effectValue = Number(effectValue).toFixed(countAfterDecimal);
    effectField.value = effectValue;
    applyEffectPhoto(effectName, effectValue, imgUploadPreview);
  }

  effectSlider.noUiSlider.on('update', onUpdateEffectValue);
}

export { createdEffectsSlider, removeEffectsSlider, useEffectLevel }
// createdEffectsSlider -> main.js - перенести из мэйн в функцию открытия окна с фото
// сделать функцию по уничтожению слайдера и вызывать её при закрытии окна с фото
//  useEffectLevel -> modal-upload.js -> onUseEffectLevel 'change'
