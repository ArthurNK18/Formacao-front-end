// Criando uma função
function minhaFuncao() {
    alert("Função funcionando")
}

const minhaFuncaoEmVariavel = function() {
    console.log("Função em variável")
}

minhaFuncaoEmVariavel()

function funcaoComParametro(txt) {
     console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Imprimindo alguma coisa ")

funcaoComParametro("Outra função")

// return
const a = 10
const b = 20
const c = 30
const d = 40

function soma(n1, n2) {
    return n1 + n2
}

const resultado = soma (a, b)

console.log(resultado)

console.log(soma(c, d))

// Escopo da função
let y = 10

function testandoEscopo() {
    let y = 20
    console.log(`O y dentro da função é: ${y}`)
}

testandoEscopo()

console.log(`O y fora da função é: ${y}`)

// Nested escopo
let m = 10

function escopoAninhado() {
    let m = 20

    if(true) {
        let m = 30

        if(true) {
            let m = 40

            console.log(m)
        }

        console.log(m)
    }

    console.log(m)
}

escopoAninhado()

console.log(m)

// Arrow function
const testeArrrow = () => {
    console.log("Esta é uma arrow function")
}

testeArrrow()

const parOuImpar = (n) => {
    if (n % 2  === 0 ){
        console.log("Par")
        return 
    }

    console.log("Impar")
}

parOuImpar (5)

parOuImpar(10)

// Mais sobre arrow function
const raizQuadrada = (x) => {
    return (x * x)
}

console.log(raizQuadrada (4))

const raizQuadrada2 = (x) => x * x

console.log(raizQuadrada2(5))

console.log(raizQuadrada2(12))

const helloWorld = () => console.log("Hello World")

helloWorld()

// Parametro opcional

const mutiplicacao = function(m, n ) {
    if(n === undefined) {
        return m * 2
    } else {
       return m * n
    }
}

console.log(mutiplicacao(5))

console.log(mutiplicacao(2, 4))

const greeting = (name) => {

    if(!name) {
        console.log("Olá")
        return
    }

    console.log(`Olá ${name}!`)
}

greeting()

greeting("Arthur")


// Valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`
}

console.log(customGreeting("Arthur"))

console.log(customGreeting("Matheus", "Bom dia"))

const repeatText = (text, repeat = 2 ) => {
    for (let i = 0; i < repeat; i++)
        console.log(text)
}

repeatText("Testando")

repeatText("Agora repete 5 vezes", 5)


// Closure
function someFunction() {
    let text = "Algum texto"

    function display() {
        console.log(text)
    }

    display()
}

someFunction( )

// mais sobre closure
const mutiplicacaoClosure = (n) => {
    return (m) => {
        return n * m
    }
}

const c1 = mutiplicacaoClosure(5)

const c2 = mutiplicacaoClosure(10)

console.log(c1)

console.log(c2)

console.log(c1(5))

console.log(c2(10))

// Recursão
const ultilTen = (n, m) => {
    if(n < 10) {
        console.log("A função parou de executar")
    } else {
        const x = n - m

        console.log(x)

        ultilTen(x, m)
    }
}

ultilTen(100, 7)


// // Infinite recurse
// function run() {
//     console.log("Executando...")
//     run()
// }

// run()

function factorial(x) {
    if(x === 0) {
        return 1
    } else {
        return x * factorial(x - 1)
    }
}

const num = 6

const result = factorial(num)

console.log(`O fatorial do número ${num} é ${result}`)