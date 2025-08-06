const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('#upload-file');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
let currentPhotoUrl = null;

// Выбор фотографии и её подстановка в окно просмотра upload
const showSelectedPhoto = (isClose) => {
  const file = uploadField.files[0];
  if (!file) return;
  if (!isClose) {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
    }
    currentPhotoUrl = URL.createObjectURL(file);
    imgUploadPreview.src = currentPhotoUrl;
  } else {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
      currentPhotoUrl = null;
    }
    uploadField.value = '';
  }
}

export { showSelectedPhoto }
