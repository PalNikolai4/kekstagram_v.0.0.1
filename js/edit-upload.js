const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('#upload-file');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const uploadScale = form.querySelector('.scale');
const uploadScaleField = uploadScale.querySelector('.scale__control--value');
const smallerButton = uploadScale.querySelector('.scale__control--smaller');
const biggerButton = uploadScale.querySelector('.scale__control--bigger');
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



const onUploadScaleClick = (evt) => {
  let currentScale = parseInt(uploadScaleField.value);

  if (evt.target === smallerButton) {
    currentScale -= 25;
  }


  if (evt.target === biggerButton) {
    currentScale += 25;
  }

  imgUploadPreview.style.transform = `scale(${(currentScale / 100)})`;
  uploadScaleField.value = currentScale + '%';
}



// сделать отдельную функцию которая будет проверять uploadScaleField.value и состояние кнопок

export { showSelectedPhoto, onUploadScaleClick }
