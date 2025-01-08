// const person = { name: 'Alice', age: 25, city: "New York"};
// for(let key in person){
//     console.log(`{$key}: ${person[key]}`);
// }

// const person = {name: "Alice", age:25, city:"New York"};
// Object.keys(person).forEach(key=>{
//     console.log(`{key}:${person[key]}`);
// });

const person = {name:"Alice", age: 25, city: "New York"};
Object.entries(person).forEach(([key,value])=>{
    console.log(`${key}, ${value}`);
});

