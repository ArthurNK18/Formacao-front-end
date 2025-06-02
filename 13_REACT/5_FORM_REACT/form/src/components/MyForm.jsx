import "./MyForm.css";

import { useState } from "react";

const MyForm = ({userName, userEmail}) => {

    // Gerencianmento de dados
    const [name, setName] = useState(userName)
    const [email, setEmail] = useState(userEmail)

    const [bio, setBio] = useState("");

    const [role, setRole] = useState("")

    const handleName = (e) => {
        setName(e.target.value);
    };

    // Envio de formulario
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Enviando o formulário");
        console.log(name, email, bio, role);

        
    // Validação
    // Envio

    // limpar form
    setName("");
    setEmail("");
    setBio("");
    setRole("");
    };

  return (
    <div>
        {/* Criação de form */}
        {/* Envio de formulario */}
        <form onSubmit={handleSubmit}></form>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="name" placeholder="Digite o seu nome" onChange={handleName} />
                {/* Controlled input */}
                
            </div>
            {/* label envolvendo o input */}
            <label>
                <span>E-mail:</span>
                <input type="text" name="email" placeholder="Digite seu e-mail" onChange={(e) => setEmail(e.target.value)}
                value={email || ""}/>
                {/* Controlled input */}
            </label>
            {/* Textarea */}
            <label>
                <span>Bio:</span>
                <textarea name="bio" id="bio" placeholder="Descrição do usuário" onChange={(e) => setBio(e.target.value)}
                    value={bio}></textarea>
            </label>
            {/* Select */}
            <label>
                <span>Função no sistema</span>
                <select name="role" id="role" onChange={(e) => setRole(e.target.value)} value={role}>
                    <option value="user">Usuário</option>
                    <option value="editor">Usuário</option>
                    <option value="admin">Admin</option> 
                </select>
            </label>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}

export default MyForm