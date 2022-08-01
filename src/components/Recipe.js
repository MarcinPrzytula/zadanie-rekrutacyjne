import React, { useState } from 'react';
import EditRecipe from './EditRecipe';

import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import '../styles/Recipe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Recipe = props => {
  const { title, description, dateAdded, id } = props;
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div>
        <div>{title}</div>
        <div>{description}</div>
        <div>{dateAdded}</div>
        <button
          onClick={() => {
            props.setRecipeList(
              props.recipeList.filter(item => item.id !== id)
            );
          }}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>

        <button
          onClick={() => {
            setShowEditModal(true);
          }}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
        <EditRecipe
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          setRecipeList={props.setRecipeList}
          recipeList={props.recipeList}
          id={id}
        />
      </div>
    </>
  );
};

export default Recipe;
