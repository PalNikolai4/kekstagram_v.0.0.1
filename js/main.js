const NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
const TEXT_COMMENTS = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const PHOTO_DESCRIPTIONS = ['Сказочное Бали', 'Фото из 2020', 'Славное было время', 'Немного эстетики', 'Are you ready?', 'Вы этому верите?!', 'Пусть будет тута', 'А что бы написал ты?', 'Продолжение следует'];

// Сравнивает длину строки с числом.
const checkStringLength = (string = '', maxLength = 0) => Number(string.length) < Number(maxLength);
checkStringLength();

// Возвращает положительное число
const getPositiveNumber = (number) => {
  number = Number(number);
  return (number < 0) ? (number * (-1)) : number;
};

// Возвращает случайное целое положительное число из диапазона
const getRandomNumRange = (firstNum = 1, lastNum = 10) => {
  firstNum = getPositiveNumber(firstNum);
  lastNum = getPositiveNumber(lastNum);
  const min = Math.min(firstNum, lastNum);
  const max = Math.max(firstNum, lastNum);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumRange();

// Возвращает массив уникальных случайных целых положительных чисел из диапазона
const getArrayUniqueNumbers = (firstNum = 1, lastNum = 10, countNumbers = (lastNum - firstNum + 1)) => {
  const uniqueNumbers = [];
  while (uniqueNumbers.length < countNumbers) {
    let num = getRandomNumRange(firstNum, lastNum);
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }
  return uniqueNumbers;
};
getArrayUniqueNumbers();

// Возвращает комментарий к фотографии
const getComment = () => {
  const message = TEXT_COMMENTS[getRandomNumRange(0, TEXT_COMMENTS.length - 1)];
  const name = NAMES[getRandomNumRange(0, NAMES.length - 1)];
  const id = getRandomNumRange(1, 1000);
  return {
    id: id,
    avatar: `img/avatar-${id}.svg`,
    message: message,
    name: name
  }
}

// Возвращает массив комментариев к фотографии
const getComments = (countComments) => {
  if (!countComments) {
    countComments = getRandomNumRange(1, 10);
  }
  const comments = [];
  while (comments.length < countComments) {
    comments.push(getComment());
  }
  return comments;
}

// Возвращает описание и комментарии к фотографии
const getPhotoDescription = (id) => {
  return {
    id: id,
    url: `photos/${id}.jpg`,
    description: PHOTO_DESCRIPTIONS[getRandomNumRange(0, (PHOTO_DESCRIPTIONS.length - 1))],
    likes: getRandomNumRange(15, 200),
    comments: getComments()
  }
}
getPhotoDescription();

// Возвращает массив описаний и комментариев к фотографиям
const getPhotosDescriptions = (countDescriptions) => {
  if (!countDescriptions || countDescriptions > 25) {
    countDescriptions = getRandomNumRange(1, 25);
  }

  const descriptionsArr = [];
  const idArr = getArrayUniqueNumbers(1, countDescriptions);

  for (let i = 0; i < countDescriptions; i++) {
    const description = getPhotoDescription(idArr[i]);
    descriptionsArr.push(description);
  }

  return descriptionsArr;
}
const descriptionsArr = getPhotosDescriptions();
console.log(descriptionsArr);
