// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
// Remove “Greg”
people.shift();
// Replace “James” with “Jason”
people[2] = "Jason";
// Add my name to the end
people.push("azdine");
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
const newPeople = people.slice(1, 3);
console.log(newPeople);
// Write code that gives the index of “Foo”. Why does it return -1
console.log(people.indexOf("Foo"));
// Last element of the array
const last = people[people.length - 1];
console.log(last);
//  Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
}
// Using a loop, iterate through the people array and exit the loop after you console.log “Devon”
for (let i = 0; i < people.length; i++) {
  console.log(people[i]);
  if (people[i] === "Devon") {
    break;
  }
}

// ===== Exercise 2
// Favorite colors
const colors = ["blue", "red", "green", "black", "purple"];
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`);
}

//  Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
const suffixes = ["st", "nd", "rd", "th"];
for (let i = 0; i < colors.length; i++) {
  const suffix = suffixes[i] || "th";
  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}

// ===== Exercise 3
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let userNumber;
do {
  userNumber = parseInt(prompt("Please enter a number greater than 10:"));
} while (isNaN(userNumber) || userNumber <= 10);
// ===== Exercise 4

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building.numberOfFloors);
// Console.log how many apartments are on the floors 1 and 3.
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);

// Second tenant name + number of rooms
const secondTenant = building.nameOfTenants[1];
const rooms = building.numberOfRoomsAndRent.dan[0];
console.log(secondTenant, rooms);


// Rent comparison and update
const sarahRent = building.numberOfRoomsAndRent.sarah[1];
const davidRent = building.numberOfRoomsAndRent.david[1];
const danRent = building.numberOfRoomsAndRent.dan[1];

if (sarahRent + davidRent > danRent) {
  building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building.numberOfRoomsAndRent.dan[1]);


// ===== Exercise 5
let family = {
    father: "John",
    mother: "Jane"};
// Using a for in loop, console.log the keys of the object.
for (let key in family) {
  console.log(key);
}
// Using a for in loop, console.log the values of the object.     
for (let key in family) {
  console.log(family[key]);
}

// ===== Exercise 6   
const details = {
  my: "name",
  is: "Rudolf",
  the: "reindeer",
};

let sentence = "";

for (const key in details) {
  sentence += `${key} ${details[key]} `;
}

console.log(sentence.trim());

// ===== Exercise 7   
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretSociety = names
  .map(name => name[0])
  .sort()
  .join("");

console.log(secretSociety);
// ===== Exercise 8