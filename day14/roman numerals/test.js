const convertNumber = (number) => {

    let thousands = Math.floor(number / 1000);
    console.log(thousands);

    let thousandsRest = Math.floor(number % 1000);
    console.log(thousandsRest);

    let hundreds = Math.floor(thousandsRest / 100);
    console.log(hundreds);

    let hundredsRest = Math.floor(thousandsRest % 100);
    console.log(hundredsRest);

    let tens = Math.floor(hundredsRest / 10);
    console.log(tens);
    
    let romanThousand = thousands * 1000;
    console.log(romanThousand);
  
    let romanHundred = hundreds * 100;
    console.log(romanHundred);
    
    let romanTens = tens * 10;
    console.log(romanTens);
    
    let tensRest = Math.floor(hundredsRest % 10);
    console.log(tensRest);

}

convertNumber(2758);


