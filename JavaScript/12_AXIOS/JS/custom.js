const postsFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        Accpet: "application/json",
        Authorization: "meunovotoken"
    }
});