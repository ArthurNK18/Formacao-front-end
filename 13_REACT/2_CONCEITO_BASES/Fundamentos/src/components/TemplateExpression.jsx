// Template Expression

const TemplateExpression = () => {
    const name = "Arthur"

    const data = {
        age: 19,
        job: "Desenvolvedor"
    }


  return (
    <div>
        <p>A soma e {2+2}</p>
        <h3>Bem-Vindo {name}</h3>
        <p>Sua idade é: {data.age} anos e você é um: {data.job}</p>
    </div>
  )
}

export default TemplateExpression