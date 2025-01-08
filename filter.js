// //array.filter(callback);
// const numbers = [1,2,4,5,6,7];
// const evenNumbers = numbers.filter((num)=>num % 2 == 0);
// console.log(evenNumbers);

// //array.map 
// const numbers = [1, 2, 3, 4, 5];
// // हर element को double करें
// const doubledNumbers = numbers.map((num) => num * 2);
// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// array.reduce(callback, initialValue);
// const numbers = [1,2,3,4,5];
// const sum = numbers.reduce((acc,num)=> acc + num, 0);
// console.log(sum);

// const myNumer=[1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers
//                 .map((num)=> num * 10)
//                 .map((num)=> num +1)
//                 .filter((num)=> num>=40)
// console.log(newNums);

const myNums = [1,2,3,4,5]
const myTotal = myNums.reduce(function(acc,currval){
    console.log('acc: ${acc} and currval: ${currval}`);
    return acc + currval
}, 0)
console.log(myTotal);