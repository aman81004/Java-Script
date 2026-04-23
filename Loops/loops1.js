const myObject = {
    js : 'JavaScript' ,
    cpp : 'C++' ,
    rb : 'Ruby' ,
    swift : 'Swift' 
}

for (const key in myObject) {
    //console.log(`${key} : ${myObject[key]}`);
}

const programingLanguages = [ 'JavaScript' , 'C++' , 'Ruby' , 'Swift' ] ;
for (const index in programingLanguages) {
    console.log(`${index} : ${programingLanguages[index]}`);
}