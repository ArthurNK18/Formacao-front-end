// Instalação
console.log(axios)

// Primeiro request
const getData = async() => {
    try {
        const reponse = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(reponse)

        return reponse.data
    } catch (error) {
        console.log(error)
    }
}

getData()