import { Dispatch, SetStateAction } from 'react';

export interface RecipeInterface {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
}
export interface Props {
  recipeList: RecipeInterface[];
  setRecipeList: Dispatch<SetStateAction<RecipeInterface[]>>;
}
