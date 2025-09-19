const showMessageFormSubmissionResult = (isSuccess) => {
  let classElement = null;
  isSuccess ? classElement = 'success' : classElement = 'error';
  const messageElement = document
  .querySelector(`#${classElement}`)
  .content
  .querySelector(`.${classElement}`);

  const body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', messageElement);
};

export { showMessageFormSubmissionResult }
