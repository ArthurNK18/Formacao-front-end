// Var, Let, Const
var x = 10
var y = 15

if(y > 10) {
    var x = 5 
    console.log(x) 
}

console.log(x)

let a= 10
let b = 15

if(b > 10) {
    let a = 5 
    console.log(a) 
}

console.log(a)

function logName() {
    const name = "John"
    console.log(name)
}

const name = "Jane"

logName()

console.log(name)

// Arrow Functions
const sum = function(a, b) {
    return a + b
}

const sumArrow = (a, b) => a + b

console.log(sum(5, 5)) // 10

console.log(sumArrow(5, 5)) // 10

const greet = (name) => {
    if(name) {
        return `Hello, ${name}!`
    } else {
        return "No name!"
    }
}

console.log(greet("John"))

console.log(greet())

const user = {
    name: "Arthur",
    sayUserName() {
        setTimeout(function () {
            console.log(this);
            console.log(`Username: ${this.name}`);
        }, 1000)
    },
}

user.sayUserName()

