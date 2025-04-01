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

// Slice
const testeSlice = ["a", "b", "c", "d", "e", "f"]

const subArray = testeSlice.slice(2, 4)

console.log(subArray)

console.log(testeSlice)

const subArray2 = testeSlice.slice(2, 4 + 1)

console.log(subArray2)

const subArray3 = testeSlice.slice(10, 20)

console.log(subArray3)

const subArray4 = testeSlice.slice(2)

console.log(subArray4)

// foreach
const nums = [1, 2, 3, 4, 5]

nums.forEach((numero) => {
    console.log(`O número é ${numero}`)
})

const posts = [
    {title: "Primeiro post", category: "PHP"},
    {title: "Segundo post", category: "Java Script"},
    {title: "Terceiro post", category: "Python"},
]

posts.forEach((post)=> {
    console.log(`Exibindo post: ${post.title},  da categoria: ${post.category}`)
})

// Includes
const brands = ["BMW", "VW", "Fiat"]

console.log(brands.includes("Fiat"))

console.log(brands.includes("KIA"))

if(brands.includes("BMW")) {
    console.log("Há carro da BMW")
}

// Reverse
const reverseTest = [1, 2, 3 , 4, 5]

reverseTest.reverse()

console.log(reverseTest)

// Trim
const trimTest = "   Testando \n    "

console.log(trimTest)

console.log(trimTest.trim())

console.log(trimTest.length)

console.log(trimTest.trim().length)

// Padstart
const padStartTeste = "1"

const newNumber = padStartTeste.padStart(4, "0")

console.log(padStartTeste)

console.log(newNumber)

const padEndTeste = newNumber.padEnd(10, "0")

console.log(padEndTeste)

// split
const frase = "O rato roeu a roupa do rei de Roma"

const arrayDaFrase = frase.split(" ")

console.log(arrayDaFrase)

// Join
const fraseDeNovo = arrayDaFrase.join(" ")

console.log(fraseDeNovo)

const itensParaComprar = ["Mouse", "Teclado", "Monitor"]

const fraseDeCompra = `Precisamos comprar: ${itensParaComprar.join(", ")}.`

console.log(fraseDeCompra)

// Repeat
const palavra = "Testando "

console.log(palavra.repeat(5))

// rest operator
const somaInfinita = (...agrs) => {
    let total = 0

    for (let i = 0; i < agrs.length; i ++) {
        total += agrs[i]
    }

    return total
}

console.log(somaInfinita(1, 2, 3))

console.log(somaInfinita(1, 20, 34, 3424, 128812, 12723, 12 ,23 , 54, 12))

// Estrutura for of
const somaInfinita2 = (...agrs) => {
    let total = 0

    for(num of agrs) {
        total += num
    }
    return total
}


console.log(somaInfinita2 (1, 2, 4))

console.log(somaInfinita2(5, 6, 1, 23, 5, 6, 3, 5))

// Destructuring em objetos
const userDetails = {
    firstName: "Arthur",
    lastName: "Gonçalves",
    job: "Desenvolvedor web"
}

const {firstName, lastName, job} = userDetails

console.log(firstName, lastName, job)

// Renomear Variaveis
const {firstName: primeiroNome}  = userDetails;

console.log(firstName)

// Destructuring em arrays
const myList = ["Avião", "Submarino", "Carro", "Trator"]

const [veiculoA, veiculoB, veiculoC] = myList

console.log(veiculoA,veiculoB,veiculoC)

// JSON
const myJSON = '{"name": "Arthur", "age": 19, "skills":["PHP", "JavaScript", "Python"]}'

console.log(myJSON)

console.log(typeof myJSON)

// Conversão para JSON
const myObject = JSON.parse(myJSON)

console.log(myObject)

console.log(myObject.name)

console.log(typeof myObject)

// JSON inválido
const badJson = '{"name": Arthur, "age": 31}'

// const myBadObject = JSON.parse(badJson)

myObject.isOpenToWork = true

console.log(myObject)

const myNewJson = JSON.stringify(myObject)

console.log(myNewJson)

console.log(typeof myNewJson)






