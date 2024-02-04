import { useState, useEffect } from 'react'
import './App.css'
import Header from "./components/Header";
import TodoAdd from "./components/TodoAdd";
import TodoList from "./components/TodoList";
// import fetchTodos 


function App() {
  const [todos, setTodos, useEffect] = useState([])

  const getTodos = async ()=>{
    const todos = await fetchTodos();
    setTodos(todos)
  }

  const addTodo = async (title) =>{
    const newTodo = {
      title : title,
      completed: false
    }

    const todo = await postTodo(newTodo);

  
    setTodos([...todos, newTodo])
  }




  useEffect(()=>{
    getTodos()
  }, [])


  const appTitle = 'Simple Todo App'
  return (
    <div className="page">
      <Header appTitle={appTitle}/>
      <TodoAdd addTodo={addTodo} />
      <TodoList todos={todos}/>
    </div>


  )
}

export default App