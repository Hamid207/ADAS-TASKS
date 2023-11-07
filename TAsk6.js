const nameDom = document.querySelector(".name > input");
const nameP = document.querySelector(".name > p");
const nameButton = document.querySelector(".nameButton");

const surnameDom = document.querySelector(".surname > input");
const surNameButton = document.querySelector(".surNameButton");
const surNameP = document.querySelector(".surname > p");

const plusDom = document.querySelector(".numberPlus > p");
const plusBtn = document.querySelector(".plusBtn");
const minusBtn = document.querySelector(".minusBtn");

const startBtn = document.querySelector(".startBtn");
const text = document.querySelector(".text");

nameButton.addEventListener("click", function () {
  nameP.textContent = "Name: " + nameDom.value;
  nameDom.value = "";
});

surNameButton.addEventListener("click", function () {
  surNameP.textContent = "Surname: " + surnameDom.value;
  surnameDom.value = "";
});

let numm = 0;
plusBtn.addEventListener("click", () => {
  numm++;
  plusDom.textContent = numm;
});

minusBtn.addEventListener("click", () => {
  if (numm != 0) {
    numm--;
    plusDom.textContent = numm;
  }
});

let isBool = false;
startBtn.addEventListener("click", () => {
  let timer = setInterval(() => {
    if (isBool == true) {
      isBool = false;
      text.textContent = "Hello World!";
    } else {
      isBool = true;
      text.textContent = "How are you?";
    }
  }, 1000);

  setTimeout(() => {
    clearInterval(timer);
  }, 10000);
});

const timeP = document.querySelector(".time");
setInterval(() => {
  const time = new Date();
  let h = time.getHours();
  let m = String(time.getMinutes());
  let s = String(time.getSeconds());
  if (s.length == 1) {
    s = "0" + s;
  }

  if (m.length == 1) {
    m = "0" + m;
  }

  timeP.textContent = `${h} : ${m} : ${s}`;
}, 1000);

const firstNum = document.querySelector(".first");
const secondNum = document.querySelector(".second");

const selectt = document.querySelector(".select");

const btn1 = document.querySelector(".calBtn1");

const returnSum = document.querySelector(".return");

let calNum = 0;
btn1.addEventListener("click", () => {
  if (selectt.value == "+") {
    returnSum.textContent = +firstNum.value + Number(secondNum.value);
  } else if (selectt.value == "-") {
    returnSum.textContent = Number(firstNum.value) - Number(secondNum.value);
  } else if (selectt.value == "*") {
    returnSum.textContent = Number(firstNum.value) * Number(secondNum.value);
  } else if (selectt.value == "/") {
    returnSum.textContent = Number(firstNum.value) / Number(secondNum.value);
  }
});
