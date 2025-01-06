// function addTwoNumbers(number1, number2){
//     console.log(number1, number2);
// }
// const result = addTwoNumbers(3,5)
// console.log("result:", result);

// function addTwoNumbers(number1, number2){
//     let result = number1 + number2
//     return result
// }
// const result = addTwoNumbers(3,4)
// console.log("Result", result);

// function loginUserMessage(username = "Kartik"){
//     if(!username){
//         console.log("Please enter a username");
//         return
//     }
//     return `${username} just logged in`
//     }
// console.log(loginUserMessage())


//rest paramerter used in adding objects to shopping cart
// function calculateCartPrice(...num1){
//     return num1
// }
//  //yaha p kitni bhi values pass kar do
// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}
function handleObjects(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}
// handleObjects(user)

//we can directly pass the json values

// handleObjects({
//     username: "sam",
//     price: 399
// })

const myNewArray  = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue);