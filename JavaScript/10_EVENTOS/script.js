// Adicionando eventos
const btn = document.querySelector("#my-button")

btn.addEventListener("click", function() {
    // console.log("Clicou no butão")
    alert("Clicou no butão")
})

// Removendo eventos
const secondBtn = document.querySelector("#btn")

function imprimirMensagem() {
    console.log("Teste")
}

secondBtn.addEventListener("click", imprimirMensagem);

const thirdBtn = document.querySelector("#other-btn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido")
    secondBtn.removeEventListener("click" , imprimirMensagem)
})

// Argumento do evento 
const myTitle = document.querySelector("#my-title")

myTitle.addEventListener("click" , (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})

// Propagando eventos
const containerBtn = document.querySelector("#btn-container")

const btnInsideContainer = document.querySelector("#div-btn")

containerBtn.addEventListener("click" , () => {
    console.log("Evento 1")
})

btnInsideContainer.addEventListener("click" , (e) => {
    e.stopPropagation();
    console.log("Evento 2")
})

// Removendo evento padrão
const a = document.querySelector("a")

a.addEventListener("click" , (e) => {
    e.preventDefault()

    console.log("Não alterou a página")
});

// Eventos de tecla
// document.addEventListener("keyup" , (e) => {
//     console.log(`Soltou a tecla ${e.key}`)
// })

// document.addEventListener("keydown" , (e) => {
//     console.log(`apertou a tecla ${e.key}`)
// })

// Eventos de mouse
const mouseEvents = document.querySelector("#mouse")

mouseEvents.addEventListener("mousedown" , (e) => {
    console.log("Pressionou o botão")
});

mouseEvents.addEventListener("mouseup" , () => {
    console.log("Soltou o botão")
})

mouseEvents.addEventListener("dblclick" , () => {
    console.log("Click duplo")
})

// Movimento do mouse
// document.addEventListener("mousemove", (e) => {
//     console.log(`No eixo X: ${e.x}`)
//     console.log(`é no eixo Y: ${e.y}`)
// })

// Eventos de scroll
document.addEventListener("scroll", (e) => {
    if(pageYOffset > 200) {
        console.log("Passamos de 200px ")
    }
});

// Evento de foco
const input = document.querySelector("#my-input")

input.addEventListener("focus" , (e) => {
    console.log("Entrou no input")
});

input.addEventListener("blur" , (e) => {
    console.log("Saiu no input")
});

// Evento de carregamento
window.addEventListener("load" , () => {
    console.log("A página carregou!")
});

window.addEventListener("beforeunload" , (e) => {
    e.preventDefault();
    e.returnValue = ""
})

// Técnica de debounce
const debounce = (f, delay) => {
    let timeout 

    return(...arguments) => {
        if(timeout) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(() => {
            f.apply(arguments)
        }, delay)
    }
};

window.addEventListener("mousemove", debounce(() => {
    console.log("Executando a cada 400ms")
}, 400)
);
