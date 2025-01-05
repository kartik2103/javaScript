//singlton

//objects literals 

const mySym = Symbol("key1")

const JsUser = {
    name : "Kartik",
    age: 18,
    [mySym]: "mykey1", //Accessing Symbol
    location: "jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastloginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"]) //right way to access the keys
console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze = (JsUser)
JsUser.email = "hitesh@microsoft.com"

JsUser.greeting = function(){
    console.log("Hello js user");
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());










