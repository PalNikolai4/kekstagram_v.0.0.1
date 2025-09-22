import { isEsc } from "./utill.js";

const showMessageFormSubmissionResult = (isSuccess) => {
  let classElement = null;
  isSuccess ? classElement = 'success' : classElement = 'error';

  const template = document.querySelector(`#${classElement}`);
  const messageElement = template.content.querySelector(`.${classElement}`).cloneNode(true);

  const body = document.querySelector('body');
  body.insertAdjacentElement('beforeend', messageElement);

  const onEscKeyDown = (evt) => {
    if (isEsc(evt)) {
      messageElement.remove();
      document.removeEventListener('keydown', onEscKeyDown);
    }
  };
  document.addEventListener('keydown', onEscKeyDown);

  const button = messageElement.querySelector(`.${classElement}__button`);
  button.addEventListener('click', () => {
    messageElement.remove();
    document.removeEventListener('keydown', onEscKeyDown);
  });

  messageElement.addEventListener('click', (evt) => {
    if (evt.target === messageElement) {
      messageElement.remove();
      document.removeEventListener('keydown', onEscKeyDown);
    };
  });

};

export { showMessageFormSubmissionResult }
