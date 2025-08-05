const body = document.querySelector('body');
const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('#upload-file');
const imgUploadOverlay = form.querySelector('.img-upload__overlay');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');

// Выбор фотографии и её подстановка в окно предпросмотра
const onPhotoEditingModal = (isClose) => {
  const file = uploadField.files[0];
  if (!file) return;
  if (!isClose) {
    imgUploadPreview.src = URL.createObjectURL(file);
  } else {
    URL.revokeObjectURL(file);
  }
}
// addEventListener on uploadField or form ???
const openPhotoEditingModal = () => {
  uploadField.addEventListener('change', () => {
    body.classList.add('modal-open');
    imgUploadOverlay.classList.remove('hidden');

    onPhotoEditingModal();
    })
}
const closePhotoEditingModal = () => {
    body.classList.remove('modal-open');
    imgUploadOverlay.classList.add('hidden');

    onPhotoEditingModal(true);

}







export { openPhotoEditingModal }
