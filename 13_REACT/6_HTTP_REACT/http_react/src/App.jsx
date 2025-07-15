import { useState, useEffect} from "react";

import { useFetch } from "./hooks/UseFatch";

const url = "http://localhost:3000/products";


import './App.css'

function App() {
  // 1 Resgatando dados
  const [products, setproducts] = useState([]);

  // Custom Hook
  const { data: items, httpConfig, loading, error } = useFetch(url);

  // useEffect(() => {

  //  async function getData(){
  //     const res = await fetch(url);

  //     const data = await res.json();

  //     setproducts(data);
  //  }

  //  getData();

  // }, [])

  // Envio de dados
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();

        // Refatorando post
    httpConfig({name,price}, "POST");


  //   const product = {
  //     name,
  //     price,
  //   }

  // const res = await fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json"
  //   },
  //   body: JSON.stringify(product),
  // });

  // // Carregamento dinâmico
  // const addedProduct = await res.json();

  // setproducts((prevProducts) => [...prevProducts, addedProduct]);
  }


    return (
    <div className="App">
      <h1>HTTP em React</h1>
      {/* Loading */}
      {loading && <p>carregando...</p>}
      {/* trantando error */}
      {error && <p>{error}</p>}
      {/* {Resgate dos dados} */}
      <ul>
        {items && items.map((products) => (
          <li key={products.id}>{products.name} - R${products.price}</li>
        ))}
      </ul>
      {/* Envio de dados */}
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome</span>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
          </label>
            <label>
            <span>Preço</span>
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value)}/>
          </label>
          {/* <input type="submit" value="Enviar"/> */}
          {/* loading post */}
          {loading && <input type="submit" disabled value="Aguarde..."/>}
          {!loading && <input type="submit" value="Criar..."/>}
        </form>
      </div>
    </div>
  )
}
export default App
