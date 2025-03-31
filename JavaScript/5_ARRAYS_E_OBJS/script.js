// arrays
const lista = [1, 2, 3, 4, 5]

console.log(lista)

console.log(typeof lista)

const itens = ["Arthur", true, 2, 4.1]

console.log(itens)

// mais sobre os arrays
const arr = ["a", "b", "c", "d", "e"]

console.log(arr[0])

console.log(arr[2])

// Propiedades
const numbers = [5, 3, 4]

console.log(numbers.length)

console.log(numbers["length"])

const   myName = "Arthur"

console.log(myName.length)

// Métodos
const otherNumbers = [1 , 2 , 3]

const allNumbers = numbers.concat(otherNumbers)

console.log(allNumbers)

const text = "Algum texto"

console.log(text.toUpperCase())

console.log(typeof text.toUpperCase)

console.log(text.indexOf("g"))

// Objetos
const person = {
    name: "Arthur",
    age: 19,
    job: "Desenvolvedor web"
}

console.log(person)

console.log(person.name)

console.log(person.name.length)

console.log(typeof person)

// Criando e delentando propiedades
const car = {
    engine: 2.0,
    brand: "VW",
    model: "Tiguan",
    km: 20000,
}

console.log(car)

car.doors = 4;

console.log(car)

delete car.km

console.log(car)

// Mais sobre objetos
const obj = {
    a: "Teste",
    b: true
}

console.log(obj instanceof Object)

const obj2 = {
    c: []

}

Object.assign(obj2, obj)

console.log(obj2)

// Conhecendo melhor o objeto
console.log(Object.keys(obj))

console.log(Object.keys(obj2))

console.log(Object.keys(car))

console.log(Object.entries(car))

// Mutação
const a = {
    name:"Arthur"
}

const b = a

console.log(a)
console.log(b)

console.log(a === b)

a.age = 31

console.log(a)
console.log(b)

delete b.age

console.log(a)
console.log(b)

// Loop em array
const users = ["Rabelo", "David", "Pedro", "Arthur"]

for(let i = 0; i < users.length; i++) {
    console.log(`Listando o usuário: ${users[i]}`)
}

// Métodos push e pop
const array =["a", "b", "c"]

array.push("d")

console.log(array)

console.log(array.length)

array.pop()

console.log(array)

const itemRemovido = array.pop()

console.log(itemRemovido)

console.log(array)

array.push("z", "x", "y")

console.log(array)

// Shift e unshift
const letters = ["a", "b", "c"]

const letter  = letters.shift()

console.log(letter)

console.log(letters)

letters.unshift("p", "q", "r")

letters.unshift("z")

console.log(letters)

// Indexof e Lastindexof
const myElements = ["Morango","Maçã", "Abacate", "Pêra", "Abacate"]

console.log(myElements.indexOf("Maçã"))

console.log(myElements.indexOf("Abacate"))

console.log(myElements[2])

console.log(myElements[myElements.indexOf("Abacate")])

console.log(myElements.lastIndexOf("Abacate"))

