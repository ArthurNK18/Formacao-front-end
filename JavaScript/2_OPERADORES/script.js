// Number   
console.log(typeof 2);
console.log(typeof 25.14);
console.log(typeof -128);

// Ops. aritimeticas
console.log(2 + 4)
console.log(10 - 5) 
console.log (8 * 2)
console.log (16 / 2)

console.log(5 + 4 * 2)

// Spacial number
console.log(typeof Infinity)

console.log(typeof -Infinity)

console.log(typeof NaN)

// Strings
console.log(typeof "Um texto")
console.log(typeof `Mais um texto, porém este tem uma conta ${5 + 4}`)

// Símbolos especiais
console.log("Este texto tem uma quebra de linha aqui, \n viu?")

console.log("Espaçamento \t de tab")

// Concatenação
console.log("Oi," + " tudo" + " bem?")

console.log(`Oi,` + ` tudo` + ` bem?` + ` O que acha desse número?` + ` ${5 + (3 * 5)}`)

// Template String
console.log(`A soma entre 2 + 2 é igual a: ${2+2}`)

console.log(`Podemos excutar qualquer coisa aqui ${console.log("Teste")}`)

// Boolean
console.log(true)

console.log(5 > 20)

console.log(30 > 10)

console.log(typeof false)

// Comparações
console.log(5 <= 5)

console.log(5 < 5)

console.log( 10 == 10)

console.log (10 == 9)

console.log (100 != 100)

console.log(100 != 90)

// Valor idêntic
console.log(9 == "9")

console.log(9 + "9")

console.log(9 === "9")

console.log(9 != "9")

console.log(9 !== "9")

// Operadores lógicos
console.log(true && true)

console.log(true && false)

console.log(5 > 2 && 2 < 10)

console.log (2 > 5 && 10 < 2)

console.log(2 > 5 && 2 < 10)

console.log(2 > 5 || 2 < 10)

console.log (2 > 5 || 10 < 2)

console.log(!true)

console.log(! 5 > 2) 

// Empty Values
console.log(typeof null, typeof undefined)

console.log(null === undefined)

console.log(null == undefined)

console.log(null == false)

console.log(undefined == false)

console.log(null == true)

console.log(undefined == true)


// Mudança de tipos
console.log(5 * null)

console.log("Teste" * "opa")

console.log("10" + 1)

console.log("10" - 1)