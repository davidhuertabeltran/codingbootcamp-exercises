const nidIsValid = (nid) => {
    let nidNumber = parseInt(nid, 10);

    if( Number.isNaN(nidNumber) ) {
        return false;
    }   else {
            if (nidNumber % 11 === 0) {
                let month = parseInt(nid.substring(2,4));
                if ( 
                    (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) 
                    || 
                    (month === 51 || month === 53 || month === 55 || month === 57 || month === 58 || month === 60 || month === 62)  
                    ) {
                    let day = parseInt(nid.substring(4,6));
                    if ( day >= 1 && day <= 31) {
                        return true;
                    }
                }
                if (month === 2 || month === 52) {
                    let day = parseInt(nid.substring(4,6));
                    if ( day >= 1 && day <= 28) {
                        return true;
                    }
                    if ( day >= 1 && day <= 29) {
                        return true;
                    }
                }

                if ( (month === 4 || month === 6 || month === 9 || month === 11) || (month === 54 || month === 56 || month === 59 || month === 61)  ) {
                    let day = parseInt(nid.substring(4,6));
                    if ( day >= 1 && day <= 30) {
                        return true;
                    }
                }
            }
        }
    return false;
}

//Correct structure of NID is YYMMDDXXXX

console.log(nidIsValid("7502142461")); // Male February 28 days

console.log(nidIsValid("7504422453")); // Male with 42 days

console.log(nidIsValid("7512142462")); // Male

console.log(nidIsValid("7561142468")); // Female

console.log(nidIsValid("756df4246x")); // Just random text

console.log(nidIsValid("Hello123")); // Just random text

console.log(nidIsValid("7502292446")); //Male February with 29 days

console.log(nidIsValid("7552292446")); //Wrong Female February with 29 days

console.log(nidIsValid("7252292443")); //Female February with 29 days