// App.jsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './RecipeList';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <h1>Recipe App</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
