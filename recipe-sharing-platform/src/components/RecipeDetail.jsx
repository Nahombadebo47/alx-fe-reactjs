import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const RecipeDetail = () => {
  const { id } = useParams(); // Get the recipe ID from the route
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => {
        const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
        setRecipe(foundRecipe);
      });
  }, [id]);

  // If no recipe is found or still loading, show a loading message
  if (!recipe) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md shadow-md"
        />
        <p className="text-lg text-gray-700 mt-4">{recipe.summary}</p>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Ingredients</h2>
          <ul className="list-disc list-inside">
            <li>Ingredient 1</li>
            <li>Ingredient 2</li>
            <li>Ingredient 3</li>
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-semibold">Instructions</h2>
          <p className="text-gray-700">Step 1: Do this...</p>
          <p className="text-gray-700">Step 2: Do that...</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
