const bigPicture = document.querySelector('.big-picture');
const commentsList = bigPicture.querySelector('.social__comments');

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createComment = ({ avatar, name, message }) => {
  const comment = createElement('li', 'social__comment');
  const commentAvatar = createElement('img', 'social__picture');
  commentAvatar.src = avatar;
  commentAvatar.alt = name;
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  const commentText = createElement('p', 'social__text', message);
  comment.append(commentAvatar);
  comment.append(commentText);
  return comment;
};

const createComments = (elements) => {
  const fragment = document.createDocumentFragment();
  elements.forEach((element) => {
    fragment.append(createComment(element));
  });
  return fragment;
};

const hideCommentsLoaderButton = (isHidden) => {
  const commentsLoaderButton = bigPicture.querySelector('.comments-loader');
  if (isHidden) {
    commentsLoaderButton.classList.add('hidden');
  } else {
    commentsLoaderButton.classList.remove('hidden');
  }

}

const createOnShowMoreComments = (dataComments, socialComments) => {
  if (dataComments.length <= 5) {
    hideCommentsLoaderButton(true);
    socialComments.append(createComments(dataComments));
    return null;
  };

  hideCommentsLoaderButton(false);
  socialComments.append(createComments(dataComments.slice(0, 5)));

  return () => {
    const currentComment = socialComments.children.length;
    const nextComment = currentComment + 5;
    const nextComments = dataComments.slice(currentComment, nextComment);
    socialComments.append(createComments(nextComments));
    currentComment = socialComments.children.length;

    if (currentComment >= dataComments.length) {
      hideCommentsLoaderButton(true);
      return true;
    }
    return false;
  }
}

export { createOnShowMoreComments, createComments, hideCommentsLoaderButton };
