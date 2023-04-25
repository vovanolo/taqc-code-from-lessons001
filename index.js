// console.log("hello world!")
// let message = "hello world!";
// console.log(message);

// const user = {
//     firstName: 'John',
//     surname: 'Johnathan',
//     marriegeStatus: true,
//     age: 20
// }

// console.log(user);

// let value = 28;

// console.log(typeof value);

// let number = 2000;

// alert("hello world!");

// let age = prompt("What is your age?");

// console.log(age);

// let isOk = confirm("Are you ok?");

// console.log(isOk);

// let name = "Volodymyr";

// console.log("My name is " + name);

// let name = prompt("What is your name?");

// alert("Nice to meet you " + name);

// task1

// ...

// task2 

// console.log(2 ** 3);

// console.log(Math.pow(2,


// console.log(10 + "5"); // "105"

// 0 - false 1 - true
// "" - false "sfsaf" - true

// const students = [1,2,"Olesii",4,null,undefined];
// students.push("something");
// students.pop();
// // students = 10;


// console.log(students);

// let age = prompt("how old are you?");

// if (age > 18 && age < 35){
//     console.log("Ohh nice you are as the major people");
// }else if (age > 35 && age < 60){
//     console.log("ohh a lucky age");
// } else {
//     console.log("ohh you are too young");
// }

// switch(true){
//     case (age > 18 && age < 35):
//         console.log("Ohh nice you are as the major people");
//         break;
//     case (age > 35 && age < 60):
//         console.log("ohh a lucky age");
//         break;
//     default:
//         console.log("ohh you are too young");
// }


// for(let i = 0; i <= 20; i+=2){
//     console.log(i);
// }

// let students = ["Oleksii", "Ruslan", "Volodymyr"];

// console.log(students[0]);
// console.log(students[1]);
// console.log(students[2]);

// for(let i = 0; i < students.length; i++){
//     console.log(students[i]);
// }
// for(let value of students){
//     // console.log(value);
//     if(value === "Ruslan"){
//         console.log("i found the ruslan name here");
//         break;
//     }
// }

// for(let i in students){
//     console.log(students[i]);
// }


// let numbers = [1,2,3,4,5,6,7,8,9];

// for(let i = 0; i< numbers.length; i++){
//     // console.log(numbers[i]);
//     // if(numbers[i] === 5){
//     //     break;
//     // }
//     if(numbers[i] === 5){
//         continue;
//     }
//     console.log(numbers[i]);

// }

// function message(){
//     console.log("this is a message");
// }

// message();

// function somefunction(){
//     console.log(arguments);
// }

// // somefunction(1,2,3,4,5,6,7,8);
// hello();

// sayHello();


// function hello(){
//     console.log("hello");
// }

// let sayHello = function(){
//     console.log("sayhello");
// }

// console.log();

// printMe();

// class AgeError{
//     constructor(message){
//         this.name = "AgeError";
//         this.message = message;
//     }
// }


// function checkAge(){
//     try{
//         let age = Number(prompt("Please enter your age"));
//         if(age < 0){
//             throw new AgeError("Wrong age value here of " + age)
//         }else{
//             console.log("Nice age " + age);
//         }
//     }catch(exception){
//        console.log(exception.name);
//         console.log(exception.message);
//     }
// }

// checkAge();

// forEach map reduce filter find 

// let numbers = [1,2,3,4,5,6,7,8];

// numbers.forEach(function(value, index, array){
//     console.log(value);
// })


// let user = {
//     name: 'user',
//     age: 38,
//     surname: "useruser",
//     showFullName(){
//         console.log(this.name + this.surname);
//     }
// }

// user.showFullName();

// let title = document.querySelector('.title');

// title.style.color = "green";

// console.log(title.tagName);

// document.querySelector(".boxinside").innerHTML = `<p class="someclas" id="someid">some text</p>`;

// console.log(title.innerHTML);

// let innerbox = document.querySelector('.innerbox');

// let number = 2000;

// // console.log(innerbox.innerHTML);
// innerbox.innerHTML = `<h1>I hust changed it</h1>
//     <p>I changed too</p>
//     <p>I changed too ${number}</p>
// `;
// innerText textContent innetHtml
// const mentor = { 
//     course: "JS fundamental", 
//     duration: 3,
//     direction: "web-development" 
// };

// console.log(Object.keys(mentor));
// console.log(Object.values(mentor));
// console.log(Object.entries(mentor));

// function dynamicSallarySotring (...workers) {
//     let sallaryAndNameArray = [];
//     for (i=0; i<workers.length; i++) {
//         sallaryAndNameArray.push({name: workers[i].fullName, sallary:workers[i].showSallaryWithExperience()});
//     };
//     let sortedSallaryAndNameArray =  sallaryAndNameArray.sort(function(a,b){return a.showSallaryWithExperience()-b.sallary});
//     return sortedSallaryAndNameArray;
// };
// console.log(dynamicSallarySotring(worker1,worker2,worker3));

// console.log(window);

// const wind = window.open("https://www.google.com", "", "height=250, width=250, top=250, left=250");
// console.log(location.origin);

// function message(message){
//     console.log(message);
// }

// let btn = document.querySelector(".btn");
// btn.onclick = function(){
//     console.log("second");
// };

// let btn = document.querySelector(".btn");
// // btn.addEventListener("click", function(){
// //     console.log("event click 1 done by event listener")
// // });
// // let title = document.querySelector(".title");
// const inp = document.querySelector(".inp");

// btn.addEventListener("click", function(event){
//     // console.log("event click 2 done by event listener")
//     // console.log(event.target);
//     // event.target.style.color = "green";
//     // title.style.color = "red";
//     console.log("Entered name is " + inp.value);
// })

// setTimeout(function(){
//     console.log("i was outputted after 3 seconds");
// }, 3000);

//  let newTab = window.open("", "w3schools", "width=100,height=100");

// //  newTab.addEventListener('load', function() {
//     setTimeout(function() {
//         newTab.resizeTo(500,500);
//     }, 2000);

//     setTimeout(function() {
//         newTab.moveBy(200,200);
//     }, 4000);

//     setTimeout(function() {
//         newTab.close();
//     }, 6000);
// // });
// window.addEventListener("resize", function(){
//     console.log(window.innerWidth, window.innerHeight);
// })

// const hello = function(){
//     console.log("hello");
// }

// hello();

// const hello = () =>{
//     console.log("hello");
// }

// const sum = function(a, b){
//     return a + b;
// }

// const sum = (a,b) => {
//     if(a > 0 && b > 0){
//         return  a + b;
//     }
// };

// sum(3,5);

// setTimeout(() => {console.log("hello");},3000)

// const arr = [1,2,4,5];

// const newArray = [...arr];

// const somfunc = (a, ...rest) => {
//     console.log(rest);
// }

// somfunc(1,2,3,4,5,6,7,8,9);

// const students = ["Alex", "John", "Peter"];

// const [firstStudent, ...restOfTheStudents] = students;

// console.log(firstStudent);
// console.log(restOfTheStudents);

// students[0]

// const user = {
//     name: "John",
//     age: 26,
//     surname: "Johnson",
// }


// function somefunction({name}){
//     console.log(name);
// }
// somefunction(user);

// const numbers = [1,2,3,4,5,6,7,1,3,4,5,3,3,4,4,6]

// const mySet = new Set(numbers);


// console.log(mySet);

// const myMap = new Map([
//     ["name", "John"],
//     ["surname", "Johnson"],
// ]);

// console.log(myMap);

// let user = {
//     name: "John",
//     age: 22,
//     surname: "Johnson",
//     name: "Peter"
// }

// console.log(user);

// let username = user.name;
// let {name} = user;


// console.log(name


// console.log("hello1");
// console.log("hello2");

// function anotherFunction() {}


// function somefunctio(){
//     anotherFunction();
// }

// setTimeout(function(){
//     console.log("hello from timeout first");
// })

// console.log("hello first");




// setTimeout(function(){
//     console.log("hello from timeout second");
// })


// console.log("hello second");


// function generalFunction(a,b){
//     // return a+b;
//     if(a < 0 || b < 0 ){
//         return "Error"
//     }else{
//         return a+b;
//     }
// }

// function generalFunctionAsync(a,b){
//     return new Promise((resolve, reject) => {
//         // resolve(a+b);
//         if(a < 0 || b < 0 ){
//             reject("Error");
//         }else{
//             resolve(a+b);
//         }
//     })
// }

// async function somefunction(){
//     const number = await generalFunctionAsync(20,10).then(result => result);

//     if(number > 21){
//         console.log(number);
//     }
// }

// somefunction();

// async function somefunctionTwo(){
//      const finishResult =  await somefunction();
// }

// const finishResult = await somefunction(); 

// console.log(finishResult);

// generalFunction(4,6);

// let finishResult = generalFunctionAsync(20,20).then(function(result){
//     return result + 100;
// }).then(function(result){
//     console.log(result);
// })

// generalFunctionAsync(-10,10)
//                     .then(result => console.log(result))
//                     .catch(error => console.log(error));


// forEach map reduce filter find 

// let users = ["Alex", "John", "Helen", "Peter"];

// users.map((user, index, array) => {
//     console.log(user);
//     console.log(index);
//     console.log(array);
// });

// const newUsers = users.map(element =>{
//         return element + "h";
// });

// console.log(newUsers);

// let number = [1,2,3,4,5,6,7,8,9,10,11,12];

// let result = 1;
// for(let i = 0; i < number.length; i++){
//     result *= number[i];
// }
// console.log(result);

// let result = number.reduce((multiplication, element) => {
//     return multiplication *= element;
// },1)
// console.log(result);

// let newUsers = [];

// for(let i = 0; i < users.length; i++){
//     newUsers.push(users[i] + "h");
// }




// for(let i = 0; i < users.length; i++){
//     console.log(users[i]);
//     console.log(i);
//     console.log(users);
// }

// console.log("hello folks");

// const http = require('http');

// http.createServer((request, response) => {
//     response.writeHead(200,{"Content-Type": "text/html"});

//     response.write("<h1>Hello from the server</h1>");

//     response.end();
// }).listen(8000);

// console.log("the server is listenin in localhost:8000");

// const {multiplication} = require("./multiplication.js");


// console.log(multiplication(1,2,3,4,5));


// filter

// const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];

// const newNumbers = numbers.filter((element) => element === 5);
// const foundElement = numbers.find((element) => element === 5);


// console.log(foundElement);

// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response) => response.json())
// .then((response) => console.log(response[2].name));

// async function getUsers(){
//     const response  = await fetch("book.json");
//     const data = await response.json();
//     console.log(data);
// }

// getUsers();


// const users = [
//     {
//         name: "John",
//         age:21
//     },
//     {
//         name: "Peter",
//         age: 23
//     },
//     {
//         name: "Jack",
//         age: 333
//     },
//     {
//         name: "Ivan",
//         age: 43
//     }
// ];

// const foundUser = users.find((element) => element.name === "Peter");

// console.log(foundUser);

// const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

//     function showNumbers() {
//       let promise = Promise.resolve();
//       for (let i = 0; i <= 10; i++) {
//         time = Math.floor(Math.random() * 3000)
//         promise = promise.then(() => delay(i, time))
//           .then(result => console.log(result));
//       }
//     }
    
//     showNumbers();


// let string = "some string";

// for(let element of string){
//     console.log(element);
// }   

// let string = "sfsafasfsafsaf 222.333 fdgdgfg";

// let regExp = /\d{3}\.\d{3}/;


// console.log(string.match(regExp));

// const upperCase = (str) => {
//     const check = /^[A-Z]/.test(str) ? `String's starts with uppercase character` : `String's not starts with uppercase character`;
//     console.log(check);
//   };
  
//   upperCase('regexp');
//   upperCase('RegExp');