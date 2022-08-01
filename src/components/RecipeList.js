import React, { useState } from 'react';

import Recipe from './Recipe';

const RecipeList = ({ recipeList, setRecipeList }) => {
  console.log(recipeList);
  const recipeListRender = recipeList.map(
    ({ id, title, description, dateAdded }) => {
      return (
        <Recipe
          key={id}
          id={id}
          title={title}
          description={description}
          dateAdded={dateAdded}
          recipeList={recipeList}
          setRecipeList={setRecipeList}
        />
      );
    }
  );

  return <div> {recipeListRender}</div>;
};

export default RecipeList;
