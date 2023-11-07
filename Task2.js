//TASK 1-----------------------
for (let index = 1; index <= 100; index++) {
  // console.log("TASK 1: -- FOR " + index);
}

let num1 = 0;
while (num1 < 100) {
  num1++;
  console.log("TASK 1: -- WHILE " + num1);
}

//TASK 2---------------------------------
const arr1 = [2, 4, 6, 8, 10];

for (let index = 0; index < arr1.length; index++) {
  let sum = arr1[index] * 3;
  console.log("TASK 2: " + sum);
}
console.log("------------------------------");

//TASK 3----------------------------------
const arr2 = [1, 2, 3, 4, 7, 11, 20, 2, 50, 12];

let a = arr2[0];
for (let index = 0; index < arr2.length; index++) {
  if (arr2[index] > a) {
    a = arr2[index];
  }
}
console.log("TASK 3: " + a);
console.log("------------------------------");

//TASK 4----------------------------
const numbers = [1, 2, 3, 4, 5, 6];

let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  sum += numbers[index];
}
console.log("TASK 4: " + sum);

console.log("-------------------------------------------");

//TASK 5---------------------------------
const meyveler = ["apple", "banana", "cherry", "date", "Azerbaijan"];
let fruitSum = 0;
let indexx = 0;
function meyve() {
  for (let i = 0; i < meyveler.length; i++) {
    if (meyveler[i].length > fruitSum) {
      fruitSum = meyveler[i].length;
      indexx = i;
    }
  }

  console.log("TASK 5: " + meyveler[indexx]);
}
meyve(meyveler);
console.log("---------------------");

//TASK 6-----------------------------
const students = [
  { name: "Alice", grade: 90 },
  { name: "Bob", grade: 85 },
  { name: "Charlie", grade: 92 },
];
function calculateAverageGrade(students) {
  let totalGrade = 0;
  for (let i = 0; i < students.length; i++) {
    totalGrade += students[i].grade;
  }
  let averageGrade = totalGrade / students.length;
  return averageGrade;
}

let averageGrade = calculateAverageGrade(students);
console.log("TASK 6: " + averageGrade);
