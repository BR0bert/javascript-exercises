const palindromes = function (input) {
  let justLetters = [];
  let joined;

  for (let i = 0; i < input.length; i++) {
    if (/[a-zA-Z]/.test(input[i])) {
      justLetters.push(input[i]);
    }
  }

  joined = justLetters.join("");

  let palindromeArray = [];
  let joinedPalindromeString;

  for (let i = joined.length - 1; i >= 0; i--) {
    palindromeArray.push(joined[i]);
  }

  joinedPalindromeString = palindromeArray.join("");

  if (
    joined.toLocaleLowerCase() === joinedPalindromeString.toLocaleLowerCase()
  ) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
