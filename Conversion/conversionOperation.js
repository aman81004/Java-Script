let score = "33";

console.log(typeof score);       
console.log(typeof (score));     

let valueInNumber = Number(score); 
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" is a string, but after conversion, it becomes a number
// "33abc" will return NaN (Not a Number) because it cannot be converted to a number
// true => 1 , false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn); 

// 1 is true, 0 is false
// "" is false
// "Aman" is true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// "33" is a string now
// "33abc" will return "33abc" as a string
// "33abc" is a string, not a number, so it remains unchanged
// true => "true", false => "false"