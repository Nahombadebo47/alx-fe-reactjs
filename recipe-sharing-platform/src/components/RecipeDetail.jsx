// src/components/RecipeDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '/public/data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const recipe = recipeData.find((recipe) => recipe.id === parseInt(id));

  if (!recipe) {
    return <p>Recipe not found.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-auto mb-4 rounded-md" />
      <h3 className="font-semibold">Ingredients:</h3>
      <ul className="list-disc list-inside mb-4">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3 className="font-semibold">Instructions:</h3>
      <ol className="list-decimal list-inside">
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
      <Link to="/" className="text-blue-500 hover:underline block mt-4">Back to Home</Link>
    </div>
  );
};

export default RecipeDetail;
