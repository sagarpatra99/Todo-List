export default function Header() {
  return (
    <>
      <h1 className="text-4xl text-center pt-4 font-semibold">Todo List App</h1>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl text-center py-4">
          Welcome to the Todo List App
        </h2>
        <p className="text-center">
          This is a simple application to manage your tasks.
        </p>
        <p className="text-center">
          Feel free to add, edit, and delete your todos.
        </p>
        <p className="text-center">Enjoy!</p>
      </div>
    </>
  );
}
