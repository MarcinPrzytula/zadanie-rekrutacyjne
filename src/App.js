import React, { useState, useEffect } from 'react';

import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import './styles/App.scss';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  return (
    <>
      <div>Recipe List</div>
      <div>You have added {recipeList.length} recipes</div>
      <AddRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
      <RecipeList setRecipeList={setRecipeList} recipeList={recipeList} />
    </>
  );
}

export default App;
