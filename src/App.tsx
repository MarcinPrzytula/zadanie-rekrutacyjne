import { useState, useEffect } from 'react';

import AddRecipe from './components/AddRecipe';
import RecipeList from './components/RecipeList';

import './styles/App.scss';

interface RecipeInterface {
  id: string;
  title: string;
  description: string;
  dateAdded: string;
}

function App() {
  const [recipeList, setRecipeList] = useState<RecipeInterface[]>([
    {
      title: ' Traditional cheesecake',
      dateAdded: 'Mon, 01 Aug 2022 14:58:19 GMT',
      description:
        'INGREDIENTS\n1 kg of ground curd\n250 g of soft butter\n1 and 1/3 of the building\n6 eggs\n1 packet of vanilla sugar\n150 ml cream 36%\n4 tablespoons of potato flour',
      id: 'a7100b1a-397f-4770-9b8e-2e9ee801904a',
    },
    {
      title: 'Fried egg',
      dateAdded: 'Mon, 01 Aug 2022 15:19:18 GMT',
      description:
        'Ingredients:\n2 medium eggs\n2 teaspoons of clarified butter\npinch of salt',
      id: '2d39c590-6757-495f-9f48-224a0f3309c5',
    },
  ]);

  useEffect(() => {
    const localStorage = window.localStorage.getItem('recipeList');

    if (typeof localStorage === 'string') {
      const parse = JSON.parse(localStorage);
      if (parse.length > 0) {
        setRecipeList(parse);
      }
    }
  }, []);

  return (
    <div className="app">
      <AddRecipe setRecipeList={setRecipeList} recipeList={recipeList} />
      <RecipeList setRecipeList={setRecipeList} recipeList={recipeList} />
    </div>
  );
}

export default App;
