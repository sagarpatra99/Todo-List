import { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const handleAdd = () => {
    if (input.trim() === "") return;

    if (isEditing) {
      setTodos(
        todos.map((todo) =>
          todo.id === editId ? { ...todo, text: input } : todo
        )
      );
      setIsEditing(false);
      setEditId(null);
    } else {
      const newTodo = {
        id: todos.length,
        text: input,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }
    setInput("");
  };
  const handleEdit = (id) => {
    const todoToEdit = todos.find((todo) => todo.id === id);
    setInput(todoToEdit.text);
    setIsEditing(true);
    setEditId(id);
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <>
      <Header />
      <div>
        <div className="flex mt-4 gap-2 w-full px-[30vw]">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 p-2 border border-gray-300 rounded"
          />
          <button
            onClick={handleAdd}
            className={`text-white px-4 py-2 rounded cursor-pointer ${isEditing ? "bg-blue-500 hover:bg-blue-600" : "bg-green-500 hover:bg-green-600"}`}
          >
            {isEditing ? "Update" : "Add"}
          </button>
        </div>

        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </div>
    </>
  );
}
