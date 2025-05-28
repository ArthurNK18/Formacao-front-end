import { useState } from "react"

const ListRender = () => {
const [list] = useState(["Arthur", "Pedro", "João"]);

const [users, setUsers] = useState([
    {id: 1, name: "Arthur", age: 20},
    {id: 2, name: "Rabelo", age: 17},
    {id: 3, name: "Edelen", age: 19},
])

const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => prevUsers.filter((user) => randomNumber !== user.id));
}

  return (
    <div>
        {/* Render sem key */}
        <ul>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        </ul>
        {/* Previous state */}
        <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
};

export default ListRender