const findTheOldest = function (people) {
  let birthYear;
  let deathYear;
  let difference = 0;

  for (let i = 0; i < people.length; i++) {
    Object.keys(people[i]).forEach((key) => {
      if (key === "yearOfBirth") {
        birthYear = people[i][key];
      }

      if (key === "yearOfDeath") {
        deathYear = people[i][key];
      }

      if (birthYear && deathYear) {
        if (deathYear - birthYear > difference) {
          difference = deathYear - birthYear;
          birthYear = 0;
          deathYear = 0;
        } else {
          difference = difference;
        }
      }
    });
  }

  for (let i = 0; i < people.length; i++) {
    Object.keys(people[i]).forEach((key) => {
      if (key === "yearOfBirth") {
        birthYear = people[i][key];
      }

      if (key === "yearOfDeath") {
        deathYear = people[i][key];
      }

      if (deathYear - birthYear === difference) {
        return people[i];
        birthYear = 0;
        deathYear = 0;
      }
    });
  }
};

// Do not edit below this line
module.exports = findTheOldest;
