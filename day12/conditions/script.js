//Triangle

// let angle1 = Number(prompt('Provide the first angle'));
// let angle2 = Number(prompt('provide the second angle'));
// let angle3 = Number(prompt('Provide the third angle'));

// let total = angle1 + angle2 + angle3;

// if(total === 180) {
//     console.log("We have a triangle");
// }   else {
//         let rest = 180 - total;
//         console.log("Sorry we can't build a triangle, it's missing " + rest);
//     }

//Days in a month

// let month = Number(prompt("Provide a month number (from 1 to 12)"));

// if(month > 12) {
//     alert("please provide a valid month number")
// }   else if(month === 2) {
//         console.log("28");
//     }   else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
//             console.log("31");
//         }   else {
//                 console.log("30");
//             }

//Login

// let pwd = prompt("Type password");

// if(pwd === "sore-thumb-218") {
//     console.log("access granted");
// }   else {
//         console.log("nice try");
//     }

//Login 2

// let pwd1 = prompt("Create password");

// if(pwd1.length < 8) {
//     console.log("your password is not secure");
// }   else if (pwd1.length >= 8) {
//         let pwd2 = prompt("Repeat password");
//         if(pwd1 !== pwd2) {
//             console.log("your password does not match");
//         }   else {
//                     console.log("your password has been created");
//                 }
//     }


//Bus tickets

// let price = 12;

// let age = Number(prompt("How old are you?"));

// if (age <= 6) {
//     console.log("0");
// }   else if (age <= 15) {
//     console.log(price - (price * 0.35));
//     }   else if (age <= 26) {
//         console.log(price - (price * 0.65));
//         }   else if (age > 65) {
//             console.log (price - (price *0.5));
//             }   else {
//                 console.log(price);
//                 }


//Temperatures

// let temperature1 = Number(prompt("8am: Enter temperature"));
// let temperature2 = Number(prompt("4pm: Enter temperature"));
// let temperature3 = Number(prompt("12am: Enter temperature"));

// console.log(Math.max(temperature1, temperature2, temperature3));

//Swimming

// let name1 = prompt("Write name of first swimmer");
// let name2 = prompt("Write name of second swimmer");
// let name3 = prompt("Write name of third swimmer");

// let min = 45;
// let max = 60;

// let random1 = Math.floor(Math.random() * (max - min + 1 )) + min;
// let random2 = Math.floor(Math.random() * (max - min + 1 )) + min;
// let random3 = Math.floor(Math.random() * (max - min + 1 )) + min;

// let times = [random1, random2, random3];

// console.log(times);

// function getTime() {
//     if (random1 === Math.max(...times)) {
//         console.log(name1 + " Congrats you won gold medal");
//     }   else if (random1 === Math.min(...times)) {
//         console.log(name1 + " You won bronze medal");
//         }   else {
//             console.log(name1 + " You won silver medal");
//             }
//     if (random2 === Math.max(...times)) {
//         console.log(name2 + " Congrats you won gold medal");
//     }   else if (random2 === Math.min(...times)) {
//         console.log(name2 + " You won bronze medal");
//         }   else {
//             console.log(name2 + " You won silver medal");
//             }
//     if (random3 === Math.max(...times)) {
//         console.log(name3 + " Congrats you won gold medal");
//     }   else if (random3 === Math.min(...times)) {
//         console.log(name3 + " You won bronze medal");
//         }   else {
//             console.log(name3 + " You won silver medal");
//             }         
// }

// console.log(getTime());

//A leap year


// let year = Number(prompt("Write a year"));

// if(year % 4 === 0) {
//     console.log(year + " is a leap year");
// }   else if (year % 100 === 0 && year % 400 === 0) {
//     console.log(year + " is a leap year");
// }   else {
//     console.log(year + " is not a leap year");
// }

//A leap year 2 and 3

// let year = Number(prompt("Write a year"));

// if(year % 4 === 0 || year % 100 === 0 && year % 400) {
//     document.write(year + " is a leap year");
// }   else {
//     document.write(year + " is not a leap year");
// }
