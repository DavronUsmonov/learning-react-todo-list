import React from "react"

function Todo({text,todo, todos,setTodos}) {
    function completeHandler() {

    }

    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    return(
        <div className = "todo">
            <li className= "todo-item">{text}</li>
            <button className="complete-btn" onClick={completeHandler}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default Todo