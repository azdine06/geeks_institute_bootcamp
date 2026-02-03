// ===== Exercise 1
const randomNumber = Math.floor(Math.random() * 100) + 1;

for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// ===== Exercise 2
function capitalize(str) {
  let evenCaps = "";
  let oddCaps = "";

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evenCaps += str[i].toUpperCase();
      oddCaps += str[i];
    } else {
      evenCaps += str[i];
      oddCaps += str[i].toUpperCase();
    }
  }

  return [evenCaps, oddCaps];
}

console.log(capitalize("abcdef"));
// ["AbCdEf", "aBcDeF"]

// ===== Exercise 3
function isPalindrome(str) {
  // Convert to lowercase to make it case-insensitive
  const cleaned = str.toLowerCase();

  // Reverse the string
  const reversed = cleaned.split('').reverse().join('');

  // Compare original and reversed
  return cleaned === reversed;
}

// Examples
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("Bob"));   // true
console.log(isPalindrome("hello")); // false

// ===== Exercise 4
function biggestNumberInArray(arrayNumber) {
  let max = 0;

  for (let i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === "number" && arrayNumber[i] > max) {
      max = arrayNumber[i];
    }
  }

  return max;
}

// Tests
console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99])); // 100
console.log(biggestNumberInArray(['a', 3, 4, 2]));           // 4
console.log(biggestNumberInArray([]));                       // 0

// ===== Exercise 5
function uniqueElements(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }

  return result;
}

// Test
console.log(uniqueElements([1, 2, 3, 3, 3, 3, 4, 5])); // [1,2,3,4,5]





// ===== Exercise 6
function createCalendar(year, month) {
  // month: 1–12 → JS Date uses 0–11
  month = month - 1;

  const table = document.createElement("table");

  // ----- Create header (MO → SU) -----
  const days = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
  const headerRow = document.createElement("tr");

  days.forEach(day => {
    const th = document.createElement("th");
    th.textContent = day;
    headerRow.appendChild(th);
  });

  table.appendChild(headerRow);

  // ----- Get first day of month -----
  const firstDay = new Date(year, month, 1);
  let startDay = firstDay.getDay(); // 0=Sun, 1=Mon...
  startDay = (startDay === 0) ? 6 : startDay - 1; // make Monday = 0

  // ----- Get last day of month -----
  const lastDate = new Date(year, month + 1, 0).getDate();

  let row = document.createElement("tr");

  // Empty cells before first day
  for (let i = 0; i < startDay; i++) {
    row.appendChild(document.createElement("td"));
  }

  // ----- Fill days -----
  for (let day = 1; day <= lastDate; day++) {
    const td = document.createElement("td");
    td.textContent = day;
    row.appendChild(td);

    if ((startDay + day) % 7 === 0) {
      table.appendChild(row);
      row = document.createElement("tr");
    }
  }

  // Append last row if not empty
  if (row.children.length > 0) {
    table.appendChild(row);
  }

  // Add table to page
  document.body.appendChild(table);
}
