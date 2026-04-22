const marvel_heros = ["thor" , "ironman","spiderman"];
const dc_heros = ["superman", "batman", "flash"];

marvel_heros.push(dc_heros); // Add dc_heros to the end of marvel_heros
console.log(marvel_heros); // Print the updated marvel_heros array

const allHeros = marvel_heros.concat(dc_heros); // Concatenate dc_heros to marvel_heros
console.log(allHeros); // Print the concatenated array

const heros = [...marvel_heros, ...dc_heros]; // Spread operator to combine arrays
console.log(heros); // Print the combined array using spread operator

const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]; // Nested array
const flatArray = anotherArray.flat(2); // Flatten the array to a depth of
console.log(flatArray); // Print the flattened array

const arrayWithHoles = [1, 2, , 4]; // Array with a hole
console.log(arrayWithHoles); // Print the array with a hole

