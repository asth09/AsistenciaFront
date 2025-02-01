import { createContext, useContext, useState } from "react";
import {
  createDocenteRequest,
  deleteDocenteRequest,
  getDocentesRequest,
  getDocenteRequest,
  updateDocenteRequest,
} from "../api/docente";

const DocenteContext = createContext();

export const useDocentes = () => {
  const context = useContext(DocenteContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function DocenteProvider({ children }) {
  const [docentes, setDocentes] = useState([]);

  const getDocentes = async () => {
    try {
      const res = await getDocentesRequest();
      setDocentes(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteDocente = async (id) => {
    try {
      const res = await deleteDocenteRequest(id);
      if (res.status === 204) setDocentes(docentes.filter((docente) => docente._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createDocente = async (docente) => {
    try {
      const res = await createDocenteRequest(docente);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getDocente = async (id) => {
    try {
      const res = await getDocenteRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateDocente = async (id, docente) => {
    try {
      await updateDocenteRequest(id, docente);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DocenteContext.Provider
      value={{
        docentes,
        getDocentes,
        deleteDocente,
        createDocente,
        getDocente,
        updateDocente,
      }}
    >
      {children}
    </DocenteContext.Provider>
  );
}