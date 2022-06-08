const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (...numbers) {
  numbersToAdd = Array.from(...numbers);
  let sum = 0;

  for (let i = 0; i < numbersToAdd.length; i++) {
    sum = sum + numbersToAdd[i];
  }

  return sum;
};

const multiply = function (...numbers) {
  numbersToMultiply = Array.from(...numbers);
  let result = 1;
  for (let i = 0; i < numbersToMultiply.length; i++) {
    result = result * numbersToMultiply[i];
  }

  return result;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  if (n === 0) {
    return 1;
  }

  let result = 1;
  let i = 1;

  while (i <= n) {
    result = result * i;
    i++;
  }

  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
