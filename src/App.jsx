import FormControlado from './components/FormControlado'
import TodoList from './components/TodoList'
import React, { useState } from 'react'

const initialState = [
  {id:1, title:"todo 01", description:"Descripcion 01", state: false, priority: false},
  {id:2, title:"todo 02", description:"Descripcion 02", state: true, priority: true}
  // {id:1, title:"todo 01", description:"Descripcion 01", state: "pendiente", priority:false, state:false},
  // {id:2, title:"todo 02", description:"Descripcion 02", state: "pendiente", priority:false, state:true}
]    

function App() {

  // Estado - Lista de tareas
  const [todos, setTodos] = useState(initialState)

  // Funcion añadir tarea
  const addTodo = todo => {
    setTodos([...todos, todo])
  }

  // Funcion deteteTodo
  const deleteTodo = id => {
    const newArray = todos.filter(todo => todo.id !== id)
    setTodos(newArray)
  }

  // Funcion updateTodo
  const updateTodo = id => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        todo.state = !todo.state
      }
      return todo
    })
    setTodos(newArray)
  }

  // Funcion editTodo
  const editTodo = (id) => {
    const newArray = todos.map(todo => {
      if (todo.id === id) {
        console.log(todo)  
        return todo
      }
    })
  }

  return (
    <div className='container'>
      <h1>Formularios</h1>
      <FormControlado addTodo={addTodo} todos={todos} editTodo={editTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
    </div>
  )
}

export default App
