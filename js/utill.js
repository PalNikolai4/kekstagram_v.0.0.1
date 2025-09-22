const ALERT_SHOW_TIME = 5000;

const checkStringLength = (string = '', maxLength = 0) => Number(string.length) < Number(maxLength);
checkStringLength();

const getPositiveNumber = (number) => {
  number = Number(number);
  return (number < 0) ? (number * (-1)) : number;
};

const getRandomNumRange = (firstNum = 1, lastNum = 10) => {
  firstNum = getPositiveNumber(firstNum);
  lastNum = getPositiveNumber(lastNum);
  const min = Math.min(firstNum, lastNum);
  const max = Math.max(firstNum, lastNum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
  };
};

const getRandomUniqueNums = (count = 1, rangeStart = 1, rangeEnd = count) => {
  const value = getRandomUniqueNum(rangeStart, rangeEnd);
  let randomUniqueNumsArray;

  for (let i = 0; i < count; i++) {
    randomUniqueNumsArray = value();
  }
  return randomUniqueNumsArray;
};

const isEsc = (evt) => evt.key === 'Escape';

const clearHtml = (element) => {
  element.innerHTML = '';
  return element;
};

const getArrFromStr = (stringValue) => {
  const arr = stringValue.split(' ');
  arr.forEach((element, index, array) => {
    array[index] = element.toLowerCase();
  });
  return arr;
};

const checksForDuplicates = (arr) => {
  const uniqueElements = new Set(arr);
  return (arr.length === uniqueElements.size);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.position = 'absolute';
  alertContainer.style.top = '10%';
  alertContainer.style.left = '50%';
  alertContainer.style.transform = 'translate(-50%)';
  alertContainer.style.zIndex = 100;
  alertContainer.style.padding = '20px';
  alertContainer.style.backgroundColor = 'rgba(230, 25, 25, 0.7)';
  alertContainer.style.borderRadius = '10px';
  alertContainer.style.fontSize = '2rem';
  alertContainer.style.fontFamily = 'inherit';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.textTransform = 'none';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {
  getRandomNumRange,
  getRandomUniqueNum,
  getRandomUniqueNums,
  isEsc,
  clearHtml,
  getArrFromStr,
  checksForDuplicates,
  showAlert
};
