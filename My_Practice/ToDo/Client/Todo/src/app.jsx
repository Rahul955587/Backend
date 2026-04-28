import { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import {
  getTodos,
  createTodo,
  toggleTodo,
  deleteTodo,
} from "./services/todoService";

export default function App() {
  const [todos, setTodos] = useState([]);

  // Load todos
  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const data = await getTodos();
    setTodos(data);
  };

  const handleAdd = async (title) => {
    const newTodo = await createTodo(title);
    setTodos([newTodo, ...todos]);
  };

  const handleToggle = async (id) => {
    const updated = await toggleTodo(id);
    setTodos(todos.map((t) => (t._id === id ? updated : t)));
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((t) => t._id !== id));
  };

  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>🔥 Todo App</h2>

      <TodoForm onAdd={handleAdd} />

      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onToggle={handleToggle}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}
