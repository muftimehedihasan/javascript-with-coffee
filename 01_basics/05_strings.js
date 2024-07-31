const name = "Mehedi"
const repoCount = 50

 // console.log(name + repoCount + "Value");

console.log(`My name is ${name}, my repo count is ${repoCount}`)

const gameName = new String('Mehedi')

console.log(gameName[0]);
console.log(gameName.__proto__);
 
console.log(gameName)

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   mehedi    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://mehedi.com/mehedi%20hasan"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));
