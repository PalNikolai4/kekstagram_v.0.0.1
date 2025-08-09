const form = document.querySelector('.img-upload__form');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const effectsList = form.querySelector('.effects__list');

const removeClass = () => {
  const imgUploadClasses = imgUploadPreview.classList;

  imgUploadClasses
  .forEach(imgUploadClass => {
    const isIncludes = imgUploadClass.includes('effects__preview--');
    if ( isIncludes ) imgUploadClasses.remove(imgUploadClass);
  });
}

const addedDefaultEffectClass = () => {
  imgUploadPreview.classList.add('effects__preview--none');
}

const getEffectClass = (input) => {
  const changeInput = input.matches('input[type="radio"]:checked');
  if (changeInput) return (`effects__preview--${input.value}`);
}

const useEffectClass = (effectClass) => {
  imgUploadPreview.classList.add(effectClass);
}

effectsList.addEventListener('change', (evt) => {
  removeClass();

  const effectClass = getEffectClass(evt.target);
  useEffectClass(effectClass);

})

export { addedDefaultEffectClass, removeClass }
