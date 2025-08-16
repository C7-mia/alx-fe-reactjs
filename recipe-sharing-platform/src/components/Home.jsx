import { useState, useEffect } from 'react';
import data from '../data.json';

export default function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {recipes.map(recipe => (
        <div key={recipe.id} className="border rounded-lg shadow hover:shadow-lg p-4 transition">
          <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
          <h2 className="text-xl font-semibold mt-2">{recipe.title}</h2>
          <p className="text-gray-600">{recipe.summary}</p>
        </div>
      ))}
    </div>
  );
          }
