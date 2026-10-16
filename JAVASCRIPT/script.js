console.log("Hello, JavaScript!");

//console.log(25);

//Hello World
/*
This comment can continue
 across multiple lines

*/

const userName = "Veljko";
let score = 10;
let isStudent = true;
let city;
const selectedCourse = null;
score = 20;

console.log(userName);
console.log(score);

console.log(typeof userName);
console.log(typeof score);
console.log(typeof isStudent);
console.log(typeof city);
console.log(typeof selectedCourse);

console.log(score + 5);
console.log(score - 5);
console.log(score * 2);
console.log(score / 2);

console.log(score > 10);
console.log(score < 10);
console.log(score >= 20);
console.log(score <= 20);

console.log(score === 20);
console.log(score === "20");

console.log(score >= 18 && isStudent);
console.log(score >= 18 || isStudent);
console.log(!isStudent);

let age = 18;

if (age >= 18) {
  console.log("You are an adualt");
} else if (age < 18) {
  console.log("You are a teenager");
} else {
  console.log("You are a child");
}

function greet(name) {
  return "Hello, ${name}";
}
const mess = greet("John");
console.log(mess);

function add(numberOne, numberTwo) {
  return numberOne + numberTwo;
}

const add2 = (numberOne, numberTwo) => {
  return numberOne + numberTwo;
};

const lang = ["HTML", "CSS", "JS"];

console.log(lang[0]);
console.log(lang.length);
lang.push("React");

const removedLang = lang.pop();

for (let i = 0; i < 5; i++) {}
for (let i = 0; i < lang.length; i++) {}
lang.forEach(function (lang) {
  console.log(lang);
});

const user = {
  name: "John",
  age: 25,
  greet() {
    console.log(`Hello, my name ois ${this.name}.`);
  },
};

console.log(user.name);
console.log(user["age"]);

user.greet();

const heading = document.querySelector("h1");
const message = document.getElementById("message");

heading.textContent = "JavaScript is working!";
message.textContent = "The DOM has been updated.";

heading.style.color = "royalblue";
message.style.backgroundColor = "#f0f0f0";

const button = document.getElementById("action-button");

button.addEventListener("click", function () {
  console.log("The button has been clicked.");
  message.textContent = "The button was clicked.";
});

let count = 0;

const countDisplay = document.getElementById("count");

const increaseButton = document.getElementById("increase");
increaseButton.addEventListener("click", increaseCount);

const decreaseButton = document.getElementById("decrease");
decreaseButton.addEventListener("click", decreaseCount);

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetCount);

function updateDisplay() {
  countDisplay.textContent = count;
}

function increaseCount() {
  ++count;
  updateDisplay();
}

function decreaseCount() {
  if (count > 0) {
    count--;
  }
  updateDisplay();
}

function resetCount() {
  count = 0;
  updateDisplay();
}
