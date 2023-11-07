"use strict";

//TASK 1-----------------------------------
const myObject1 = {
  name1: "JS",
  name2: "JS2",
};

const checkKey = () => {
  if (myObject1.name1 == "JS") {
    console.log("TASK 1: " + myObject1.name1);
  }

  switch (myObject1.name1) {
    case "JS":
      console.log("TASK 1: SWitch - " + myObject1.name1);
      break;

    default:
      console.log(false);
      break;
  }
};

checkKey();
console.log("-------------------------------------------");

//TASK 2---------------------------------------
const arr1 = [1, 2, 3, 4, 5, 6];
const num = 2;
let isFalseOrTrue = false;
function arrReturn(arr) {
  let arrIndex = 0;
  for (let index = 0; index < arr.length; index++) {
    if (num == arr[index]) {
      isFalseOrTrue = true;
      arrIndex = index;
    }
  }

  if (isFalseOrTrue == true) {
    console.log("TASK 2: INDEX - " + arrIndex);
  } else {
    console.log("TASK 2: " + "FALSE");
  }
}
arrReturn(arr1);
console.log("-------------------------------------------");

//TASK 3---------------------------------------
const arr3 = [1, 2, 3, 4, 5, 6];
const num3 = 7;
let tryFalse = false;
const addArrayItem = (arr, num) => {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == num) {
      tryFalse = true;
    }
  }
  if (tryFalse == false) {
    arr3.push(num);
  }
  console.log("TASK 3: " + arr3);
};
addArrayItem(arr3, num3);
console.log("------------------------------------------");

//TASK 4-------------------------------------------------
const usersObjc = { ad: "", soyad: "", yas: 0, email: "" };
const addInfo = (name, surname, age, email) => {
  usersObjc.ad = name;
  usersObjc.soyad = surname;
  usersObjc.yas = age;
  usersObjc.email = email;

  console.log("TASK 4:");
  console.log(usersObjc);
};

addInfo("Hamid", "Manafov", 29, "test@gamail.com");
console.log("------------------------------------------");

//TASK 5 ----------------------------------------
const myObject5 = {};

const addKeyInObject = (obj, newKey, newValue) => {
  obj[newKey] = newValue;
  console.log("TASK 5: ");
  console.log(myObject5);
};

addKeyInObject(myObject5, "name5", "JS");
