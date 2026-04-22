const tinderUser = new Object()

tinderUser.name = "John Doe"
tinderUser.age = 25
tinderUser.isActive = true
tinderUser.lastLogin = ["Monday", "Wednesday", "Friday"]

// console.log(tinderUser) // Print the entire object

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstName : "John",
            lastName : "Doe"
        }
    }
}

// console.log(regularUser.fullname.userFullname.firstName) // Print the entire object

const obj1 = {
    1 :"x",
    2 :"y"
}

const obj2 = {
    3 :"a",
    4 :"b"
}

const obj3 = {
    5 :"i",
    6 :"j"
}

const obj4 = {...obj1, ...obj2, ...obj3} // Merging obj1, obj2, and obj3 into a new object
// console.log(obj4) // Print the merged object



const course = {
    courseName : "JavaScript",
    price : 999,
    courseInstructor : "Aman"
}

const {courseName : name , price, courseInstructor} = course // Destructuring the course object
// console.log(name) // Print the course name


// {
//     name: "JavaScript",
//     price: 999,
//     courseInstructor: "Aman"
// }