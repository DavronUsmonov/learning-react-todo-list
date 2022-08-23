import React from "react"
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

function TodoForm({ setInputText, todos, setTodos, inputText }) {
    function inputTextHandler(e) {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([...todos,{text: inputText, id:uuidv4()}])
        setInputText("");
    }

    return (
        <form className="todo-form">
            <input value={inputText} onChange={inputTextHandler} type="text" className ="todo-input"/>
            <button className="submitButton" onClick={submitTodoHandler} type="submit"/>
        </form>
    )
}

export default TodoForm