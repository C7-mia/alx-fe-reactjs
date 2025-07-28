import React from 'react';
import { BrowserRouter as Router, Routes, Route, useParams } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails'; // Optional: make sure this file exists

// Wrapper for dynamic route (used only if RecipeDetails.jsx exists)
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

const App = () => {
  return (
    <Router>
      <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar />
                <AddRecipeForm />
                <RecipeList />
              </>
            }
          />
          <Route
            path="/recipes/:id"
            element={<RecipeDetailsWrapper />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
