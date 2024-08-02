// function

function greet(){
    console.log("Hello world")
}
greet()

// Function Expression
const greetEx = function(){
    console.log("Hello world from express")
}
greetEx()

// Function কন্সট্রাক্টর ব্যবহার করে
const greetConst = new Function("console.log('Hello, World! from Const');");
const greetConst2 = new Function("console.log('Hello, World! from Const2');");
greetConst()
greetConst2()


function addTwoNum (num1, num2){
    console.log(num1 + num2 )
}
addTwoNum(4, 8)


function loginUserMessage(username) {
    if(!username){
        console.log("Please enter a userame")
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())


function calculatecartPrice(...num1) {
    return num1
}
// console.log(calculatecartPrice(300, 340, 55))


const user = {
   username: "mehedi",
   price: "3000",
}

function handleObject(onetherObj){
   console.log(`username is ${onetherObj.username} and price is ${onetherObj.price}`)
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 399
})

const myNewArray =  [122, 15, 16, 67];
function getArr(arr) {
    console.log(`arr is ${arr.myNewArray}`)
}
console.log(myNewArray)


let sameValue = function(){
    console.log( "This is a function")
}
sameValue()


const person = {
    name: 'John',
    greet: function() {
        console.log(this.name);
    }
};
person.greet(); // 'John'


let globalVar = 'I am global!';

function outerFunction() {
    let outerVar = 'I am in outerFunction!';

    function innerFunction() {
        let innerVar = 'I am in innerFunction!';
        console.log(globalVar); // গ্লোবাল স্কোপ থেকে
        console.log(outerVar);  // প্যারেন্ট স্কোপ থেকে
        console.log(innerVar);  // বর্তমান স্কোপ থেকে
    }

    innerFunction();
}

outerFunction();


// * হোস্টিংয়ের কারণে, আপনি ফাংশনগুলো প্রথমে কল করতে পারেন এবং 
// পরে স্ক্রিপ্টের নিচে তাদের সংজ্ঞায়িত করতে পারেন। উদাহরণস্বরূপ:

sayHello()

function sayHello() {
    console.log("Hello from hoisting")
}

