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