/*Primitive Data Types in JavaScript
1. String
2. Number
3. Boolean
4. Null
5. Undefined
6. Symbol
7. BigInt
*/

const score=100

const scoreValue=100.5

const isPassed=true // Boolean

const outsideTemp=null

let userEmail; // undefined

const id = Symbol('124')
const anotherId = Symbol('124') // different symbol

const bigIntValue = 123456789012345678901234567890n // BigInt



// Non-Primitive Data Types in JavaScript or Reference Data Types
// 1. Object
// 2. Array
// 3. Function
// 4. Date
// 5. Regular Expression
// 6. Error
// 7. Map
// 8. Set
// 9. WeakMap
// 10. WeakSet

const hero = ["Superman", "Batman", "Spiderman"] // Array of objects

const myFunction= function() {
    console.log("Hello, World!");
}
console.log(typeof myFunction); // Function is a type of object
