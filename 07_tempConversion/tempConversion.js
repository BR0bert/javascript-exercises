const ftoc = function (tempInF) {
  celsius = Math.round((tempInF - 32) * (5 / 9) * 10) / 10;
  return celsius;
};

const ctof = function (tempInC) {
  fahrenheit = Math.round((tempInC * (9 / 5) + 32) * 10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
