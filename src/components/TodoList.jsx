import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete, onEdit }) {
  return (
    <div className="container mx-auto px-[8vw]">
      <h2 className="text-2xl text-center py-4">Your Todos</h2>
      <div className="bg-white shadow-md rounded-lg p-4">
        {todos.length === 0 ? (
          <p className="text-center text-gray-500">No todos available</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              item={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </div>
  );
}