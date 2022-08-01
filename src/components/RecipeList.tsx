import { Dispatch, SetStateAction } from 'react';
import Recipe from './Recipe';

interface RecipeInterface {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
}
interface Props {
  recipeList: RecipeInterface[];
  setRecipeList: any;
}

const RecipeList = ({ recipeList, setRecipeList }: Props) => {
  const recipeListRender = recipeList.map(
    ({ id, title, description, dateAdded }: RecipeInterface) => {
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

  return <div className="recipeList"> {recipeListRender}</div>;
};

export default RecipeList;
