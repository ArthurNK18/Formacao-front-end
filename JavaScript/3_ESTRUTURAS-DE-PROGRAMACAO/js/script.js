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

// While

let p = 0

while (p < 5) {
    console.log(`Repetindo ${p}`)
    p = p + 1 
}

// Loop infinito
let x = 10

// while(x > 5) {
//     console.log(`Imprimindo ${x}`)
// }

// Do while
let o = 10

do {
    console.log(`Valor de o: ${o}`)
    o-- 
} while(o > 1)


// For
for (let t = 0; t < 10; t++) {
    console.log("Repetindo algo...")

}

let r = 10;

for(r; r > 0; r = r - 1) {
    console.log(`O r está diminuindo: ${r}`)
}

// Identação
for(let u = 0; u < 10; u++) {
    if(u * 2 > 10) {
        console.log(`Maior que 10! ${u}`)
    } else {
        if(u / 2 === 0) {
            console.log("Deu zero!")
        }
    }
}

// Break
for(let g = 20; g > 10; g--) {
    console.log(`O valor de g é: ${g}`)

    if(g === 12) {
        console.log("O g é 12!")
        break;
    }
}

// continue
for(let s = 0; s < 10; s = s + 1) {
    // operador resto
    if(s % 2 === 0 ) {
        console.log("Número par")
        continue
    }
    console.log(s)
}

// switch
const job = "Engenheiro"

switch(job) {
    case "Programador":
        console.log("Você é um programador")
        break
    case "Advogado":
        console.log("Você é um advogado")
        break
    case "Engenheiro":
        console.log("Você é um engenheiro")
        break
    default:
        console.log("Profissão não encontrada")
}

// switch "errado"
const l = 100
switch(l) {
    case 200:
        console.log("L é 200")
        case 100:
            console.log("L é 100")
            case 10:
                console.log("L é 10")
                default:
                    console.log("L não foi encontrado")
}