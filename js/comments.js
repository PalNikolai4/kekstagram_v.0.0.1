const bigPicture = document.querySelector('.big-picture');
const commentsCountInfo = bigPicture.querySelector('.social__comment-count');

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
};

const changesNumberCommentsShown = (dataComments, socialComments) => {
  commentsCountInfo.innerHTML = '';
  const insertText = `${socialComments.children.length} из <span class="comments-count">${dataComments.length}</span> комментариев`;
  commentsCountInfo.insertAdjacentHTML('afterbegin', insertText);
};

const createOnShowMoreComments = (dataComments, socialComments) => {
  const COUNT_COMMENTS_SHIFT = 5;

  if (dataComments.length <= COUNT_COMMENTS_SHIFT) {
    hideCommentsLoaderButton(true);
    socialComments.append(createComments(dataComments));
    changesNumberCommentsShown(dataComments, socialComments);
    return null;
  }

  hideCommentsLoaderButton(false);
  socialComments.append(createComments(dataComments.slice(0, COUNT_COMMENTS_SHIFT)));
  changesNumberCommentsShown(dataComments, socialComments);

  return () => {
    let currentComment = socialComments.children.length;
    const nextComment = currentComment + COUNT_COMMENTS_SHIFT;
    const nextComments = dataComments.slice(currentComment, nextComment);
    socialComments.append(createComments(nextComments));
    currentComment = socialComments.children.length;
    changesNumberCommentsShown(dataComments, socialComments);
    if (currentComment >= dataComments.length) {
      hideCommentsLoaderButton(true);
      return true;
    }
    return false;
  };
};

export { createOnShowMoreComments, createComments, hideCommentsLoaderButton };
