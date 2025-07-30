import create from 'zustand';

export const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  recommendations: [],
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
  generateRecommendations: () =>
    set(state => {
      const recommended = state.recipes.filter(
        r => state.favorites.includes(r.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),
}));
