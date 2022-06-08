const getTheTitles = function (books) {
  let titles = [];

  for (let i = 0; i < books.length; i++) {
    Object.keys(books[i]).forEach((key) => {
      if (key === "title") {
        titles.push(books[i][key]);
      }
    });
  }

  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
