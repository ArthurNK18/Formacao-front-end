import './App.css'

// Css de componente
import Mycomponent from './component/Mycomponent'
import Title from './component/Title';

function App() {

  const n = 15 

  // Classes dinamicas
  const redTitle = true

  return (
    <div className="App">
      {/* Css Global */}
      <h1>Css em react</h1>
      {/* Css de componente */}
      <Mycomponent />
      <p>Pegou o css do componente</p>
      {/* Inline style */}
      <p style={{color: "blue", padding: "25px", borderTop: "1px dotted blue"}}>Este elemento tem estilos inline</p>
      {/* Inline style dinamico */}
      <h2 style={n > 10 ? {color:"purple"}: {color: "magenta"}}>
        Css dinâmico
      </h2>

      <h2 style={n > 20 ? {color:"purple"}: {color: "magenta"}}>
        Css dinâmico 2
      </h2>
      {/* classe dinamicas */}
      <h2 className={redTitle ? "red-title" : "title"}>Este título vai ter uma classe
      </h2>
      {/* Css modules */}
      <Title />
    </div>
  );
}

export default App
