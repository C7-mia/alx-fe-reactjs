import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import RecipeDetail from './components/RecipeDetail'; // new component

function App() {
  return (
    <Router>
      <div style={{ maxWidth: '600px', margin: 'auto', padding: '20px' }}>
        <h1>Recipe Sharing App</h1>
        <SearchBar />
        <AddRecipeForm />

        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipes/:id" element={<RecipeDetail />} /> {/* Add route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
