import React from 'react';
import { useRecipeStore } from './recipeStore';

export default function FavoritesList() {
  const favorites = useRecipeStore(state =>
    state.favorites
      .map(id => state.recipes.find(r => r.id === id))
      .filter(r => r)
  );
  const removeFavorite = useRecipeStore(state => state.removeFavorite);

  if (!favorites.length) return <p>No favorite recipes yet.</p>;

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <button onClick={() => removeFavorite(recipe.id)}>Unfavorite</button>
        </div>
      ))}
    </div>
  );
}
