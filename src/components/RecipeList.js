import React, { useState } from 'react';

import Recipe from './Recipe';

const RecipeList = props => {
  const recipeList = props.recipeList.map(
    ({ id, title, description, dateAdded }) => {
      return (
        <Recipe
          key={id}
          id={id}
          title={title}
          description={description}
          dateAdded={dateAdded}
          recipeList={props.recipeList}
          setRecipeList={props.setRecipeList}
        />
      );
    }
  );

  return <div> {recipeList}</div>;
};

export default RecipeList;
