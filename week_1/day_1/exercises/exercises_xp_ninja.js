// ===== Exercise 1

/**
 * Creates a person object with BMI calculation capability
 */
function createPerson(fullName, mass, height) {
  return {
    fullName,
    mass,
    height,
    calcBMI() {
      return this.mass / (this.height ** 2);
    }
  };
}

/**
 * Compares BMI of two people and returns the one with the higher BMI
 */
function compareBMI(person1, person2) {
  const bmi1 = person1.calcBMI();
  const bmi2 = person2.calcBMI();

  return bmi1 > bmi2 ? person1.fullName : person2.fullName;
}

/* ---- Usage ---- */

const personA = createPerson("John Doe", 85, 1.8);
const personB = createPerson("Jane Smith", 70, 1.65);

const highestBMIName = compareBMI(personA, personB);
console.log(`${highestBMIName} has the highest BMI`);

// ===== Exercise 2


// Créer une fonction findAvg(gradesList)
function findAvg(gradesList) {
    let sum = 0;

    for (let grade of gradesList) {
        sum += grade;
    }

    return sum / gradesList.length;
}
// Calculer et afficher la moyenne
function findAvg(gradesList) {
    let sum = 0;

    for (let grade of gradesList) {
        sum += grade;
    }

    const avg = sum / gradesList.length;
    console.log("Average:", avg);

    return avg;
}
// Si la moyenne est en dessous de 65 → FAIL
// Si la moyenne est au dessus de 65 → PASS

  if (average > 65) {
    console.log("You passed");
  } else {
    console.log("You failed and must repeat the course");
  }

  // Example usage
findAvg([70, 80, 60, 90]);
findAvg([50, 55, 60]);
// ===== Exercise 2

// ===== Exercise 3

// ===== Exercise 4

// ===== Exercise ...