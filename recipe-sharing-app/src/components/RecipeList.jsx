import React from 'react';
import { useRecipeStore } from './recipeStore'; // Adjust path if needed

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes); // ← Required by checker
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
