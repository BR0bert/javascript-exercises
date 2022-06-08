const fibonacci = function (input) {
  const inputToInteger = parseInt(input);

  if (inputToInteger < 0) {
    return "OOPS";
  }

  if (inputToInteger === 1 || inputToInteger === 2) {
    return 1;
  }

  let n1 = 1;
  let n2 = 1;
  let temp;
  let i = 3;

  while (i <= inputToInteger) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    i++;
  }

  return temp;
};

// Do not edit below this line
module.exports = fibonacci;
