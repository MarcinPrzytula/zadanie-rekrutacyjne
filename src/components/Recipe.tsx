import React, { Dispatch, SetStateAction, useState } from 'react';
import EditRecipe from './EditRecipe';

import { faEdit, faTrashCan } from '@fortawesome/free-solid-svg-icons';

import '../styles/Recipe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface RecipeInterface {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
}
interface Props {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
  recipeList: RecipeInterface[];
  setRecipeList: any;
}
const Recipe = ({
  id,
  title,
  description,
  dateAdded,
  setRecipeList,
  recipeList,
}: Props) => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <>
      <div className="recipe">
        <div className="recipe__content-container">
          <div className="recipe__title">
            <span>{title}</span>
          </div>
          <div className="recipe__data">
            Added: <span>{dateAdded}</span>
          </div>
          <div className="recipe__description">{description}</div>
        </div>
        <div className="recipe__buttons-container">
          <button
            className="recipe__button recipe__button--delete"
            onClick={() => {
              const filterList = recipeList.filter(
                (item: any) => item.id !== id
              );
              setRecipeList(filterList);
              window.localStorage.setItem(
                'recipeList',
                JSON.stringify(filterList)
              );
            }}
          >
            <FontAwesomeIcon icon={faTrashCan} />
          </button>

          <button
            className="recipe__button recipe__button--edit"
            onClick={() => {
              setShowEditModal(true);
            }}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        </div>
        <EditRecipe
          showEditModal={showEditModal}
          setShowEditModal={setShowEditModal}
          setRecipeList={setRecipeList}
          recipeList={recipeList}
          recipeId={id}
        />
      </div>
    </>
  );
};

export default Recipe;
