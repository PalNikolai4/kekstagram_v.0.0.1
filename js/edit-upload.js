const form = document.querySelector('.img-upload__form');
const uploadField = form.querySelector('#upload-file');
const imgUploadPreview = form.querySelector('.img-upload__preview').querySelector('img');
const uploadScale = form.querySelector('.scale');
const uploadScaleField = uploadScale.querySelector('.scale__control--value');
const smallerButton = uploadScale.querySelector('.scale__control--smaller');
const biggerButton = uploadScale.querySelector('.scale__control--bigger');
const SCALE_STEP = 25;
let currentPhotoUrl = null;

const showSelectedPhoto = (isClose) => {
  const file = uploadField.files[0];

  if (!file) { return; }
  if (!isClose) {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
    }
    currentPhotoUrl = URL.createObjectURL(file);
    imgUploadPreview.src = currentPhotoUrl;
    uploadScaleField.value = '100%';
    imgUploadPreview.style.transform = 'scale(1)';
    uploadScale.addEventListener('click', onUploadScaleClick);
  } else {
    if (currentPhotoUrl) {
      URL.revokeObjectURL(currentPhotoUrl);
      currentPhotoUrl = null;
    }
    uploadField.value = '';
    uploadScale.removeEventListener('click', onUploadScaleClick);
  }
};

const blockingScaleButtonsOnLoading = () => {
  const currentValue = parseInt(uploadScaleField.value, 10);

  if (currentValue <= SCALE_STEP) {
    smallerButton.disabled = true;
  } else {
    smallerButton.disabled = false;
  }

  if (currentValue >= 100) {
    biggerButton.disabled = true;
  } else {
    biggerButton.disabled = false;
  }

  if ((currentValue + SCALE_STEP) > 100) {
    biggerButton.disabled = true;
  } else {
    biggerButton.disabled = false;
  }
};

const blockingSmallerButton = (currentScale) => {
  if (biggerButton.disabled) {
    biggerButton.disabled = false;
  } else {
    biggerButton.disabled = true;
  }

  if (currentScale - SCALE_STEP <= 25) {
    smallerButton.disabled = true;
  } else {
    smallerButton.disabled = false;
  }
};

const blockingBiggerButton = (currentScale) => {
  if (smallerButton.disabled) {
    smallerButton.disabled = false;
  } else {
    smallerButton.disabled = true;
  }

  if (currentScale + SCALE_STEP >= 100) {
    biggerButton.disabled = true;
  } else {
    biggerButton.disabled = false;
  }
};

function onUploadScaleClick (evt) {
  let currentScale = parseInt(uploadScaleField.value, 10);

  if (evt.target === smallerButton) {
    blockingSmallerButton(currentScale);
    currentScale -= SCALE_STEP;
  }

  if (evt.target === biggerButton) {
    blockingBiggerButton(currentScale);
    currentScale += SCALE_STEP;
  }

  imgUploadPreview.style.transform = `scale(${(currentScale / 100)})`;
  uploadScaleField.value = `${currentScale}%`;
}

export { showSelectedPhoto, blockingScaleButtonsOnLoading, onUploadScaleClick };
