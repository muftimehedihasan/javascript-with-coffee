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