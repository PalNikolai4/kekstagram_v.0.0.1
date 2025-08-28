const bigPicture = document.querySelector('.big-picture');
const commentsCount = bigPicture.querySelector('.comments-count');

const showsMoreComments = (comments) => {
  console.log(comments.children.length);
}

export { showsMoreComments }
