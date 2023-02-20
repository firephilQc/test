import React, { useState } from 'react'

function TodoList () {
    //intinialise la liste de tache vide
    const [task, setTasks] = useState([]);
    const[newTask, setNewTask] = useState("");

    function handleSubmit (event) {
        event.preventDefault();
        //Ajoue la nouvelle tache a la liste
        setTasks([...task, newTask]);
        setNewTask("");
    }

    function handleDelete(index) {
        setTasks(task.filter((tasks, i) => i!== index));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="test" value={newTask} onChange={event =>setNewTask(event.target.value)}/>
                <button type="submit">Ajouter une tache</button>
            </form>
            <ul>

                {
                    task.map((task, index)=>
                    <li key={index}>
                        {task} <button onClick={() => handleDelete(index)}>Supprimer</button>
                    </li>)
                }

            </ul>
        </div>
    )

}

export default TodoList;