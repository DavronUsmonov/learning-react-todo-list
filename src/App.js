import React, { useEffect, useState } from "react"
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem("todos"));
    console.log(storageTodos);
    if(storageTodos) {
      setTodos(storageTodos);
    }
  }, []) 

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

 
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo</h1>
      </header>
      <TodoForm inputText={inputText} todos={todos} setTodos={setTodos} setInputText={setInputText}/>
      <TodoList setTodos={setTodos} todos={todos}/>
    </div>
  );
}

export default App;
