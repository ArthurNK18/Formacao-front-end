// SetTimeout
console.log("Ainda não executou")

setTimeout(function() {
    console.log("Requisição assíncrona")
}, 2000)

console.log("Ainda não executou 2")

// SetInterval
console.log("Ainda não começou")

// setInterval(function() {
//     console.log("Intervalo assíncrono")
// }, 3000)

console.log("Ainda não começou 2")

// Promise
const promessa = Promise.resolve(5 + 5)

console.log("Algum código")

promessa.then(value => {
    console.log(`A soma é: ${value}`)
}) 

console.log("Outro código")