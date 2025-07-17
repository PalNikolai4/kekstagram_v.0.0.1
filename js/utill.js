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
const getRandomUniqueNum = (rangeStart = 1, rangeEnd = 10) => {
  const min = Math.min(rangeStart, rangeEnd);
  const max = Math.max(rangeStart, rangeEnd);
  const values = [];

  return () => {
    let value = getRandomNumRange(min, max);

    if (values.length >= (max - min + 1)) {
      return values;
    }

    while (values.includes(value)) {
      value = getRandomNumRange(min, max);
    }
    values.push(value);
    return values;
  }
}

// Возвращает массив уникальных целых случайных чисел из диапазона
const getRandomUniqueNums = (count = 1, rangeStart = 1, rangeEnd = count) => {
  const value = getRandomUniqueNum(rangeStart, rangeEnd);
  let randomUniqueNumsArray;

  for (let i = 0; i < count; i++) {
    randomUniqueNumsArray = value();
  }
  return randomUniqueNumsArray;
}

export { getRandomNumRange, getRandomUniqueNum, getRandomUniqueNums };
