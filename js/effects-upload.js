const form = document.querySelector('.img-upload__form');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');

const removeClass = () => {
  const imgUploadClasses = imgUploadPreview.classList;

  imgUploadClasses
    .forEach((imgUploadClass) => {
      const isIncludes = imgUploadClass.includes('effects__preview--');
      if (isIncludes) {
        imgUploadClasses.remove(imgUploadClass);
      }
    });
};

const addedDefaultEffect = () => {
  imgUploadPreview.classList.add('effects__preview--none');
  document.querySelector('.effects__item:first-of-type').querySelector('.effects__radio').checked = true;
};

const getEffectClass = (input) => {
  const changeInput = input.matches('input[type="radio"]:checked');
  if (changeInput) {
    return (`effects__preview--${input.value}`);
  }
};

const useEffectClass = (effectClass) => {
  imgUploadPreview.classList.add(effectClass);
};

const useEffects = (evt) => {
  removeClass();
  const effectClass = getEffectClass(evt);
  useEffectClass(effectClass);
};

export { removeClass, addedDefaultEffect, useEffects };
