import React from 'react'
import Todo from './Todo'

const TodoList = ({todos, deleteTodo, updateTodo, editTodo}) => {
  return (
    <div>
      <h1 className='mt-3 text-center'>Lista de tareas</h1>
      <ul className='list-group'>
      {
        todos.map((todo)=>( 
            <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} updateTodo={updateTodo} editTodo={editTodo}/>
        ))
      }
      </ul>
    </div>
  )
}

export default TodoList