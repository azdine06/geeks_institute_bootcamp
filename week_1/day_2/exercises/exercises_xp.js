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




// ===== Exercise 5

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Users</title>
</head>
<body>

  <div id="container">Users:</div>

  <ul class="list">
    <li>John</li>
    <li>Pete</li>
  </ul>

  <ul class="list">
    <li>David</li>
    <li>Sarah</li>
    <li>Dan</li>
  </ul>

  <script src="script.js"></script>
</body>
</html>


{/* // 1. Récupérer le div et l'afficher dans la console */}
const container = document.getElementById("container");
console.log(container);

{/* // 2. Changer "Pete" en "Richard" */}
const allLi = document.querySelectorAll("li");
allLi[1].textContent = "Richard";

{/* // 3. Supprimer le deuxième <li> du deuxième <ul> */}
const allUl = document.querySelectorAll("ul");
allUl[1].removeChild(allUl[1].children[1]);

// 4. Changer le nom du premier <li> de chaque <ul> par ton nom
const myName = "Azdine";
allUl.forEach(ul => {
  ul.children[0].textContent = myName;
});

{/* // 5. Ajouter la classe "student_list" aux deux <ul> */}
allUl.forEach(ul => {
  ul.classList.add("student_list");
});

{/* // 6. Ajouter les classes "university" et "attendance" au premier <ul> */}
allUl[0].classList.add("university", "attendance");

{/* // 7. Style du div */}
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";

{/* // 8. Ne pas afficher le <li> contenant "Dan" */}
const liDan = Array.from(document.querySelectorAll("li"))
  .find(li => li.textContent === "Dan");

if (liDan) {
  liDan.style.display = "none";
}

{/* // 9. Ajouter une bordure au <li> contenant "Richard" */}
const liRichard = Array.from(document.querySelectorAll("li"))
  .find(li => li.textContent === "Richard");

if (liRichard) {
  liRichard.style.border = "2px solid black";
}

{/* // 10. Changer la taille de police du body */}
document.body.style.fontSize = "18px";

{/* // BONUS */}
if (container.style.backgroundColor === "lightblue") {
  const users = Array.from(document.querySelectorAll("li"))
    .map(li => li.textContent)
    .join(" and ");
  
  alert(`Hello ${users}`);
}

// ===== Exercise 6
<div id="navBar">
  <ul>
    <li><a href="#">Profile</a></li>
    <li><a href="#">Home</a></li>
    <li><a href="#">My Friends</a></li>
    <li><a href="#">Messenger</a></li>
    <li><a href="#">My Pics</a></li>
  </ul>
</div>

<script src="script.js"></script>

{/* // 1-Changer l’id du <div> avec setAttribute */}
const navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

{/* Ajouter un nouveau <li> avec le texte Logout */}
const ul = navDiv.querySelector("ul");

{/* // créer <li> */}
const newLi = document.createElement("li");

{/* // créer le texte */}
const text = document.createTextNode("Logout");

{/* // ajouter le texte au <li> */}
newLi.appendChild(text);

{/* // ajouter le <li> au <ul> */}
ul.appendChild(newLi);

{/* //Récupérer le premier et le dernier <li> et afficher leur texte */}
const firstLi = ul.firstElementChild;
const lastLi = ul.lastElementChild;

console.log("Premier lien :", firstLi.textContent);
console.log("Dernier lien :", lastLi.textContent);
 {/* ===== Exercise 7 */}


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Book List</title>
</head>
<body>

  <section class="listBooks"></section>

  <script src="script.js"></script>
</body>
</html>
 
 // script.js

const allBooks = [
  {
    title: "Harry Potter",
    author: "J.K. Rowling",
    image: "https://covers.openlibrary.org/b/id/7984916-L.jpg",
    alreadyRead: true,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    image: "https://covers.openlibrary.org/b/id/6979861-L.jpg",
    alreadyRead: false,
  },
];

const section = document.querySelector(".listBooks");

allBooks.forEach((book) => {
  const bookDiv = document.createElement("div");

  const details = document.createElement("p");
  details.textContent = `${book.title} written by ${book.author}`;

  if (book.alreadyRead) {
    details.style.color = "red";
  }

  const img = document.createElement("img");
  img.src = book.image;
  img.style.width = "100px";

  bookDiv.appendChild(details);
  bookDiv.appendChild(img);

  section.appendChild(bookDiv);
});
