const repeatString = function (word, times) {
  result = "";

  if (times < 0) {
    return "ERROR";
  }

  if (word === "") {
    return "";
  }
  for (let i = 0; i < times; i++) {
    result = result + word;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
