const createLoader = (onFail, ...onSuccess) => () =>
  fetch(
    'https://25.javascript.htmlacademy.pro/kekstagram/data/',
    {
      method: 'GET',
      credentials: 'same-origin'
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Ошибка сети. Попробуйте позже');
      }
      return response.json();
    })
    .then((data) => {
      const [renderPictures, renderInfoFullPicture, openPhotoEditingModal, showImgFilters] = onSuccess;

      if (
        typeof renderPictures === 'function' &&
        typeof renderInfoFullPicture === 'function' &&
        typeof openPhotoEditingModal === 'function' &&
        typeof showImgFilters === 'function'

      ) {
        renderPictures(data);
        renderInfoFullPicture(data);
        openPhotoEditingModal();
        showImgFilters();
      }
    })
    .catch((err) => onFail(err.message));


const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://25.javascript.htmlacademy.pro/kekstagram/',
    {
      method: 'POST',
      body
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error('Не удалось отправить форму. Попробуйте ещё раз');
      }
      onSuccess();
    })
    .catch(() => onFail('Не удалось отправить форму. Попробуйте ещё раз'));
};

export { createLoader, sendData };
