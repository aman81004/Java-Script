// for of loops 
const array = [ 1 , 2 , 3 , 4 , 5 ] ;
for (const num of array) {
    //console.log(num);
}


const greeting = "Hello World" ;
for (const char of greeting) {
    //console.log(char);
}

// Maps
const map = new Map() ;
map.set('IN',"India") ;
map.set('US',"United States") ;
map.set('UK',"United Kingdom") ;

//console.log(map) ;

for (const [key , value] of map) {
    //console.log(`${key} : ${value}`);
}

const myObject = {
    'game1' : 'NFS',
    'game2' : 'FIFA',
    'game3' : 'GTA'
}

for ( const [key , value] of Object.entries(myObject)) {
    console.log(`${key} : ${value}`);
}