import './App.css'

// Imagem em assets
import night from './assets/night.jpg'


// useState
import Data from './components/data.jsx'

// renderização de lista
import ListRender from './components/ListRender.jsx'

// Render condicional
import ConditionalRender from './components/ConditionalRender.jsx'

// Props
import ShowUserName from './components/ShowUserName.jsx'

// Desestruturando props
import CarDetails from './components/CarDetails.jsx'

//Renderização de listas
const cars = [  
  { id: 1, brand: "Ferrari", color: "Amarelo", km: 0 },
  { id: 2, brand: "KIA", color: "Branco", km: 200000 },
  { id: 3, brand: "Renault", color: "Azul", km: 32000 },
] 

// Fragments
import Fragment from './components/Fragment.jsx'

// Children
import Container from './components/Container.jsx'

// Função em prop
import ExecuteFunction from './components/ExecuteFunction.jsx'

// State lift
import Message from './components/Message.jsx'
import { useState } from 'react'
import ChangeMessage from './components/ChangeMessage.jsx'


function App() {

  // Função em prop
  function showMessage() {
    alert("Fui chamado por uma prop!")
  }

  // State lift

  const [message, setMessage] = useState("")

  const handleInputChange = (msg) => {
    setMessage(msg);
  }

  return (
    < div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em react</h1>
      {/* Inserindo imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={night} alt="Outro imagem" />
      {/* useState */}
      <Data />
      {/* Renderização de lista */}
      <ListRender />
      {/* render condicional */}
      <ConditionalRender />
      {/* props */}
      <ShowUserName name= "Arthur" />
      {/* Desestruturando props */}
      <CarDetails brand="Mercerdes" km={999} color="Preto"/>
      {/* Reaproveitamento de componentes */}
      <CarDetails brand="Fiat" km={0} color="Branco"/>
      <CarDetails color="Azul" brand="BMW" km={45232} />
      {/* Renderização de lista */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km}/>
      ))}
      {/* Fragment */}
      <Fragment />
      {/* Children */}
      <Container>
        <h2>Teste</h2>
        <p>Meu container</p>
      </Container>
      {/* Função em prop */}
      <ExecuteFunction myFunction={showMessage} />
      {/* State lift */}
      <Message msg = {message} />
      <ChangeMessage handleMessage={handleInputChange} />
    </div>
  )
}

export default App
