import React, { useState } from 'react';
import Modal from 'react-modal';

const EditRecipe = ({
  showEditModal,
  setShowEditModal,
  recipeId,
  recipeList,
  setRecipeList,
}) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const editRecipe = () => {
    setRecipeList(
      recipeList.map(currentStateElement => {
        if (currentStateElement.id !== recipeId) {
          return currentStateElement;
        }

        const { id, dateAdded } = currentStateElement;

        return {
          title: title,
          description: description,
          id,
          dateAdded,
        };
      })
    );
  };

  return (
    <Modal ariaHideApp={false} className="modal" isOpen={showEditModal}>
      <button
        className="product__button product__button-right"
        onClick={() => setShowEditModal(false)}
      >
        X
      </button>
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
            editRecipe();
            setDescription('');
            setTitle('');
            setShowEditModal(false);
          }}
        >
          Edit
        </button>
      </form>
    </Modal>
  );
};

export default EditRecipe;
