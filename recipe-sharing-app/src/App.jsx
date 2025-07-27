import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <Routes>
          <Route path="/" element={
            <>
              <AddRecipeForm />
              <RecipeList />
            </>
          } />
          <Route path="/recipes/:id" element={<RecipeDetailsWrapper />} />
        </Routes>
      </div>
    </Router>
  );
};

// Wrapper to extract ID from URL and pass to RecipeDetails
import { useParams } from 'react-router-dom';
const RecipeDetailsWrapper = () => {
  const { id } = useParams();
  return <RecipeDetails recipeId={parseInt(id)} />;
};

export default App;
