export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <span
        onClick={() => onToggle(todo._id)}
        style={{
          cursor: "pointer",
          textDecoration: todo.completed ? "line-through" : "none",
        }}
      >
        {todo.title}
      </span>

      <button onClick={() => onDelete(todo._id)}>❌</button>
    </div>
  );
}
