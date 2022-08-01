import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/AddRecipe.scss';

interface Props {
  recipeList: any;
  setRecipeList: any;
}
const AddRecipe = ({ recipeList, setRecipeList }: Props) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const recipe = {
    title: title,
    description: description,
    id: uuidv4(),
    dateAdded: new Date().toUTCString(),
  };

  return (
    <div className="addRecipte">
      <div className="addRecipte__title">Recipe List</div>
      <form className="addRecipte__form">
        <input
          className="addRecipte__input"
          value={title}
          onChange={e => {
            setTitle(e.currentTarget.value);
          }}
          type="text"
          placeholder="Enter the title "
        />
        <textarea
          className="addRecipte__input addRecipte__input--textarea"
          value={description}
          onChange={e => {
            setDescription(e.currentTarget.value);
          }}
          placeholder="Enter the description "
        />

        <button
          className="addRecipte__button"
          onClick={e => {
            e.preventDefault();
            if (description.length > 0 && title.length > 0) {
              setRecipeList([...recipeList, recipe]);
              window.localStorage.setItem(
                'recipeList',
                JSON.stringify([...recipeList, recipe])
              );
              setDescription('');
              setTitle('');
            }
          }}
        >
          ADD
        </button>
      </form>
      <div className="addRecipte__counter">
        You have added {recipeList ? recipeList.length : 0} recipes
      </div>
    </div>
  );
};
export default AddRecipe;
