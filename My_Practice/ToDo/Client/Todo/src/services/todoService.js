import axios from "axios";

const API = "http://localhost:5000/api/todos";

export const getTodos = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const createTodo = async (title) => {
  const res = await axios.post(API, { title });
  return res.data;
};

export const toggleTodo = async (id) => {
  const res = await axios.put(`${API}/${id}`);
  return res.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API}/${id}`);
};
