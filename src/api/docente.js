import axios from "./axios";

export const getDocentesRequest = async () => axios.get(`/docente`);

export const createDocenteRequest = async (docente) => axios.post(`/docente`, docente);

export const updateDocenteRequest = async (id, docente) =>
  axios.put(`/docente/${id}`, docente);

export const deleteDocenteRequest = async (id) => axios.delete(`/docente/${id}`);

export const getDocenteRequest = async (id) => axios.get(`/docente/${id}`);