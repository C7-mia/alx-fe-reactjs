import { useRecipeStore } from '../stores/recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.length === 0 ? (
        <p>No recipes yet.</p>
      ) : (
        <ul>
          {recipes.map((recipe) => (
            <li key={recipe.id}>
              <Link to={\`/recipes/\${recipe.id}\`}>
                {recipe.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RecipeList;
