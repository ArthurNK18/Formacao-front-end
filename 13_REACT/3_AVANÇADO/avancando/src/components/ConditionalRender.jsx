import React from 'react'
const ConditionalRender = () => {
    const x =5

    const name = "Arthur"

  return (
    <div>
        {/* Render condicional */}
        <h3>Isso será exibido?</h3>
        {x > 2 && <p>Sim, isso será exibido</p>}

        {/* Else */}
        <h3>Render ternario</h3>
        {name === "João" ?(
            <div><p>Olá João!</p></div>
        ) : (
            <div><p>Nome não encontrado</p></div>
        )}
    </div>
  )
}

export default ConditionalRender