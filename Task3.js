//TASK2--------------------------------
const ar1 = [1, 2, 3, 4, 5];
const ar2 = [6, 7, 8, 9, 10];
const newArr = [];

for (let index = 0; index < ar1.length + ar2.length; index++) {
  if (index < ar1.length) {
    newArr.push(ar1[index]);
  }
  if (index < ar2.length) {
    newArr.push(ar2[index]);
  }
}

console.log("TASK 2  " + newArr);
console.log("----------------------------");
//--------------------------------

//TASK3---------------------------
const myObj = {
  name: "JS",
  name2: "JS2",
  name3: "JS3",
};
for (let key in myObj) {
  console.log("TASK 3  " + "Key:" + key + " VALUE:" + myObj[String(key)]);
}
console.log("----------------------------");

//TASK4---------------------------
const myArr = [1, 2, 3, 4, 5, 6, "salam", "salam", 6, 7, 7];
const arrEmpty = [];
const arrTwins = [];

for (let i = 0; i < myArr.length; i++) {
  let item = myArr[i];
  let isTwins = false;

  if (arrEmpty.length == 0) {
    arrEmpty.push(item);
  }

  if (arrEmpty.length !== 0) {
    for (let j = 0; j < arrEmpty.length; j++) {
      if (arrEmpty[j] == item) {
        isTwins = true;
      }
    }

    if (isTwins == false) {
      arrEmpty.push(item);
    }
  }
}
console.log("TASK 4:    " + arrEmpty);
console.log("----------------------------");

//TASK5--------------------------------
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum5 = 0;
for (let i in arr5) {
  if (i % 2 == 0) {
    sum5 += arr5[i];
  }
}

console.log("TASK 5:  " + sum5);
console.log("----------------------------");

//TASK6----------------------------------
console.log("TASK 6:");

const name6 = "Salam";
for (let index = 0; index < name6.length; index++) {
  console.log(name6[index]);
}
console.log("----------------------------");

//TASK7-------------------------------
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrTek = [];
const arrCut = [];

for (let index = 0; index < arr7.length; index++) {
  if (index % 2 == 0) {
    arrCut.push(arr7[index]);
  } else {
    arrTek.push(arr7[index]);
  }
}

console.log("TASK 7 TEK INDEX: " + arrTek);
console.log("TASK 7 CUT INDEX: " + arrCut);
console.log("----------------------------");

//TASK8----------------------------
const arr8First = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
const arr8Second = [2, 3, 6, 7, 8, 9, 11, 10];
const arr8IsEmpty = [];

for (let i = 0; i < arr8First.length; i++) {
  let num = arr8First[i];
  for (let index = 0; index < arr8Second.length; index++) {
    if (num == arr8Second[index]) {
      arr8IsEmpty.push(arr8Second[index]);
    }
  }
}
console.log("TASK 8:  " + arr8IsEmpty);
console.log("----------------------------");

//TASK 9----------------------------
const arr9 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr9Empty = [];
for (let index = 0; index < arr9.length; index++) {
  arr9Empty.unshift(arr9[index]);
}
console.log(arr9Empty);
console.log("----------------------------");

//TASK 10-----------------------------------
const arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let arr10Sum = 0;
let arr10Lenght = 0;
for (let i = 0; i < arr10.length; i++) {
  arr10Lenght += 1;
  arr10Sum += arr10[i];
}
console.log("TASK 10: SUM = " + arr10Sum);
console.log("TASK 10: ARRAY LENGHT = " + arr10Lenght);
console.log("----------------------------");

//TASK 11----------------------------------
const arr11 = [1, 2, 3, 4];
function arr11Func(arr) {
  [a, b, c, d] = arr;
  return console.log("TASK 11: " + a, b, c, d);
}
arr11Func(arr11);
console.log("----------------------------");

//TASK12--------------------------------
const obj12 = {
  objNest: {
    myName: "Hamid",
    mySurname: "Manafov",
  },
};
const objKeyChange = (obj) => {
  const { myName: first, mySurname: second } = obj.objNest;
  console.log("TASK 12: " + first + "  " + second);
};

objKeyChange(obj12);
console.log("----------------------------");

//TASK 13--------------------------------
const myObjc13 = {
  name11: "JS",
  name22: "JS22",
};

const objCopyFunc = (obj) => {
  const myObjCopy = { ...myObjc13 };
  console.log("TASK 13----");
  console.log(myObjCopy);

  obj.name11 = "JS111111";
  obj.name22 = "JS222222";
  console.log(myObjc13);
};

objCopyFunc(myObjc13);
console.log("----------------------------");

//TASK 14-----------------------------------
const myObjc14 = {
  name111: "JS",
  name222: "JS22",
  name333: "JS333",
};

const removeObkectKeys = (obj) => {
  const { name111, name222, ...restOfUser } = obj;
  console.log(restOfUser);
};
removeObkectKeys(myObjc14);
