// Arrays
let fruits = ["apple", "banana", "orange"];
console.log(fruits); // Print the entire array
console.log(fruits[0]); // Print the first element
console.log(fruits.length); // Print the number of elements

fruits.push("grape"); // Add an element to the end
console.log(fruits);

fruits.pop(); // Remove the last element
console.log(fruits);

fruits.unshift("kiwi"); // Add an element to the beginning
console.log(fruits);

fruits.shift(); // Remove the first element
console.log(fruits);

let citrus = fruits.slice(1, 3); // Get a sub-array
console.log(citrus);

fruits.splice(1, 1, "mango", "pineapple"); // Replace elements
console.log(fruits);

fruits.sort(); // Sort the array
console.log(fruits);

fruits.reverse(); // Reverse the array
console.log(fruits);

let joinedFruits = fruits.join(", "); // Join elements into a string
console.log(joinedFruits); // Print the joined string

let index = fruits.indexOf("banana"); // Find the index of an element
console.log(index); // Print the index of "banana"

let includesBanana = fruits.includes("banana"); // Check if an element exists
console.log(includesBanana); // Print true or false

let filteredFruits = fruits.filter(fruit => fruit.startsWith("a")); // Filter elements
console.log(filteredFruits); // Print fruits that start with "a"

let mappedFruits = fruits.map(fruit => fruit.toUpperCase()); // Map elements to a new array
console.log(mappedFruits); // Print fruits in uppercase

let reducedFruits = fruits.reduce((acc, fruit) => acc + fruit.length, 0); // Reduce to a single value
console.log(reducedFruits); // Print the total length of all fruit names

let foundFruit = fruits.find(fruit => fruit.startsWith("m")); // Find an element
console.log(foundFruit); // Print the first fruit that starts with "m"

let everyFruitStartsWithA = fruits.every(fruit => fruit.startsWith("a")); // Check if all elements meet a condition
console.log(everyFruitStartsWithA); // Print true or false

let someFruitsStartWithA = fruits.some(fruit => fruit.startsWith("a")); // Check if some elements meet a condition
console.log(someFruitsStartWithA); // Print true or false


