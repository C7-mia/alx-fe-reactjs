import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
      filteredRecipes: [...state.recipes, recipe].filter(r =>
        r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      )
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter(r =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const remaining = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: remaining,
        filteredRecipes: remaining.filter(r =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
      };
    }),

  setSearchTerm: (term) =>
    set((state) => ({
      searchTerm: term,
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(term.toLowerCase())
      ),
    })),
}));

export { useRecipeStore };
