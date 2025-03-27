// Váriaveis
let nome = "Arthur";

console.log(nome)

nome = "Arthur Gonçalves"

console.log(nome)

const idade = 19

console.log(idade)

console.log(typeof nome)

console.log(typeof idade)

// Mais sobre váriaveis
// let 2teste = "inválido"
// let @teste = "inválido"

let a = 10 , b =20, c = 30

console.log(a, b, c)


const nomecompleto = "Arthur Gonçalves"

const nomeCompleto = "João nunes"

console.log(nomecompleto)

console.log(nomeCompleto)

let _teste = "ok"

let $teste = "ok"

console.log(_teste, $teste)

// // Prompt
// const age = prompt("Digite a sua idade:")

// console.log(`A sua idade e ${age}`)


// // alert
// alert("Testando")

// const z = 10

// alert(`O número é ${z}`)

// Objeto Math

console.log(Math.max(5, 2, 1, 10))

console.log(Math.floor(5.14))

console.log(Math.ceil(5.14))

// // console
// console.log("Teste!")

// console.error("erro!")

// console.warn("Aviso")

// IF
const m = 10

if(m > 5) {
    console.log("M é maior que 5")
}

const user = "João"

let n = "João"

if(n === user) {
    console.log("Seu nome é João")
}

if (user === "Maria") {
    console.log("Olá Maria  ")
}

console.log(n === user, user === "Maria" )

// Else
const loggedIn = false

if(loggedIn) {
    console.log ("Está autenticado!")
} else {
    console.log("Não está autenticado!")
}

const q = 10
const w = 25

if(q > 5 && w > 20) {
    console.log("Númeors mais altos")
} else {
    console.log("Os números não são mais altos")
}

// Else if
if(1 > 2 ) {
    console.log("Teste")
} else if (2 > 3) {
    console.log("Teste 2")
} else if (5 > 1) {
    console.log("Agora sim!")
}

const userName = "Arthur"
const userAge = 19

if (userName === "José") {
    console.log ("Bem-Vindo José")
} else if(userName === "Arthur" && userAge === 19) {
    console.log(`Olá ${userName}, voce tem ${userAge} anos`)
} else {
    console.log("Voce não existe!")
}