// this will be printed to the browser console


console.log("hello running script..");

// Variables
var message = "Welcome!";
let user1 = 'Max';
// constant variable
const username = 'chris1';
//let is very flexible
// let userInput;
// userInput = prompt("Enter your name ");

console.log(message);
console.log(user1);
// console.log(chris1);

let userage = 20;
console.log(userage);

const myName = "omileye";
console.log(myName.at(-1));
// console.log(myName[-1]);


// Assignment

// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const isOver25 = n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25;

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && !isOver25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//PART1

// A Is divisible by 5
let DivisibleBy5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
console.log(DivisibleBy5);

//B first number is larger than the last
let firstLargerThanLast = (n1 > n4)
console.log(firstLargerThanLast);

//C 
const a = n2 - n1
console.log(a);

const b = a * n3
console.log(b);

const c = b % 4
console.log(c);

// D
const NotisOver25 = n1 < 25 && n2 < 25 && n3 < 25 && n4 && 25;

const DoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  n1 < 25 && n2 < 25 && n3 < 25 && n4 && 25 && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

  console.log(DoThis);

  //PART2

  // Constants
const totalDistance = 1500; // miles
const fuelBudget = 175; // dollars
const costPerGallon = 3; // dollars

// Car's fuel efficiency
const efficiencies = {
  55: 30, // miles per gallon
  60: 28, // miles per gallon
  75: 23 // miles per gallon
};

// Function to calculate fuel needed for the trip
function calculateFuelNeeded(speed) {
  const efficiency = efficiencies[speed];
  return totalDistance / efficiency;
}

// Function to calculate trip duration
function calculateTripDuration(speed) {
  return totalDistance / speed;
}

// Function to check if budget is enough to cover fuel expense
function isBudgetEnough(speed) {
  const fuelNeeded = calculateFuelNeeded(speed);
  const fuelExpense = fuelNeeded * costPerGallon;
  return fuelExpense <= fuelBudget;
}

// Function to compare results at different speeds
function compareResults() {
  const speeds = [55, 60, 75];
  speeds.forEach(speed => {
    const fuelNeeded = calculateFuelNeeded(speed);
    const tripDuration = calculateTripDuration(speed);
    const budgetEnough = isBudgetEnough(speed);

    console.log(`Results at ${speed} miles per hour:`);
    console.log(`- Gallons of fuel needed: ${fuelNeeded}`);
    console.log(`- Trip duration: ${tripDuration} hours`);
    console.log(`- Budget enough: ${budgetEnough ? 'Yes' : 'No'}`);
    console.log("");
  });
}

// Call function to compare results
compareResults();

 //PART3, Future Exploration
 