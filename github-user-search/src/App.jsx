import React from 'react';
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center pt-8 mb-4">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;

