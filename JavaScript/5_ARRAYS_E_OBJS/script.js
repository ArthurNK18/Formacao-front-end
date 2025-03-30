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