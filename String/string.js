const name = "Aman";
const repoCount = 10;

console.log(name + repoCount + " repositories"); // Aman10 repositories

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template literals

const gameName = "Call of Duty";
// String methods and properties
const gameNameLength = gameName.length; // Length of the string
console.log(gameNameLength); // 12
console.log(gameName.toUpperCase()); // Convert to uppercase
console.log(gameName.toLowerCase()); // Convert to lowercase
console.log(gameName.charAt(0)); // First character of the string
console.log(gameName.indexOf("o")); // Index of first occurrence of 'o'
console.log(gameName.lastIndexOf("o")); // Index of last occurrence of 'o'
console.log(gameName.slice(0, 4)); // Slice the string from index 0 to 4
console.log(gameName.slice(4)); // Slice the string from index 4 to the end
console.log(gameName.replace("Call", "Battle")); // Replace 'Call' with 'Battle'
console.log(gameName.includes("Duty")); // Check if 'Duty' is in the string
console.log(gameName.split(" ")); // Split the string into an array by space
console.log(gameName.split("o")); // Split the string into an array by 'o'
console.log(gameName.startsWith("Call")); // Check if the string starts with 'Call'
console.log(gameName.endsWith("Duty")); // Check if the string ends with 'Duty'
console.log(gameName.trim()); // Trim whitespace from both ends of the string
console.log(gameName.trimStart()); // Trim whitespace from the start of the string
console.log(gameName.trimEnd()); // Trim whitespace from the end of the string
console.log(gameName.padStart(20, "*")); // Pad the start of the string with '*'
console.log(gameName.padEnd(20, "*")); // Pad the end of the string with '*'
console.log(gameName.repeat(2)); // Repeat the string twice
console.log(gameName.concat(" is a great game!")); // Concatenate another string
console.log(gameName.match(/o/g)); // Find all occurrences of 'o' in the string
console.log(gameName.search("Duty")); // Search for 'Duty' and return its index
console.log(gameName.localeCompare("Call of Duty")); // Compare two strings
console.log(gameName.localeCompare("Battle of Duty")); // Compare with a different string