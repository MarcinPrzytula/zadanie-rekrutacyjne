import { Dispatch, SetStateAction, useState } from 'react';
import Modal from 'react-modal';
import { RecipeInterface } from '../interface';
import '../styles/EditRecipe.scss';

interface Props {
  showEditModal: boolean;
  setShowEditModal: Dispatch<SetStateAction<boolean>>;
  recipeId: string;
  recipeList: RecipeInterface[];
  setRecipeList: Dispatch<SetStateAction<RecipeInterface[]>>;
}

const EditRecipe = ({
  showEditModal,
  setShowEditModal,
  recipeId,
  recipeList,
  setRecipeList,
}: Props) => {
  const [editedRecite] = useState(
    recipeList.find(item => item.id === recipeId)
  );

  const [description, setDescription] = useState(
    editedRecite?.description || ''
  );

  const [title, setTitle] = useState(editedRecite?.title || '');

  const editRecipe = () => {
    const editedRecipeList = recipeList.map(currentStateElement => {
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
    });
    setRecipeList(editedRecipeList);
    window.localStorage.setItem('recipeList', JSON.stringify(editedRecipeList));
  };

  return (
    <Modal
      ariaHideApp={false}
      className="editRecipeModal"
      isOpen={showEditModal}
    >
      <button
        className="editRecipeModal__button"
        onClick={() => setShowEditModal(false)}
      >
        X
      </button>

      <form className="editRecipeForm">
        <input
          className="editRecipeForm__input"
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
          type="text"
          placeholder="Enter the title "
        />
        <textarea
          className="editRecipeForm__input editRecipeForm__input--textarea"
          value={description}
          onChange={e => {
            setDescription(e.currentTarget.value);
          }}
          placeholder="Enter the description "
        />

        <button
          className="editRecipeForm__button"
          onClick={e => {
            e.preventDefault();
            if (description.length > 0 && title.length > 0) {
              editRecipe();

              //   setDescription('');
              //   setTitle('');
              setShowEditModal(false);
            }
          }}
        >
          EDIT
        </button>
      </form>
    </Modal>
  );
};

export default EditRecipe;
