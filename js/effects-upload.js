const form = document.querySelector('.img-upload__form');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const effectsList = form.querySelector('.effects__list');


const getEffectClass = (input) => {
  const changeInput = input.matches('input[type="radio"]');
  if (changeInput) return (`effects__preview--${input.value}`);
}

const useEffectClass = (effectClass) => {
  imgUploadPreview.classList.add(effectClass);
}

effectsList.addEventListener('change', (evt) => {
  const effectClass = getEffectClass(evt.target);
  useEffectClass(effectClass);


  // console.log(effectClass);
  console.log(imgUploadPreview.classList);
})

// сделал функцию getEffectClass - получает выбранный инпут и в соответствии с ним возвращает нужный класс эффекта
// сделал функцию useEffectClass - находит изображение и применяет к нему выбранный класс эффекта
// предлагаю упростить код - сделать функцию как в упражнении со смайлами
