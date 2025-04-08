// Movendo-se pelo Dom
console.log(document.body);

console.log(document.body.childNodes[1]);

console.log(document.body.childNodes[1].childNodes);

console.log(document.body.childNodes[1].childNodes[1].textContent);

// Selecionando por tag
const listItens = document.getElementsByTagName("li")

console.log(listItens)

// Selecionando por id
const title = document.getElementById("title")

console.log(title)

// Selecionando por classe
const products = document.getElementsByClassName("product")

console.log(products)

// Selecionando por css
const productsQuery = document.querySelectorAll(".product")

console.log(productsQuery)

const mainContainer = document.querySelector("#main-container")

console.log(mainContainer)
