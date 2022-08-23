import React, { useState } from "react"
import './App.css';
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
