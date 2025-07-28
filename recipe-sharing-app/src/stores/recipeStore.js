import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => set((state) => {
    const filtered = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes: filtered };
  }),
  addRecipe: (recipe) => set((state) => {
    const updatedRecipes = [...state.recipes, recipe];
    const filtered = updatedRecipes.filter(r =>
      r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    );
    return { recipes: updatedRecipes, filteredRecipes: filtered };
  }),
})); 
