let a = 300
const b = 20
var c = 30
//global and local scope  
console.log(a)
console.log(b)
console.log(c)

if (true) {
    let a = 10
    const b = 20
    console.log("INNER:", a);
}

for(let i=0; i<array.length; i++){
    const element = array[i];
}

// console.log(c)