// Instalação
console.log(axios)

// Primeiro request
const getData = async() => {
    try {
        const reponse = await postsFetch.get("/users",
            // Definindo headers
            {
                headers: {
                    "Content-Type": "application/json",
                    custom: "header",
                },
            }
        )
        console.log(reponse)

        return reponse.data;
    } catch (error) {
        console.log(error)
    }
}

getData()

// imprimindo dados na tela
const container = document.querySelector("#user-container")

const printData = async() => {

    const data = await getData()

    console.log(data)

    data.forEach((user) => {
        const div = document.createElement("div")

        const nameElement = document.createElement("h2")

        nameElement.textContent = user.name

        div.appendChild(nameElement);

        const emailElement = document.createElement("p")


        emailElement.textContent = user.email


        emailElement.style.color = "red"


        div.appendChild(emailElement)
        

        container.appendChild(div)
    })
}

printData()

// post
const form = document.querySelector("#post-form")
const title = document.querySelector("#title")
const bodyInput = document.querySelector("#body")


form.addEventListener("submit", async(e) => {
    e.preventDefault();

    postsFetch.post("/posts", {
        body: { title: title.value, body: bodyInput.value, userId: 1}
    });
});
