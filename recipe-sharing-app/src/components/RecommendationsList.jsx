import React from 'react';
import { useRecipeStore } from './recipeStore';

export function RecommendationsList() {
  const recommendations = useRecipeStore(state => state.recommendations);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  React.useEffect(() => {
    generateRecommendations();
  }, [generateRecommendations]);

  if (!recommendations.length) return <p>No recommendations yet.</p>;

  return (
    <div>
      <h2>Recommended Recipes</h2>
      {recommendations.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
}
