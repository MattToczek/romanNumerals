let roman = {
    C: 100,
    IC: 99, 
    L: 50,
    IL: 49,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
}

const romanValues = Object.values(roman);
const romanKeys = Object.keys(roman)

// console.log(romanValues);
let numerals = '';



let romanify = (num) => {
    
for (let i = 0; i < romanValues.length; i++) {
    while(num >= romanValues[i]){                     //Nested if statemens replaced by while loop
        num -= romanValues[i];
        numerals+= romanKeys[i];       
    }
}
    console.log(numerals);
    
}

romanify(235)