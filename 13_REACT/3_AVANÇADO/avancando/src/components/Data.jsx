import { useState } from "react"

const data = () => {
    let someData = 10;

    const [anotherNumber, setAnotherNumber] = useState(15);

  return (
    <div>
        <p>Valor: {someData}</p>
        <button onClick={() => (someData = 15)}>Mudar Variável</button>
        
        <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(20)}>Mudar Estado</button>
    </div>
    </div>
  )
}

export default data