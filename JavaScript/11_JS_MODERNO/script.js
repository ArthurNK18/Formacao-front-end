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

// const user = {
//     name: "Arthur",
//     sayUserName() {
//         setTimeout(function () {
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000)
//     },
//     sayUserNameArrow () {
//         setTimeout(() => {
//             console.log(this);
//             console.log(`Username: ${this.name}`);
//         }, 1000)
//     }
// }

// // user.sayUserName() 
// user.sayUserNameArrow()

// filter
const arr = [1, 2, 3, 4, 5, 6]

const highNumbers = arr.filter ((n) => {
    if(n >= 3) {
        return n
    }
})

console.log(highNumbers) // [3, 4, 5, 6]    


const users = [
    {name: "Arthur", avaiable: true},
    {name: "Hidan", avaiable: false},
    {name: "Naruto", avaiable: true},
    {name: "Howl", avaiable: false},
    {name: "Shikamaru", avaiable: true},
]

const availableUsers = users.filter((user) => user.avaiable) 

console.log(availableUsers)

// Map
const products = [
    {name: "Shirt", price: 10.99, category: "Roupas"},
    {name: "Chaleira Eletrica", price: 150, category: "Eletro"},
    {name: "Fogão", price: 499, category: "Eletro"},
    {name: "Calça Jeans", price: 30.99, category: "Roupas"},
]

products.map ((product) => {
    if(product.category === "Roupas") {
        product.onSale = true
    }
})

console.log(products)

// Templet literals
const userName = "Arthur"
const age = 19

console.log(`O nome do usuário é: ${userName} e ele tem ${age} anos.`)

// Destructuring
const fruits = ["Banana", "Maçã", "Laranja"]

const [f1, f2, f3] = fruits

console.log(f1, f2, f3) // Banana, Maçã, Laranja

const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Preto", 
}

const {name: productName, price, category, color} = productDetails;

console.log(`O nome do produto é: ${productName}, ele custa R$${price}, e da cor: ${color}.`);

// Spred Oprator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3) // [1, 2, 3, 4, 5, 6]

const a4 = [0, ...a3, 7]

console.log(a4) // [0, 1, 2, 3, 4, 5, 6, 7]

const carName = {name: "Gol"}
const carBrand = {brand: "Volkswagen"}
const otherInfos = {KM: 10000, price: 50000};

const car = {...carName, ...carBrand, ...otherInfos};

console.log(car);

// Classes
class product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }

    productWhithDiscount(discaunt) {
        return this.price * ((100 - discaunt) / 100)

    }
}

const shirt = new product("Camisa", 20)

console.log(shirt)

console.log(shirt.productWhithDiscount(10))
console.log(shirt.productWhithDiscount(15))

// Herança
class productWithAtributtes extends product {
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }

    showColors() {
        console.log(`As cores são:`)
        this.colors.forEach((color) => {
            console.log(color)
        })
    }
}

const hat = new productWithAtributtes("Chapéu", 29.99, ["Preto", "Branco", "Vermelho"])

console.log(hat)

console.log(hat.name)

hat.showColors()