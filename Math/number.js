const score = 400
console.log(score); // Primitive number

const balance = new Number(100)
console.log(balance); // Number object

console.log(balance.toString()); // Convert Number object to string
console.log(balance.toFixed(1)); // Format number to 1 decimal place

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)); // Format number to 3 significant digits

const num1 = 1000000
console.log(num1.toLocaleString('en-IN')); // Format number with locale-specific separators

