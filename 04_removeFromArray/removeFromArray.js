const removeFromArray = function (array, ...numbers) {
  series = [...numbers];

  for (let i = 0; i <= series.length - 1; i++) {
    if (array.includes(series[i])) {
      array.splice(array.indexOf(series[i]), 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
