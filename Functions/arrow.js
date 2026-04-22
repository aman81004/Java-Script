const user = {
    username: "Aman",
    price : 999 ,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to our site!`);
    }

}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

// function chai(){
//     console.log(this);
// }

// chai();

const chai = () =>{
    let username = "Aman"
    console.log(this);
}

//chai();


// Arrow functions

// const addTwo = ( num1, num2 ) => {
//     return num1 + num2
// }

const addTwo = ( num1, num2 ) =>  (num1 + num2)

console.log(addTwo(5, 10))