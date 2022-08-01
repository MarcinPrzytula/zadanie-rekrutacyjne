import { useState, useEffect } from 'react';

import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import './styles/App.scss';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const localStorage = window.localStorage.getItem('recipeList');
    if (typeof localStorage === 'string') {
      setRecipeList(JSON.parse(localStorage));
    }
  }, []);

  return (
    <div className="app">
      <AddRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
      <RecipeList setRecipeList={setRecipeList} recipeList={recipeList} />
    </div>
  );
}

export default App;
