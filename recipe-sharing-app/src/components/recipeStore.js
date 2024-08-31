// recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
    recipes: [],
    favorites: [],
    recommendations: [],

    addFavorite: (recipeId) => set((state) => ({
        favorites: [...state.favorites, recipeId],
    })),

    removeFavorite: (recipeId) => set((state) => ({
        favorites: state.favorites.filter((id) => id !== recipeId),
    })),

    generateRecommendations: () => set((state) => {
        // Example mock recommendation based on favorites
        const recommended = state.recipes.filter(
            (recipe) => state.favorites.includes(recipe.id) && Math.random() > 0.5
        );
        return { recommendations: recommended };
    }),

    addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
    updateRecipe: (updatedRecipe) =>
        set((state) => ({
            recipes: state.recipes.map((recipe) =>
                recipe.id === updatedRecipe.id ? updatedRecipe : recipe
            ),
        })),
    deleteRecipe: (id) =>
        set((state) => ({
            recipes: state.recipes.filter((recipe) => recipe.id !== id),
        })),
}));

export default useRecipeStore;
