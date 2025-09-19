const showMessageFormSubmissionResult = (isSuccess) => {
  let classElement = null;
  isSuccess ? classElement = 'success' : classElement = 'error';

  const template = document.querySelector(`#${classElement}`);
  const messageElement = template.content.querySelector(`.${classElement}`).cloneNode(true);

  const body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', messageElement);

  const button = messageElement.querySelector(`.${classElement}__button`);
  button.addEventListener('click', () => {
    messageElement.remove();
  })

};

export { showMessageFormSubmissionResult }
