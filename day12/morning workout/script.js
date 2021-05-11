//Transform the seat name

function getSeat(number) {
    let row = Math.floor(number / 10);
    let rowLetter = String.fromCharCode(65 + row);
    let column = number % 10;
    return rowLetter + column;
}
  
console.log(getSeat(25));