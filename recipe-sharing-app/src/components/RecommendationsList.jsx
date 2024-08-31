// RecommendationsList.jsx
import { useRecipeStore } from '../recipeStore';
import { useEffect } from 'react';

const RecommendationsList = () => {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

    useEffect(() => {
        generateRecommendations(); // Generate recommendations when the component mounts
    }, [generateRecommendations]);

    return (
        <div>
            <h2>Recommended Recipes</h2>
            {recommendations.length === 0 ? (
                <p>No recommendations available.</p>
            ) : (
                recommendations.map((recipe) => (
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default RecommendationsList;
