import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import TodoAdd from './components/TodoAdd';

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (title) => {
    const newTodo = {
      title: title,
      completed: false
    }
    setTodos([...todos, newTodo])
  }
  const appTitle = 'Simple Todo app'

  return (
      <div className="page">
        {/* <ul className="todo-list-items"></ul>
        <div className="todos-total">total items:<span className="output"></span></div> */}
        <Header appTitle={appTitle}/>
      <TodoAdd addTodo = {addTodo}/>
    </div>
  )
}

export default App
