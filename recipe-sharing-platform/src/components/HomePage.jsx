import { useState, useEffect } from 'react';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Fetching the data from the data.json file
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="bg-white shadow-lg p-4 rounded-lg">
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover rounded" />
            <h2 className="text-xl font-bold mt-4">{recipe.title}</h2>
            <p className="text-gray-700 hover:">{recipe.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
