// 변수
// const let 차이: const는 불변 let은 추후에 업데이트 가능
// then what is default? const 기본형, 필요할 때 let
// in the past, var was used. there is no rule

let a = 5;  
let b = 2;
let myName = "dongjun";

console.log(a + b);
console.log(a * 2);
console.log(a / 2);
console.log("hello " + myName);

myName = "dkangd2";

console.log("your new name is " + myName);


//boolean
const amIFat = true;    //not using with ""
console.log(amIFat);

//When we gonna use true&false? ex)When users logged in.
//null은 의도적으로 아무런 값이 없다는 것을 나타내기 위해서 씀
// null vs false: null means there is nothing but false has a value.
//undefined
let something;//variable exists but undefined
console.log(something);

//How to organize data

//if there is no array.
const mon ="mon";
const tue ="tue";
const wed ="wed";
const thu ="thu";
const fri ="fri";
const sat ="sat";
const sun ="sun";

const daysOfWeek = mon + tue + wed + thu + sat +sun;
console.log(daysOfWeek);

// using array
const daysOfWeekArr = [mon, tue, wed, thu, fri, sat];
console.log(daysOfWeekArr);

const nonsense = [1, 2, "hello", false, null, true, undefined, "dongjun"];
console.log(nonsense);


//Get Item from Array
console.log(daysOfWeekArr[5]);
console.log(daysOfWeekArr);
//Add one more day to the array
daysOfWeekArr.push("sun");
console.log(daysOfWeekArr);

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");

const playerName ="nico";
const playerPoints = 1234;
const plyaerHandsome = false;
const playerFat = "litte bit";

//object array는 하나의 주제에 대한 list 이지만 object 한 개체의 다양한 특성을 나타낼 때 사용
const player = {
  name: "nico",
  points: 1234,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player["name"]);

console.log(player.fat);
player.fat =false;
console.log(player.fat);  //object에 있는 값을 바꾼거임. 에러는 constant전체를 하나의 값으로서 업데이트 하려고 할때 발생
//player = false; <--이 경우에는 에러가 발생  player라는 object가 constant이기 때문
console.log(player);
player.lastName = "potato";
player.points = player.points + 10;
console.log(player.points);

//function is peace of codes we could execute repeatly


function sayHello(nameOfPerson, age){
  console.log("hello my name is " + nameOfPerson + "and my age is " + age);
}
sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 35);

function plus (firstNumber, secondNumber){
  console.log(firstNumber + secondNumber);
}
plus(1331, 1324);

function divide (a, b){
  console.log(a / b);
}
divide(8, 2);

const user = {
  name: "bobo",
  sayHello: function(otherPersonsName){     //object안에서 function 폼과 밖에서의 차이 보기
    console.log("hello, " + otherPersonsName + " nice to meet you");
  },
};

console.log(user.name);
user.sayHello("lynn");
user.sayHello("nico");

//return
const calculator = {
  plus: function(a, b) {
    return a + b;
  },
  times: function(a, b) {
    return a * b;
  },
  minus: function(a, b) {
    return a - b;
  },
  divide: function(a, b) {
    return a / b;
  },
  power: function(a, b) {
    return a ** b;
  },
}

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult );

console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(divideResult);
console.log(powerResult);

// const age = 96;
// function calculateKRAge(ageOfForeigner){
//   return ageOfForeigner + 2;  
// }

// const krAge = calculateKRAge(age);
// console.log(krAge);

const age = parseInt(prompt("How old are you?")); //prompt 잘 안씀 옛날 방식. 꾸밀 수 없고 팝업창으로 나타남

if(isNaN(age) || age < 0) {
  console.log(prompt("Please write a real positive number"));
} 
else if(age < 18) {
  console.log("You are too young.");
}
else if(age >= 18 && age <= 50) {
  console.log("You can drink");
}
else if(age > 50 && age <= 80) {
  console.log("You should exercise");
}
else if(age === 100) {
  console.log("wow, you are wise");
}
else if(age > 80) {
  console.log("You can do whatever you want.");
} 