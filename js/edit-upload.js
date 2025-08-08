const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('#upload-file');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const uploadScale = form.querySelector('.scale');
const uploadScaleField = uploadScale.querySelector('.scale__control--value');
const smallerButton = uploadScale.querySelector('.scale__control--smaller');
const biggerButton = uploadScale.querySelector('.scale__control--bigger');
const SCALE_STEP = 25;
let currentPhotoUrl = null;
// Выбор фотографии и её подстановка в окно просмотра upload
const showSelectedPhoto = (isClose) => {
  const file = uploadField.files[0];
  uploadScaleField.value = '100%';
  if (!file) return;
  if (!isClose) {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
    }
    currentPhotoUrl = URL.createObjectURL(file);
    imgUploadPreview.src = currentPhotoUrl;
    uploadScale.addEventListener('click', onUploadScaleClick);
  } else {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
      currentPhotoUrl = null;
    }
    uploadField.value = '';
    uploadScale.removeEventListener('click', onUploadScaleClick);
  }
}

const blockingScaleButtonsOnLoading = () => {
  const currentValue = parseInt(uploadScaleField.value);
  if (currentValue === 0) {
    smallerButton.disabled = true;
  }

  if (currentValue === 100) {
    biggerButton.disabled = true;
  }
}

const blockingSmallerButton = (currentScale) => {
  (biggerButton.disabled) ? (biggerButton.disabled = false) : (biggerButton.disabled = true);
  (currentScale - SCALE_STEP <= 25) ? (smallerButton.disabled = true) : (smallerButton.disabled = false);
}

const blockingBiggerButton = (currentScale) => {
  (smallerButton.disabled) ? (smallerButton.disabled = false) : (smallerButton.disabled = true);
  (currentScale + SCALE_STEP >= 100) ? (biggerButton.disabled = true) : (biggerButton.disabled = false);
}

const onUploadScaleClick = (evt) => {
  let currentScale = parseInt(uploadScaleField.value);

  if (evt.target === smallerButton) {
    blockingSmallerButton(currentScale);
    currentScale -= SCALE_STEP;
  }


  if (evt.target === biggerButton) {
    blockingBiggerButton(currentScale);
    currentScale += SCALE_STEP;
  }

  imgUploadPreview.style.transform = `scale(${(currentScale / 100)})`;
  uploadScaleField.value = currentScale + '%';
}



// сделать отдельную функцию которая будет проверять uploadScaleField.value и состояние кнопок

export { showSelectedPhoto, blockingScaleButtonsOnLoading, onUploadScaleClick }
