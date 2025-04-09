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

// InsertBefore
const p = document.createElement("p")

const header = title.parentElement;

header.insertBefore(p, title)

// Appendchild
const navLinks = document.querySelector("nav ul")

const li = document.createElement("li")

navLinks.appendChild(li)

// ReplaceChild
const h2 = document.createElement("h2")

h2.textContent = "Meu novo título!"

header.replaceChild(h2, title)

// Criando nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título")

console.log(myText)

const h3 = document.createElement("h3")

h3.appendChild(myText)

console.log(h3)

mainContainer.appendChild(h3);

// Trabalhando com atributos
const firstLink = navLinks.querySelector("a")

firstLink.setAttribute("href", "https://google.com")

firstLink.setAttribute("target", "_blank")

// Altura e largura dos elementos
const footer = document.querySelector("footer")

console.log(footer.offsetWidth)
console.log(footer.offsetHeight)

console.log(footer.clientWidth)
console.log(footer.clientHeight)

// Posição do elemtento
const product1 = products[0]

console.log(product1.getBoundingClientRect())

// Estilos com JS
mainContainer.style.color = "red"

mainContainer.style.backgroundColor = "#341539"

mainContainer.style.paddingBottom = "15px"

// Alterando estilos de HTMLCollection
for(const li of listItens) {
    li.style.backgroundColor = "red"
}