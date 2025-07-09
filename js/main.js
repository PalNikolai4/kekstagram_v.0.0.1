// Возвращает положительное число
const getPositiveNumber = (number) => {
  number = Number(number);
  return (number < 0) ? (number * (-1)) : number;
};

// Возвращает случайное целое положительное число из диапазона
const getRandomNumRange = (firstNum, secondNum) => {
  firstNum = getPositiveNumber(firstNum);
  secondNum = getPositiveNumber(secondNum);
  const min = Math.min(firstNum, secondNum);
  const max = Math.max(firstNum, secondNum);
  return  Math.floor(Math.random() * (max - min + 1)) + min;
};
getRandomNumRange(1, 5);

// Сравнивает длину строки с числом.
const checkStringLength = (string, maxLength) => Number(string.length) < Number(maxLength);
checkStringLength('afkj oijadf ojoj', 2);
