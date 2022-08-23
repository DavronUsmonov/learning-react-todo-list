import React from "react"

function Todo({text,todo, todos,setTodos}) {
    function completeHandler() {
        setTodos(todos.map((el) => {
            if(el.id == todo.id) el.completed = !el.completed;
            return el;
        }));
    }

    function deleteHandler() {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    return(
        <div className = "todo">
            <li className= {`todo-item ${todo.completed ? "completed" : ''}`}>{text}</li>
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