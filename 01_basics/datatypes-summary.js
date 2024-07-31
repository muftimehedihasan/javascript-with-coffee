//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.4

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456789341246845

// Reference (Non primitive)

// Array, objects, Functions

const heros = ["Superman", "Spidermen", "ddh"];
let myObj = {
    name: "Mehedi",
    age: 29,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);



//++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

// Stack (Primitive)

let myYoutubename = "MuftiMehediHasan";

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

// Heap (Non-Primitive)

let userOne = {
    email: "user@goole.com",
    upi: "user@ybl",
}

let userTwo = userOne

userTwo.email = "mehedi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

