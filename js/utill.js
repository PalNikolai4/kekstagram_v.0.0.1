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
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumRange();

// Возвращает уникальное целое случайное число из диапазона
const getRandomUniqueNumberFromRange = (firstNum = 1, lastNum = 10) => {
  const min = Math.min(firstNum, lastNum);
  const max = Math.max(firstNum, lastNum);
  const uniqueNumbers = [];

  return function () {
    let value = getRandomNumRange(min, max);

    if (uniqueNumbers.length >= (max - min + 1)) {
      return uniqueNumbers;
    }

    while (uniqueNumbers.includes(value)) {
      value = getRandomNumRange(min, max);
    }
    uniqueNumbers.push(value);
    return uniqueNumbers;
  }
}

export { getRandomUniqueNumberFromRange };
