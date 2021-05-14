//This will be main array

const numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17]

//Basic array manipulations

// console.log(numbers.length);

// console.log(numbers[13]);

// console.log(numbers[9]);

// //Basic looping

// //1. Output every number in the array to the console.

// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }

// //2. Output the square of every number to the console.

// for(let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i] * numbers[i]);
// }

//3. Output only negative numbers from the array.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < 0) {
//     console.log(numbers[i]);
//   }
// }

//4. Output an absolute value of every number in the array.

// for(let i = 0; i < numbers.length; i++) {
//   console.log(Math.abs(numbers[i]));
// }

//5. Using a loop find the index of the number -10 in the array.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] === -10) {
//     console.log(numbers.indexOf(numbers[i]));
//   }
// }

//6. Output only even numbers from the array.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] % 2 !== 0) {
//     console.log(numbers[i]);
//   }
// }

//7. For every number in the array output the difference between that number and number 5.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 0) {
//     console.log(numbers[i] - 5);
//   } else {
//     console.log(5 - numbers[i]);
//   }
// }

//8. For every number x in the array output the squared difference of x and number 5.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 0) {
//     console.log((numbers[i] - 5) * (numbers[i] - 5));
//   } else {
//     console.log((5 - numbers[i]) * (5 - numbers[i]));
//   }
// }

//9. Count how many negative numbers are there in the array.
// let negativeTotal = 0;
// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] < 0) {
//     negativeTotal = negativeTotal + 1;
//   }
// }
// console.log(negativeTotal);

//10. Compute the sum of all the numbers in the array. Answer: 70
// let total = 0;
// for(let i = 0; i < numbers.length; i++) {
//   total = total + numbers[i];
// }

// console.log(total);

//11. Compute the average of the numbers in the array. Answer: 3.68421...

// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// console.log(sum);

// let count = 0;
// for(let i = 0; i < numbers.length; i++) {
//     count = count + 1;
// }

// console.log(count);

// let average = sum / count;

// console.log(average);

//12. Compute the sum of all the positive numbers in the array.

// let positiveSum = 0;

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > 0){
//     positiveSum = positiveSum + numbers[i];
//   }
// }

// console.log(positiveSum);

//Intermediate array manipulations

//1. Output all the numbers which are greater than their predecessor in the array.

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] > numbers[i - 1]) {
//     console.log(numbers[i]);
// }
// }

// //2. Output all the peaks in the array. A peak is a number whose predecessor and successor are both smaller than the number itself.

// for(let i = 0; i < numbers.length; i++) {
//   if((numbers[i] > numbers[i - 1]) && (numbers[i] > numbers [1 + 1])) {
//     console.log(numbers[i]);
//   }
// }

//3. First, compute the average number in the array and save the result in a variable. Then compute the sum of squared differences from the average. Answer: 6188.1052...

// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }


// let average = sum / numbers.length;
// console.log(average);

// let squareDif = 0;
// for(let i = 0; i < numbers.length; i++) {
//   squareDif = squareDif + ((average - numbers[i]) ** 2);
// }

// console.log(squareDif);

//4. Compute the variance of the array. Variance is the average of squared differences from the average. Answer: 325.6897...

// let sum = 0;
// for(let i = 0; i < numbers.length; i++) {
//   sum = sum + numbers[i];
// }
// let average = sum / numbers.length;

// let squareDif = 0;
// for(let i = 0; i < numbers.length; i++) {
//   squareDif = squareDif + ((average - numbers[i]) ** 2);
// }

// let variance = squareDif / numbers.length;

// console.log(variance);

//5. Find the biggest element in the array

//   console.log(Math.max(...numbers));

//6. Find the biggest element which is less than 16.

// let newArray = [];

// for(let i = 0; i < numbers.length; i++) {
//   if(numbers[i] <= 16) {
    
//     newArray.push(numbers[i]);

//   }
// }

// console.log(newArray);
// console.log(Math.max(...newArray));

//7. From the original array create a new array with a reversed order of the elements.
  
// let newArray = [];

// for(let i = 0; i < numbers.length; i++) {
//   newArray.unshift(numbers[i]);
// }

// console.log(newArray);

// Advanced array manipulations

