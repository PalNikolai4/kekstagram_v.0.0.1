// 'use strict';

// Сравнивает длину строки с числом.
const checkStringLength = (string = '', maxLength = 0) => Number(string.length) < Number(maxLength);
checkStringLength();

// Возвращает положительное число
const getPositiveNumber = (number) => {
  number = Number(number);
  return (number < 0) ? (number * (-1)) : number;
};

// Возвращает случайное целое положительное число из диапазона
const getRandomNumRange = (firstNum = 0, lastNum = 100) => {
  firstNum = getPositiveNumber(firstNum);
  lastNum = getPositiveNumber(lastNum);
  const min = Math.min(firstNum, lastNum);
  const max = Math.max(firstNum, lastNum);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumRange();

// Возвращает уникальное случайное целое положительное число из диапазона
const getArrayUniqueNumbers = (firstNum = 0, lastNum = 100, countNumbers = 10) => {
  // Проверка на возможность получения количества уникальных чисел из заданного диапазона
  // Проверка не обязательна. Можно удалить
  if (countNumbers > (lastNum - firstNum + 1)) {
    firstNum = getPositiveNumber(firstNum);
    lastNum = getPositiveNumber(lastNum);
    let countNumberFromRange = lastNum - firstNum + 1;
    let difference = countNumbers - countNumberFromRange;
    message = `Количество запрошенных уникальных чисел (${countNumbers}) больше диапазона возможных чисел (${countNumberFromRange}) на ${difference}`;
    return console.log(message);
  }

  // Получение массива случайных чисел
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


//
const getPhotoDescription = () => {
  return {
    id: 1,
    url: `photos/1.jpg`,
    description: 'Description photo',
    likes: getRandomNumRange(15, 200),
    comments: []
  }
}
console.log(getPhotoDescription());
