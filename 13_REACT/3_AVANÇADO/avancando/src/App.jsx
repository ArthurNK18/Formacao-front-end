import './App.css'

// Imagem em assets
import night from './assets/night.jpg'

// useState
import Data from './components/data.jsx'

function App() {

  return (
    < div className="App" style={{paddingBottom: "500px"}}>
      <h1>Avançando em react</h1>
      {/* Inserindo imagem em public */}
      <img src="/img.jpg" alt="Alguma imagem" />
      {/* Imagem em assets */}
      <img src={night} alt="Outro imagem" />
      {/* useState */}
      <Data />
    </div>
  )
}

export default App
