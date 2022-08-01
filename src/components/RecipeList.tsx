import Recipe from './Recipe';
import { Props, RecipeInterface } from '../interface';

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
