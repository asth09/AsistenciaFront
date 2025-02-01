import { createContext, useContext, useState } from "react";
import {
  createEmpleadoRequest,
  deleteEmpleadoRequest,
  getEmpleadosRequest,
  getEmpleadoRequest,
  updateEmpleadoRequest,
} from "../api/empleado";

const EmpleadoContext = createContext();

export const useEmpleados = () => {
  const context = useContext(EmpleadoContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function EmpleadoProvider({ children }) {
  const [empleados, setEmpleados] = useState([]);

  const getEmpleados = async () => {
    try {
      const res = await getEmpleadosRequest();
      setEmpleados(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteEmpleado = async (id) => {
    try {
      const res = await deleteEmpleadoRequest(id);
      if (res.status === 204) setEmpleados(empleados.filter((empleado) => empleado._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createEmpleado = async (Empleado) => {
    try {
      const res = await createEmpleadoRequest(Empleado);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getEmpleado = async (id) => {
    try {
      const res = await getEmpleadoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateEmpleado = async (id, Empleado) => {
    try {
      await updateEmpleadoRequest(id, Empleado);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <EmpleadoContext.Provider
      value={{
        empleados,
        getEmpleados,
        deleteEmpleado,
        createEmpleado,
        getEmpleado,
        updateEmpleado,
      }}
    >
      {children}
    </EmpleadoContext.Provider>
  );
}