const reverseString = function (input) {
  if (input === "") {
    return "";
  }

  splitInput = input.split("");

  //create an array to store the reverse list
  arrayReversed = [];

  for (let i = splitInput.length - 1; i >= 0; i--) {
    arrayReversed.push(splitInput[i]);
  }

  output = arrayReversed.join("");
  return output;
};

// Do not edit below this line
module.exports = reverseString;
