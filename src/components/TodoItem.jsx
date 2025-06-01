export default function TodoItem({ item, onToggle, onDelete, onEdit }) {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onToggle(item.id)}
          className="mr-2"
        />
        <span
          className={`text-lg ${item.completed ? "line-through" : ""}`}
          onClick={() => onEdit(item.id)}
        >
          {item.text}
        </span>
      </div>
      <div className="space-x-8">
        <button
          onClick={() => onEdit(item.id)}
          className="text-blue-500 hover:text-blue-700 cursor-pointer"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="text-red-500 hover:text-red-700 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
