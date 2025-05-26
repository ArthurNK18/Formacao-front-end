import React from 'react'

const Events = () => {

    const handleClick = (e) => {
        console.log(e)
        console.log("Executou")
    }   

    // Função de redenrização
    const renderSomething = (x) => {
        if (x) {
            return <h1>Renderizando...</h1>
        } else {
            return <h1>Nada renderizando...</h1>
        }
    };

    // return 10 > 2 && <p>Carregando...</p>

  return (
    <div>
        <div>
            <button onClick={() => alert("Testando um evento")}>Clique Aqui</button>
        </div>
        {/* Evento com função */}
        <div>
            <button onClick={handleClick}>
                Clique Aqui com função
            </button>
        </div>
        {/* Função com render */}
        {renderSomething(true)}
        {renderSomething(false)}
    </div>
  )
}

export default Events