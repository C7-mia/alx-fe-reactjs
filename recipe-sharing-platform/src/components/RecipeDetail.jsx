import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = data.find(item => item.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) return <p className="p-4">Recipe not found.</p>;

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white rounded-lg shadow">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Home</Link>
      <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4"/>
      
      {recipe.ingredients && (
        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1">
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {recipe.steps && (
        <div>
          <h2 className="text-2xl font-semibold mb-2">Cooking Instructions</h2>
          <ol className="list-decimal list-inside space-y-1">
            {recipe.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
                               }
