import { useState } from 'react'
import Swal from 'sweetalert2'

const FormControlado = ({addTodo, todos, editTodo}) => {

  const [todo, setTodo] = useState({
    title: "",
    description: "",
    state: "pendiente",
    priority: false
  })

  const {title, description, state, priority} = todo

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim() === "" || description.trim() === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
    }
    console.log("Enviando info")
    addTodo({
      ...todo,
      id:Date.now(),
      state: state == "completada"
    })
  }
  const handleChange = (e) => {
    const {name, type, checked, value} = e.target
    setTodo({
      ...todo,
      [name]:type === "checkbox"? checked:value
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Nombre de la tarea"
        type="text"
        className='form-control mb-2'
        value={todo.title}
        onChange={handleChange}
      />
      <textarea
        name="description"
        placeholder="Introduce la descipcion de la tarea"
        className="form-control mb-2"
        value={todo.description}
        onChange={handleChange}
      />
      <select
        name="state"
        className='form-control mb-2'
        value={todo.state}
        onChange={handleChange}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completada">Completada</option>
      </select>
      <div className='form-checked'>
        <input
          name="priority"
          type="checkbox"
          id='inputChecked'
          className='form-checked-input mr-1'
          checked={todo.priority}
          onChange={handleChange}
        />
        <label
          htmlFor='inputChecked'
          className='form-checked-label'
        >
          Prioridad
        </label>
      </div>
      <button type='submit' className='btn btn-primary'>Añadir</button>
    </form>
  )
}

export default FormControlado
