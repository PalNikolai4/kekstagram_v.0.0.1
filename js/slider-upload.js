const form = document.querySelector('.img-upload__form');
const effectLevel = form.querySelector('.effect-level');
const effectField = effectLevel.querySelector('.effect-level__value');
const effectSlider = effectLevel.querySelector('.effect-level__slider');


// сделать функцией и отправить в main
const createdEffectsSlider = () => {
  noUiSlider.create(effectSlider, {
    start: 0.3,
    range: {
      'min': 0,
      'max': 1
    },
    step: 0.1,
    connect: 'lower'
  })
}


const setUpdateSlider = (min, max, step, isDisabled) => {
  effectSlider.noUiSlider.updateOptions({
      range: {
        'min': min,
        'max': max
      },
      'start': max,
      'step': step
    });
    effectSlider.setAttribute('disabled', isDisabled);
}

const DEFAULT_EFFECT_VALUES = {min: 0, max: 0, step: 0, isDisabled: false};

const getEffectValue = (value) => {
  let {min = 10, max, step, isDisabled = true} = DEFAULT_EFFECT_VALUES;
  switch (value) {
    case 'chrome':
      // min = 0;
      max = 1;
      step = 0.1;
      // isDisabled = true;
      // updateValue = {0, 1, 0.1, false};
      break;
    // case 'sepia':
    //   // {0, 1, 0.1, false};
    //   updateValue[min] = 0;
    //   updateValue[max] = 1;
    //   updateValue[step] = 0.1;
    //   updateValue[isDisabled] = false;
    //   break;
    // case 'marvin':
    //   // {1, 100, 1, false};
    //   updateValue[min] = 1;
    //   updateValue[max] = 100;
    //   updateValue[step] = 1;
    //   updateValue[isDisabled] = false;
    //   break;
    // case 'phobos':
    //   // {0, 3, 0.1, false};
    //   updateValue[min] = 0;
    //   updateValue[max] = 3;
    //   updateValue[step] = 0.1;
    //   updateValue[isDisabled] = false;
    //   break;
    // case 'heat':
    //   // {1, 3, 0.1, false};
    //   updateValue[min] = 1;
    //   updateValue[max] = 3;
    //   updateValue[step] = 0.1;
    //   updateValue[isDisabled] = false;
    //   break;
    // case 'none':
    // default:
      updateValue[isDisabled] = true;
  }
  return {min, max, step, isDisabled};
}

const useEffectLevel = (evt) => {
  const updateValue = getEffectValue(evt.value);

  // setUpdateSlider(updateValue);
  console.log(updateValue);
}












// 1. создать slider

// 2. getEffectClass from effects-upload.js
// if getEffectClass === effects__preview--none - slider{"disable", true}
// else { slider{"disable", false} }

// 3. применять эффекты


// добавлять итоговую функцию наверное нужно в функцию openPhotoEditingModal модуля modal-upload.js в виде слушателя события 'change' на элемент effectsList
// export ''
export { createdEffectsSlider, useEffectLevel }
