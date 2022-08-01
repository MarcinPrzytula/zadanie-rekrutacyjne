import React, { useState } from 'react';
import '../styles/AddRecipe.scss';
const AddRecipe = props => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const id = Math.random().toString(36).substr(2, 9);
  const date = new Date();

  const recipe = {
    title: title,
    description: description,
    id: id,
    dateAdded: date.toUTCString(),
  };

  return (
    <>
      <form className="addRecipeForm">
        <input
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
          type="text"
          placeholder="Enter the title "
        />
        <textarea
          value={description}
          onChange={e => {
            setDescription(e.currentTarget.value);
          }}
          placeholder="Enter the description "
        />

        <button
          onClick={e => {
            e.preventDefault();
            if (description.length > 0 && title.length > 0) {
              props.setRecipeList([...props.recipeList, recipe]);
              setDescription('');
              setTitle('');
            }
          }}
        >
          Add recipe
        </button>
      </form>
    </>
  );
};
export default AddRecipe;
