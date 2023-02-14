"use strict"; // it enables strict mode for the .js script, helps to avoid accidental errors

/////////////////////
// -- FUNCTIONS -- //
/////////////////////

/*function logger() {
  console.log(`My name is Anton`);
}

logger(); // calling / running / invoking the function
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(3, 0);
const orangeJuice = fruitProcessor(0, 5);
const mixJuice = fruitProcessor(3, 5);

console.log(appleJuice);
console.log(orangeJuice);
console.log(mixJuice); */

///////////////////////
// -- FUNCTIONS 2 -- //
///////////////////////

// // function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1989);
// console.log(age1);

// // function expression

// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age2 = calcAge2(1991);
// console.log(age1, age2);

///////////////////////
// -- FUNCTIONS 3 -- //
///////////////////////

// // const calcAge2 = function (birthYear) {
// //   return 2037 - birthYear;
// // };

// // arrow function

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(2005);
// console.log(age3);

// const yearsUntilRetairment = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetairment(1989, "Anton"));
// console.log(yearsUntilRetairment(1993, "Bob"));

///////////////////////
// -- FUNCTIONS 4 -- //
///////////////////////

// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces.`;
//   return juice;
// }

// console.log(fruitProcessor(2, 3));

// const calcAge3 = (birthYear) => 2037 - birthYear;

// const age3 = calcAge3(2005);
// console.log(age3);

///////////////////////
// -- FUNCTIONS 5 -- //
///////////////////////

// const calcAge = function (birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// };

// const yearsUntilRetairment = function (birthYear, firstName) {
//   const retirement = 65 - calcAge(birthYear);

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(
//       `${firstName} has already retired ${Math.abs(retirement)} years ago`
//     );
//     return retirement;
//   }

//   return retirement;
//   // return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetairment(1989, "Anton"));
// console.log(yearsUntilRetairment(1930, "Bob"));

//////////////////////////////
// -- CODE CHALLENGE # 1 -- //
//////////////////////////////

// const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins > avgKoalas * 2) {
//     console.log(
//       `Dolphins win 🏆 (${avgDolphins.toFixed(0)} vs. ${avgKoalas.toFixed(0)})`
//     );
//   } else if (avgKoalas > avgDolphins * 2) {
//     console.log(
//       `Koalas win 🏆 (${avgKoalas.toFixed(0)} vs. ${avgDolphins.toFixed(0)})`
//     );
//   } else {
//     console.log(`No teams win in this game 😭`);
//   }
// };

// const scrDolphins = calcAverage(85, 54, 49);
// const scrKoalas = calcAverage(23, 34, 27);

// console.log(`Dolphins average score is ${scrDolphins.toFixed(0)},
// Koalas average score is ${scrKoalas.toFixed(0)}`);

// checkWinner(scrDolphins, scrKoalas);

// checkWinner(30, 61);

//////////////////
// -- ARRAYS -- //
//////////////////

// const friend1 = "Michael";
// const friend2 = "Stephen";
// const friend3 = "John";

// //WAY # 1
// const friends = ["Michael", "Stephen", "John"];
// console.log(friends);

// // WAY # 2
// const yrs = new Array(1991, 1984, 2008, 2020);
// console.log(yrs);

// // show specific value from an array
// console.log(friends[0], friends[1], friends[2]);

// // show the length of an array
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);

// const firstName = "Anton";
// const anton = [firstName, "Andrusenko", 2023 - 1989, "product owner", friends];
// console.log(anton);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

////////////////////
// -- ARRAYS 2 -- //
////////////////////

// // original array
// const friends = ["Michael", "Stephen", "John"];
// console.log(friends);

// // operations

// // --- add
// const newLength = friends.push("Jay");
// console.log(newLength);
// console.log(friends);

// friends.unshift("Bob");
// console.log(friends);

// // --- remove

// friends.pop(); // takes out last element
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift(); // takes out the first element
// console.log(friends);

// console.log(friends.indexOf("Stephen"));
// friends.push("Bob");

// console.log(friends.indexOf("Bob"));

// console.log(friends.includes("Stephen"));
// console.log(friends.includes("Bob"));

// if (friends.includes("Peter")) {
//   console.log(`Yes you have a friends Peter`);
// } else {
//   console.log(
//     `You don't have a friend called Peter, but there are ${
//       friends.length
//     } others for example ${friends[friends.length - 1]}`
//   );
// }

////////////////////////////
// -- CODE CHALLENGE 2 -- //
////////////////////////////

// const calcTip = function (bill) {
//   if (bill >= 50 && bill <= 300) {
//     const tip = bill * 0.15;
//     return tip;
//   } else {
//     const tip = bill * 0.2;
//     return tip;
//   }
// };

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// console.log(bills);

// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [
//   calcTip(bills[0]) + bills[0],
//   calcTip(bills[1]) + bills[1],
//   calcTip(bills[2]) + bills[2],
// ];
// console.log(total);

////////////////////////////
// -- INTRO TO OBJECTS -- //
////////////////////////////

const anton = {
  firstName: "Anton",
  lastName: "Andrusenko",
  age: 2023 - 1989,
  job: "teacher",
  friends: ["Michael", "Stephen", "Greg"],
};

console.log(anton);

console.log(anton.firstName, anton.lastName);
console.log(anton["firstName"], anton["lastName"]);

const nameKey = "Name";
console.log(anton["first" + nameKey], anton["last" + nameKey]);

const interestedIn = prompt(
  "What do you want to know about Anton? Choose between firstName, lastName, age, job and friends"
);

console.log(anton[interestedIn]);
