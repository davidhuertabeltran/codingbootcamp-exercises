//1. Math functions

//square number
// function square(number) {
//     return number ** 2;
// }

//hypotenuse

// function hypotenuse(a, b) {
//     return ((a ** 2) + (b ** 2))
// }

//abs

// function abs(number) {
//     return Math.abs(number);
// }


//2. Generating emails


// function emailFromLogin(user) {
//     return user + "@gmail.com";
// }


// function loginFromName(first, last) {
//     return (last.slice(0, 4)) + (first.slice(0, 3));
// }

// function emailFromName(first, last) {
//     let login = loginFromName (first, last);
//     return emailFromLogin(login);
// }

// console.log(emailFromName("patricia", "huerta"));

//3. Salary Function

// const salary = (pay, hours, days) => {
//     return (pay * hours) * days;
// }

// console.log(salary(10, 8, 10));

// const taxed_salary = (salary, tax) => {
//     return (salary - (salary * (tax / 100)));
// }

// console.log(taxed_salary(100, 20));


//4. Maximum 3 values

// const max3 = (a, b, c) => {
//     if(a > b && a > c) {
//         return a;
//     }   else if (b > a && b > c) {
//             return b;
//         }   else {
//             return c;
//         }
// }

//5. Spread of 3 values

// const spread3 = (a, b, c) => {
//     if(a > b) {
//         if (b > c) {
//             return a - c;
//         }   else if (b < c) {
//                 return a - b;
//             }
//     }

//     if(b > a) {
//         if(a > c) {
//             return b - c;
//         }   else if (a < c) {
//                 return b - a;
//         }
//     }

//     if(c > a) {
//         if(a > b) {
//             return c - b;
//         }   else if (a < b) {
//                 return c - a;
//         }
//     }
// }