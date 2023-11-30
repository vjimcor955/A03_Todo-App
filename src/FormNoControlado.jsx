import { useRef, useState } from 'react'

function FormNoControlado() {
    let [pError, setError] = useState(null)

    const formulario = useRef(null)

    function validacion(formValues) {
        const {Nombre, Descripcion, Estado} = formValues 
        if (!Nombre.trim() && !Descripcion.trim()) {
            setError("Debe rellenar el formulario para poder enviarlo!")
            return
        }
        if (!Nombre.trim()) {
            setError("El nombre de la tarea no puede estar en blanco!")
            return
        } 
        if (!Descripcion.trim()) {
            setError("La descripcion de la tarea no puede estar en blanco!")
            return
        }
        setError("No hay errores - Enviando formulario...")
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(formulario.current)
        const ObjData = Object.fromEntries([...data.entries()])
        validacion(ObjData)
    }

    function FormCorrecto() {
        return (
            <p className='text-center m-4'> {pError} </p>
        )
    }
    function ErrorForm() {
        return (
            <p className='text-center m-4'>{pError}</p>
        )
    }

    return (
        <>
    
        <form onSubmit={handleSubmit} ref={formulario}>
            <input name="Nombre" placeholder="Nombre de la tarea" type="text" className='form-control mb-2' defaultValue="Tarea 1"/>
            <textarea name="Descripcion" placeholder="Introduce la descipcion de la tarea" className="form-control mb-2" defaultValue="Descripcion de la tarea" />
            <select name="Estado" className='form-control mb-2' defaultValue="Pendiente"> 
                <option value="pendiente">Pendiente</option>
                <option value="completada">Completada</option>
            </select>
            <button type='submit' className='btn btn-primary'>Añadir</button>
        </form>
        
        {
            pError? (<ErrorForm />) : <FormCorrecto />
        }
        
        </>
    )
}

export default FormNoControlado
