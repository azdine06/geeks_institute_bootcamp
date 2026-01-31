// ===== Exercise 1
// Créer une fonction displayNumbersDivisible() sans paramètre.

function displayNumbersDivisible() {
}

// Dans la fonction, parcourir les nombres de 0 à 500.

function displayNumbersDivisible() {
  for (let i = 0; i <= 500; i++) {
    // traitement ici
  }
}
// Afficher tous les nombres divisibles par 23.

function displayNumbersDivisible() {
  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
    }
  }
}
// afficher la somme de tous les nombres divisibles par 23.

function displayNumbersDivisible() {
  let sum = 0;

  for (let i = 0; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i);
      sum += i;
    }
  }

  console.log("Sum :", sum);
}
// ===== Exercise 2
const stock = {
  banana: 6,
  apple: 0,
  pear: 12,
  orange: 32,
  blueberry: 1
};

const prices = {
  banana: 4,
  apple: 2,
  pear: 1,
  orange: 1.5,
  blueberry: 10
};
// Créer le tableau shoppingList
const shoppingList = ["banana", "orange", "apple"];
// Créer la fonction myBill()
function myBill() {
  let total = 0;

  for (let item of shoppingList) {
    if (item in stock && stock[item] > 0) {
      total += prices[item];
    }
  }

  return total;
}
// ===== Exercise 3
function changeEnough(itemPrice, amountOfChange) {


// Calculer si on peut payer l’article
  const values = [0.25, 0.10, 0.05, 0.01];
  let total = 0;

  for (let i = 0; i < amountOfChange.length; i++) {
    total += amountOfChange[i] * values[i];
  }

  return total >= itemPrice;
}

// Ordre des pièces (imposé)
// quarters, dimes, nickels, pennies
const values = [0.25, 0.10, 0.05, 0.01]

changeEnough(14.11, [2, 100, 0, 0]); // false
changeEnough(0.75, [0, 0, 20, 5]);   // true

// ===== Exercise 4
 

// 1 Hotel cost
function hotelCost() {
  let nights;

  do {
    nights = prompt("How many nights would you like to stay at the hotel?");
  } while (nights === null || nights === "" || isNaN(nights));

  return Number(nights) * 140;
}

// 2 Plane ride cost
function planeRideCost() {
  let destination;

  do {
    destination = prompt("What is your destination?");
  } while (destination === null || destination.trim() === "");

  destination = destination.toLowerCase();

  if (destination === "london") {
    return 183;
  } else if (destination === "paris") {
    return 220;
  } else {
    return 300;
  }
}

// 3 Rental car cost
function rentalCarCost() {
  let days;
  do{
    days = prompt ("How many days would you like to rent the car?");
  } while (days === null || days === "" || isNaN(days));

let cost = Number(days) * 40;
if (days > 10) {
  cost *= 0.95; // 5% discount
}
return cost;

  }
 
// 4 Total vacation cost
function totalVacationCost() {
  const hotel = hotelCost();
  const plane = planeRideCost();
  const car = rentalCarCost();

  console.log(`The hotel cost: $${hotel}`);
  console.log(`The plane tickets cost: $${plane}`);
  console.log(`The car rental cost: $${car}`);
  console.log(`Total vacation cost: $${hotel + plane + car}`);
}

// 5 Call the function
totalVacationCost();




// ===== Exercise ...