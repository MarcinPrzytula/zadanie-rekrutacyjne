import React, { useState, useEffect } from 'react';

import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import './styles/App.scss';

function App() {
  const [recipeList, setRecipeList] = useState([]);

  useEffect(() => {
    const localStorage = JSON.parse(window.localStorage.getItem('recipeList'));
    setRecipeList(localStorage);
  }, []);

  useEffect(() => {
    window.localStorage.setItem('recipeList', JSON.stringify(recipeList));
  }, [recipeList]);

  return (
    <>
      <div>Recipe List</div>
      <div>You have added {recipeList ? recipeList.length : 0} recipes</div>
      <AddRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
      <RecipeList setRecipeList={setRecipeList} recipeList={recipeList} />
    </>
  );
}

export default App;
