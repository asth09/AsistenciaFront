import React from 'react'

function Login() {
  return (
    <div> 
        <form onSubmit={onSubmit}> 
            <input type="text" {...register("usuario", { required: true })} placeholder="Usuario"/>
            <input type="password" {...register("password", { required: true })} placeholder="Contraseña"/>
            <button type="submit">Iniciar sesion</button>
        </form>
        [register]
        <form onSubmit={handleSubmit(async (values) => { 
            signup(values);
            })}> 
            <input type="text" {...register("usuario", { required: true })} placeholder="Usuario"/>
            <input type="password" {...register("password", { required: true })} placeholder="Contraseña"/>
            <select {...register("role", { required: true })}>
                <option value="">Selecciona un rol</option>
                <option value="docente">Docente</option>
                <option value="obrero">Empleado</option>
            </select>
            <button type="submit">Registro</button>
        </form>
    </div>
  )
}

export default Login