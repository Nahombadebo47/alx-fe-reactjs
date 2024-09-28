// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/data.json'); // Adjust if necessary
        const data = await response.json();
        setRecipes(data);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Recipe Sharing Platform</h1>
      <Link to="/add-recipe" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4 inline-block">Add New Recipe</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold">{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="w-full h-auto my-2 rounded-md" />
            <p>{recipe.summary}</p>
            <Link to={`/recipe/${recipe.id}`} className="text-blue-500 hover:underline">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
