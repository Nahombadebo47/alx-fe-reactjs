// App.jsx
import './App.css';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm'; // Corrected import

function App() {
  return (
    <div>
      <RecipeList />
      <AddRecipeForm />
    </div>
  );
}

export default App;
