import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import SearchBar from './components/SearchBar';
import RecipeDetails from './components/RecipeDetails'; // Optional if implemented

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

// Optional: Wrapper for route with dynamic ID (if RecipeDetails is implemented)
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
