// const myArry2 = new Array(1,2,3,4)
// console.log(myArry2);

// let  cars = ["tesla", "bmw", "toyta"];
// console.log(cars[0]);

//Change an element by assigning a new value to a specific index.
// let cities = ["london", "Paris", "Rome"]
// cities[1] = "berlin";
// console.log(cities)

//Add elements in the end
let animals = ["dog", "cat"];
// animals.push("rabbit");
// console.log(animals); // Output: ["dog", "cat", "rabbit"]

//Add at the beginning
// animals.unshift("lion");
// console.log(animals);

// Remove the last element.
// animals.pop();
// console.log(animals);

//Remove the first elements
// animals.shift();
// console.log(animals); // Output: ["dog", "cat"]

//splice(start: number, deleteCount: number, ...items: string[])
//splice() - Add or remove elements.

// let fruits = ["apple", "banana", "cherry"];
// fruits.splice(1,1,"orange");
// console.log(fruits);

//slice() - Copy part of an array.
// let slicedFruits = fruits.slice(0, 2);
// console.log(slicedFruits); // Output: ["apple", "orange"]

//map()- Transform each elements
// let numbers = [1,2,3];
// let doubled = numbers.map(num=>num*2)
// console.log(doubled)

// myArr = [4,3,2,1]
// const newArr = myArr.join();
// //Array bind and convert it into strings
// console.log(myArr);
// console.log(newArr);

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]
// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

//using Sepread operator
// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

//flatting arrays
// const another_array = [1,2,3, [4,5,6], 7, [6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

//Yeh check karta hai ki given value ek array hai ya nahi.
// Array.isArray(value)
console.log(Array.isArray([1, 2, 3])); // true (kyunki yeh array hai)
console.log(Array.isArray("Hitesh")); // false (kyunki yeh string hai)
console.log(Array.isArray({ name: "Hitesh" })); // false (kyunki yeh object hai)

// ['H', 'i', 't', 'e', 's', 'h']
//String "Hitesh" ko ek array mein convert karega, jisme har character ek element banega.
// const result = Array.from("Kartik");
// console.log(result)

//Yeh array-like ya iterable objects (jaise string, NodeList, Set) ko ek array mein convert karta hai.
const obj = {name:'Hitesh', age:25 };
const keys = Array.from(Object.keys(obj));
const values = Array.from(Object.values(obj));

console.log(keys);
console.log(values);










