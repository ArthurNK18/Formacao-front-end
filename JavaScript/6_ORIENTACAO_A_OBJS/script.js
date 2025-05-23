// Métodos
const animal = {
    nome: "Bob",
    latir: function() {
        console.log("Au Au")
    }
}

console.log(animal.nome)

animal.latir()


// Aprofundado em métodos
const pessoa = {
    nome: "Arthur",
    getNome: function() {
        return this.nome
    },

    setNome: function(novoNome) {
        this.nome = novoNome;
    },
}

console.log(pessoa.nome)

console.log(pessoa.getNome())

pessoa.setNome("Joaquim")

console.log(pessoa.getNome())

// Prototype
const text = "asd"

console.log(Object.getPrototypeOf(text))

const bool = true

console.log(Object.getPrototypeOf(bool ))

const arr = []

console.log(arr.length)

console.log(Object.getPrototypeOf(arr))

// Mais sobre o prototype
const myObject = {
    a: "b"
}

console.log(Object.getPrototypeOf(myObject))

console.log(Object.getPrototypeOf(myObject) === Object.prototype)

const mySecondObject = Object.create(myObject)

console.log(mySecondObject.a);

console.log(Object.getPrototypeOf(mySecondObject) === myObject)

// Classes básicas
const cachorro = {
    raca: null,
    patas: 4
}

const pastorAlemao = Object.create(cachorro)

pastorAlemao.raca = "Pastor Alemão"

console.log(pastorAlemao.patas)

const bulldog = Object.create(cachorro)

bulldog.raca = "Bulldog"

console.log(bulldog)

// Funções como classe
function criarCachorro(nome, raca) {
    const cachorro = Object.create({})

    cachorro.nome = nome
    cachorro.raca = raca

    return cachorro
}   

const bob = criarCachorro("Bob", "Vira-lata")

console.log(bob)

const jack = criarCachorro("Jack" , "Poodle")

console.log(jack)

console.log(Object.getPrototypeOf(jack))

// Classes baseadas em funções
function Cachorro(nome, raca) {
    this.nome = nome
    this.raca = raca
}

const husky = new Cachorro("Ozzy", "Husky")

console.log(husky)

// Classes de funções com métodos
Cachorro.prototype.uivar = function() {
    console.log("Auuuuuuuuu")
}

husky.uivar();


// Classes ES6
class CachorroClasse {
    constructor(nome, raca){
        this.nome = nome
        this.raca = raca
    }

}

const jeff = new CachorroClasse("Jeff" , "Labrador")

console.log(jeff)

console.log(Object.getPrototypeOf(jeff))

// Mais sobre classes
class Caminhao {
    constructor(eixos, cor) {
        this.eixos = eixos
        this.cor = cor
    }

    descreverCaminhao() {
        console.log(`Este caminhão possui ${this.eixos} eixos, e é da cor ${this.cor}`)
    }
}

const scania = new Caminhao(6, "Vermelha")

console.log(scania);

scania.descreverCaminhao()

Caminhao.motor = 4;

const c2 = new Caminhao(4, "Preta")

console.log(c2)

console.log(c2.motor)

Caminhao.prototype.motor = 4.0

const c3 = new Caminhao(6, "Azul")

console.log(c3.motor)

// Override
class Humano {
    constructor(nome, idade) {
        this.nome = nome
        this.idade = idade
    }
}

const arthur = new Humano("Arthur", 19)

console.log(arthur)

Humano.prototype.idade = "Não definida"

console.log(arthur.idade)

console.log(Humano.prototype.idade)

// Symbol com classes
class Aviao {
    constructor(marca, turbinas) {
        this.marca = marca
        this.turbinas = turbinas
    }
}

const asas = Symbol()
const pilotos = Symbol ()

Aviao.prototype[asas] = 2

Aviao.prototype[pilotos] = 3

const boeing = new Aviao("Boeing" , 10)

console.log(boeing)

console.log(boeing[asas])

console.log(boeing[pilotos])

// Getters e Setters
class Post {
    constructor(titulo, descricao, tags) {
        this.titulo = titulo
        this.descricao = descricao
        this.tags = tags
    }

    get exibirTitulo() {
        return `Você está lendo: ${this.titulo}`;
    }

    set adicionarTags(tags) {
        const tagsArray = tags.split(", ")
        this.tags = tagsArray
    }
}

const myPost = new Post("Algum post", "É um post sobre programação");

console.log(myPost)

console.log(myPost.exibirTitulo)

myPost.adicionarTags = "Programação, JavaScript, js"

console.log(myPost)

// Herança
class Mamifero {
    constructor(patas) {
        this.patas = patas
    }
}

class Lobo extends Mamifero {
    constructor(patas, nome) {
        super(patas, patas)
        this.nome  = nome
    }
}

const shark = new Lobo(4, "Shark")

console.log(shark)

console.log(shark.patas)

// Operador instanceof
console.log(shark instanceof Lobo)

console.log(Lobo instanceof Mamifero)

console.log(new Lobo(4, "Teste") instanceof Mamifero)

console.log(new Post("a", "b") instanceof Cachorro)