// Function Scope

// *** 1. Global Scope ***

// * Variables declared outside of any function are in the global scope
// * These variables are accessible from anywhere in the code.

let globalVar = "I am a global";
function showGlobalVar() {
    // console.log(globalVar);
}

// console.log(globalVar);
showGlobalVar()

// *** 2. Local Scope ***
// * Variables declared within a function are in the local scope of that function.
// * These variables are only accessible within that function.

function showLocalVar(){
    let localVar = "Hello from local"
    console.log(localVar)
}
showLocalVar()

// *** 3. Block Scope: ***

// * Variables declared with `let` or `const` inside a block(e.g., inside `{}`)
// are block-scoped.
// * These variables are only accessible within that block.

if (true) {
    let blockVar = "I am block scoped";
    console.log(blockVar); 
}

// *** 4. Function Scope: ***

// * Variables declared with var are function-scoped, meaning they are 
// accessible throughout the function in which they are declared.

function functionScopeexample() {
    if (true) {
        var functionScopeexampleScopedVar = "I am function scoped";
    }
    console.log(functionScopeexampleScopedVar)
}

functionScopeexample ();

// *** 5. Lexical Scope(Static Scope): ***
// * JavaScript uses lexical scoping, meaning that the scope of a variable 
// is determined by its position in the source code.
// Inner functions have access to variables declared in their outer scopes.

function outerFunction() {
    var outerVar = "I am outside!";
    function innerFunction() {
        console.log(outerVar); // "I am outside!"
    }
    innerFunction();
}
outerFunction();







