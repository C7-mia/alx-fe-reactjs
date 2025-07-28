import React from 'react';
import { useRecipeStore } from './recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes); // 

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterRecipes(); // 
  };

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={handleSearch}
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
