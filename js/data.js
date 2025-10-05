import { getRandomNumRange, getRandomUniqueNums } from './utill.js';

const NAMES = ['Леопольд', 'Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const TEXT_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const PHOTO_DESCRIPTIONS = ['#сказочноебали', 'Фото из 2020', 'Славное было время', 'Немного эстетики', 'Are you ready?', 'Вы этому верите?!', 'Пусть будет тута', 'А что бы написал ты?', 'Продолжение следует'];

// Возвращает обьект Комментарий
const getComment = (id) => {
  const message = TEXT_COMMENTS[getRandomNumRange(0, (TEXT_COMMENTS.length - 1))];
  const name = NAMES[getRandomNumRange(0, (NAMES.length - 1))];
  return {
    id: id,
    avatar: `img/avatar-${getRandomNumRange(1, 6)}.svg`,
    message: message,
    name: name
  };
};

// Возвращает массив обьектов Комментарий
const getComments = () => {
  const count = getRandomNumRange(1, 200);
  const arrayUniqueNums = getRandomUniqueNums(count);
  const arrayComments = [];

  for (let i = 0; i < count; i++) {
    arrayComments.push(getComment(arrayUniqueNums[i]));
  }
  return arrayComments;
};
// Возвращает обьект "Описание фотографий с вложенным массивом обьктов "Комментарий""
const getPicture = (id) => {
  const description = PHOTO_DESCRIPTIONS[getRandomNumRange(0, (PHOTO_DESCRIPTIONS.length - 1))];
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: description,
    likes: getRandomNumRange(15, 200),
    comments: getComments()
  };

};
// Возвращает массив обьектов "Описание фотографий с вложенными массивами обьктов "Комментарий""
// Функция уже не нужна. Вроде бы.
const getPictures = (count = 25) => {
  const arrayUniqueNums = getRandomUniqueNums(count);
  const arrayPictures = [];

  for (let i = 0; i < count; i++) {
    arrayPictures.push(getPicture(arrayUniqueNums[i]));
  }

  return arrayPictures;
};

export { getPictures };
