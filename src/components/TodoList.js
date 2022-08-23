import React from "react"
import Todo from "./Todo"

function TodoList({setTodos, todos}) {
    return (
        <ul className="todo-list">
            {todos.map(todo => (
                <Todo setTodos={setTodos} todos={todos} todo={todo} key={todo.id} text={todo.text}/>
            ))}
        </ul>
    )
}

export default TodoList