// Возвращает положительное число
const getPositiveNumber = (number) => {
  number = Number(number);
  return (number < 0) ? (number * (-1)) : number;
};

// Возвращает случайное целое положительное число из диапазона
const getRandomNumRange = (firstNum = 0, secondNum = 100) => {
  firstNum = getPositiveNumber(firstNum);
  secondNum = getPositiveNumber(secondNum);
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumRange();

// Сравнивает длину строки с числом.
const checkStringLength = (string = "", maxLength = 0) => Number(string.length) < Number(maxLength);
checkStringLength();
