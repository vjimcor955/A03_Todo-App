import React from 'react'

const Todo = ({todo, deleteTodo, updateTodo, editTodo}) => {
  const {id, title, description, state, priority} = todo
  return (
    <li className='list-group-item'> 
      <div className='d-flex justify-content-between align-items-start'>
        <div>
          <h5 className={state && 'completada'}> {title} </h5>
          <p className={state && 'completada'}> {description} </p>
          <div className='d-flex'>
            <button onClick={() => deleteTodo(id)} className='btn btn-sm btn-danger m-1'> Eliminar </button>
            <button onClick={() => editTodo(id)} className='btn btn-sm btn-warning m-1'> Editar </button>
            <button onClick={() => updateTodo(id)} className='btn btn-sm btn-primary m-1'> Actualizar </button>
          </div>
        </div>
        <span className='badge badge-primary'>{priority && "prioridad"}</span>
      </div>
    </li>
  )
}

export default Todo