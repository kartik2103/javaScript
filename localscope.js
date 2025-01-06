// function one(){
//     const username = "hitesh"
//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     two()
// }
// one()

// if(true){
//     const username = "hitesh"
//     if(username==="hitesh"){
//         const website = "youtube"
//         console.log(username + website);
//     }
// }

// function addone(num){
//     return num +1
// }
// addone(5)

// const addTwo = function(num){
//     return num +2 
// }
// addTwo(5)

//Only Declarations Are Hoisted: The declaration of variables or functions is hoisted,
//  but their initialization (if any) stays in place.
console.log(a); // Output: undefined
var a = 5;
console.log(a); // Output: 5

var a;          // Declaration is hoisted
console.log(a); // Undefined
a = 5;          // Initialization happens here
console.log(a); // 5
