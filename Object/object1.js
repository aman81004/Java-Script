// singleton object

// object literal

const mySym = Symbol("key1")


const JsUser = {
  name: "Aman",
  "full name" : "Aman aman",
  age : 20,
  location: "India",
  email : "aman@gmail.com",
  isLoggedIn : false,
  lastLogin : ["Monday","Saturday"],
  [mySym] : "mykey1value"
}

// Print the entire object
console.log(JsUser) // Print the entire object
console.log(JsUser.name) // Print the name property
console.log(JsUser.email)
console.log(JsUser["email"]) // Square bracket notation to access property
console.log(JsUser["full name"]) // Accessing property with space using square brackets

console.log(JsUser[mySym]) // Accessing property with symbol key


// Updating properties
JsUser.age = 21 // Update age property
JsUser["location"] = "USA" // Update location property using square brackets 

console.log(JsUser) // Print the updated object


// Adding function as a property (method)
JsUser.greetUser = function() {
  console.log("Hello " + this.name + "! Welcome back.") // Using 'this' to refer to the object
}

JsUser.greetUser() // Call the method to greet the user