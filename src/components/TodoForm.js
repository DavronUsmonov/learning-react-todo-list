import React from "react"
import TodoList from "./TodoList";
import {v4 as uuidv4} from "uuid";

let allCompleted = false;

function TodoForm({ setInputText, todos, setTodos, inputText }) {

    function inputTextHandler(e) {
        console.log(e.target.value);
        setInputText(e.target.value);
    }

    function submitTodoHandler(e) {
        e.preventDefault();
        setTodos([...todos,{text: inputText, id:uuidv4(), completed:false}])
        setInputText("");
    }

    function completeAllHandler(e) {
        e.preventDefault();
        for(var i = 0; i < todos.length; i++) {
            if(todos[i].completed == false) {
                allCompleted = false;
                break;
            }
            allCompleted = true;
        }
        setTodos(todos.map((el) => {
            el.completed = !allCompleted;
            return el;
        }));
    }

    function deleteAllHandler(e) {
        e.preventDefault();
        setTodos([]);
    }



    return (
        <div>
            <form className="todo-form">
                <input value={inputText} onChange={inputTextHandler} type="text" className ="todo-input"/>
                <button className="submitButton" onClick={submitTodoHandler} type="submit"/>
            </form>
            <form className="all">
                <button type="submit" onClick={completeAllHandler}>Complete all tasks</button>
                <button type="submit" onClick={deleteAllHandler}>Delete all tasks</button>
            </form>
        </div>
    )
}

export default TodoForm