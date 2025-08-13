function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <h1 className="font-bold text-xl">Recipe Sharing</h1>
      <div>
        <a href="/" className="px-3">Home</a>
        <a href="/add" className="px-3">Add Recipe</a>
      </div>
    </nav>
  );
}

export default Navbar;
