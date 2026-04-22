let a = 10
const b = 20
var c = 30

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const username = "Aman"

    function two(){
        const website = "example.com"
        console.log(username)
    }
    //console.log(website)
    two()
}
one()
// ++++++++ interesting +++++++

console.log(addone(5))
function addone(num){
    return num + 1
}


const addTwo = function(num){
    return num + 2
}
addTwo(5)