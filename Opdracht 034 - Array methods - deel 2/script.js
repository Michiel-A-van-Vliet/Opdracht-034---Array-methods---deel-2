// == A ===============================

const superheroes = [
  { name: "Batman", alter_ego: "Bruce Wayne" },
  { name: "Superman", alter_ego: "Clark Kent" },
  { name: "Spiderman", alter_ego: "Peter Parker" },
];

const findSpiderMan = function (array) {
  let ourDude = array.find(function (element) {
    return element.name == "Superman";
  });
  return ourDude;
};

console.log(findSpiderMan(superheroes));
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

// == B ===============================

const doubleArrayValues = function (array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element * 2);
  });
  return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));
// result should be [2, 4, 6]

// == C ===============================

const containsNumberBiggerThan10 = function (array) {
  let isTrue = false;
  array.forEach(function (number) {
    if (number > 10) {
      isTrue = true;
    }
  });
  return isTrue;
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));
// result should be true
console.log(containsNumberBiggerThan10([1, 2, 1, 2, 1, 2]));
// result should be false

// == D ===============================

isItalyInTheGreat7 = function (array) {
  return array.includes("Italy");
};

console.log(
  isItalyInTheGreat7([
    "Canada",
    "France",
    "Germany",
    "Italy",
    "Japan",
    "United Kingdom",
    "United States",
  ])
);
// result should be true

// == E ===============================

const tenfold = function (array) {
  let newArray = [];
  array.forEach((element) => {
    newArray.push(element * 10);
  });
  return newArray;
};

console.log(tenfold([1, 4, 3, 6, 9, 7, 11]));
// result should be [10, 40, 30, 60, 90, 70, 110]

// == F ===============================

const isBelow100 = function (array) {
  let isTrue = true;
  array.forEach(function (element) {
    if (element >= 100) {
      isTrue = false;
    }
  });
  return isTrue;
};

console.log(
  isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
);
// result should be: false

// // test
// console.log(isBelow100([101, 200]));
// // result should be: false
// console.log(isBelow100([1, 2]));
// // result should be: true

// == G ===============================

const bigSum = function (array) {
  let reducer = (accumulator, currentValue) => accumulator + currentValue;
  return array.reduce(reducer);
};

console.log(
  bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234])
);
// result should be 1118
