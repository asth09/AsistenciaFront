import axios from "./axios";

export const getEmpleadosRequest = async () => axios.get(`/empleado`);

export const createEmpleadoRequest = async (empleado) => axios.post(`/empleado`, empleado);

export const updateEmpleadoRequest = async (id, empleado) =>
  axios.put(`/empleado/${id}`, empleado);

export const deleteEmpleadoRequest = async (id) => axios.delete(`/empleado/${id}`);

export const getEmpleadoRequest = async (id) => axios.get(`/empleado/${id}`);