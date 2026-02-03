// ====== Daily Challenge 1
// 1 Array of planets with their colors and moons
const planets = [
  { name: "Mercury", color: "#a9a9a9", moons: 0 },
  { name: "Venus", color: "#eccc68", moons: 0 },
  { name: "Earth", color: "#2ed573", moons: 1 },
  { name: "Mars", color: "#ff6b6b", moons: 2 },
  { name: "Jupiter", color: "#feca57", moons: 79 },
  { name: "Saturn", color: "#ffdd59", moons: 82 },
  { name: "Uranus", color: "#48dbfb", moons: 27 },
  { name: "Neptune", color: "#1e90ff", moons: 14 }
];

// 2 Select the section
const section = document.querySelector(".listPlanets");

// 3 Create planets
planets.forEach(planet => {
  const planetDiv = document.createElement("div");
  planetDiv.classList.add("planet");
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // 4 Create moons (BONUS)
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement("div");
    moon.classList.add("moon");

    // Random position around the planet
    moon.style.top = Math.random() * 80 + "px";
    moon.style.left = Math.random() * 80 + "px";

    planetDiv.appendChild(moon);
  }

  // 5 Append planet to section
  section.appendChild(planetDiv);
});

// ====== Daily Challenge 2 Daily => Challenge : Words in the stars

// 1. Demander les mots à l'utilisateur
const input = prompt("Enter several words separated by commas:");

// 2. Transformer l'entrée en tableau + supprimer les espaces
const words = input.split(",").map(word => word.trim());



// 3. Trouver la longueur du mot le plus long
let maxLength = 0;
for (let word of words) {
  if (word.length > maxLength) {
    maxLength = word.length;
  }
}

// 4. Créer la ligne d'étoiles
const border = "*".repeat(maxLength + 4);

// 5. Afficher le cadre
console.log(border);

for (let word of words) {
  const spaces = " ".repeat(maxLength - word.length);
  console.log(`* ${word}${spaces} *`);
}

console.log(border);

