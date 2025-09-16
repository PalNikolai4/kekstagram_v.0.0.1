const getData = (onFail, ...onSuccess) => {
  fetch('https://25.javascript.htmlacademy.pro/kekstagram/data/')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Ошибка сети. Попробуйте позже');
    }
    return response.json();
  })
  .then((data) =>  {
    const [ renderPictures, renderInfoFullPicture, openPhotoEditingModal ] = onSuccess;
    if (
      typeof renderPictures === 'function' &&
      typeof renderInfoFullPicture === 'function' &&
      typeof openPhotoEditingModal === 'function'
    ) {
      renderPictures(data);
      renderInfoFullPicture(data);
      openPhotoEditingModal();
    }
  })
  .catch((err) => onFail(err.message));
}

export { getData }
