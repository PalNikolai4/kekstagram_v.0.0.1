const form = document.querySelector('.img-upload__form');
const effectLevel = form.querySelector('.effect-level');
const effectField = effectLevel.querySelector('.effect-level__value');
const effectSlider = effectLevel.querySelector('.effect-level__slider');


// сделать функцией и отправить в main
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

const updateEffectValue = () => {
  effectSlider.noUiSlider.on('update', () => {
    effectField.value = effectSlider.noUiSlider.get();
    console.log(`effectField.value: ${effectField.value}`);
  });
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



const useEffectLevel = (evt) => {
  const updatedValue = getUpdateSlider(evt.value);
  setUpdateSlider(updatedValue);
  locksUnlocksSlider(evt.value);
  updateEffectValue();
}



// функция, при изменении (update) слайдера:
  // записывает значение в value инпута (effectField.value)
  // применяет соответствующие стили к картинке

export { createdEffectsSlider, useEffectLevel }
// createdEffectsSlider -> main.js
//  useEffectLevel -> modal-upload.js -> onUseEffectLevel 'change'
