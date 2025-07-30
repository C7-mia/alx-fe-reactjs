toimport create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),

  addRecipe: (newRecipe) =>
    set(state => ({
      recipes: [...state.recipes, newRecipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set(state => ({
      recipes: state.recipes.map(recipe =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  deleteRecipe: (id) =>
    set(state => ({
      recipes: state.recipes.filter(recipe => recipe.id !== id),
    })),

  addFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.includes(id)
        ? state.favorites
        : [...state.favorites, id],
    })),

  removeFavorite: (id) =>
    set(state => ({
      favorites: state.favorites.filter(favId => favId !== id),
    })),
setRecipes 
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        r => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
