// Stack memory use in Primitive Data Types
// Heap memory use in Non-Primitive Data Types

let myName = "Aman"

let anotherName = myName
// myName is stored in stack memory
// anotherName is a copy of myName, also stored in stack memory
// If we change anotherName, it does not affect myName

anotherName = "Skywalker"
// Now anotherName is a new string, "Skywalker", stored in stack memory
// myName remains unchanged, still "Aman"

console.log(myName); // Aman
console.log(anotherName); // Skywalker

let user = {
    name: "Aman",
    age: 25
}
// user is stored in heap memory
// user is a reference to the object in heap memory
let anotherUser = user
// anotherUser is a reference to the same object in heap memory

anotherUser.name = "Skywalker"
// Changing anotherUser affects user because they reference the same object

console.log(user.name); // Skywalker
console.log(anotherUser.name); // Skywalker
// If we assign anotherUser to a new object, it will not affect user


// In stack we get a copy of the value for primitive data types
// In heap we get a reference to the object for non-primitive data types
