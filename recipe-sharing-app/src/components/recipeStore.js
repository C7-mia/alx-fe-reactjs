import create from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],

  // Actions
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes(); // Automatically filter on search term change
  },

  addRecipe: (recipe) => {
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterByTerm(updatedRecipes, state.searchTerm),
      };
    });
  },

  deleteRecipe: (id) => {
    set((state) => {
      const updatedRecipes = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterByTerm(updatedRecipes, state.searchTerm),
      };
    });
  },

  updateRecipe: (updatedRecipe) => {
    set((state) => {
      const updatedRecipes = state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: get().filterByTerm(updatedRecipes, state.searchTerm),
      };
    });
  },

  filterByTerm: (recipes, term) => {
    return recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    set({
      filteredRecipes: recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    });
  },
}));

export { useRecipeStore };
