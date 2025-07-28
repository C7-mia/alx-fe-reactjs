import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((state) => state.searchTerm); // Controlled input
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)} // This triggers filterRecipes inside the store
      style={{
        width: '100%',
        padding: '10px',
        marginBottom: '20px',
        fontSize: '16px',
      }}
    />
  );
};

export default SearchBar;
