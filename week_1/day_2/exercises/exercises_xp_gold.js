// ===== Exercise 1

function isBlank(str) {
  return str.length === 0;
}

console.log(isBlank(''));    // true
console.log(isBlank('abc')); // false
// ===== Exercise 2
function abbrevName(name) {
  const parts = name.split(" ");
  return `${parts[0]} ${parts[1][0]}.`;
}

console.log(abbrevName("Robin Singh")); // "Robin S."
// ===== Exercise 3
function swapCase(str) {
  let result = "";

  for (let char of str) {
    result += char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  }

  return result;
}

console.log(swapCase("The Quick Brown Fox"));
// "tHE qUICK bROWN fOX"

// ===== Exercise 4
function isOmnipresent(arr, value) {
  return arr.every(subArray => subArray.includes(value));
}

console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false
console.log(`The rental car cost: $${car}`);


// ===== Exercise 5
let table = document.body.firstElementChild;

for (let i = 0; i < table.rows.length; i++) {
  table.rows[i].cells[i].style.backgroundColor = "red";
}