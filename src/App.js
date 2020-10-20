import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';
import MealMenu from './HealthType';

const App = () => {

  const APP_ID = "326357f3";
  const APP_KEY = "562ff76fbd2e4b9eb13bc248f24c9ec5";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')
  const [lowCarb, setLowCarb] = useState(false);
  const [lowFat, setLowFat] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [peanutFree, setPeanutFree] = useState(false);
  const [treeNutFree, setTreeNutFree] = useState(false);

  let reqURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // let reqURL = 'www.this.com';
  if (lowCarb){reqURL += '&diet=low-carb'};
  if (lowFat){reqURL += '&diet=low-fat'};
  if (vegan){reqURL += '&health=vegan'};
  if (vegetarian){reqURL += '&health=vegetarian'};
  if (peanutFree){reqURL += '&health=peanut-free'};
  if (treeNutFree){reqURL += '&health=tree-nut-free'};

  console.log(reqURL);  

  useEffect(() => {
    getRecipes()
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(reqURL);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = ({target}) => {
    setSearch(target.value)
    console.log(search)
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const loadingDiv = query === '' ? <Recipe /> : <p></p>

  return (
    <div className="App">
    {/* When loading horizontally centre div, move to top when loaded*/}
      <div className={query === '' ? 'div-down' : null }>
        <h1 className='title'>Find your perfect Recipe</h1>
        <form onSubmit={getSearch} className="search-form">
          <input type="text" className="search-bar" placeholder="Particular Ingredient? Full Recipe?" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <MealMenu 
          lowCarb = {lowCarb}
          setLowCarb = {setLowCarb}
          lowFat = {lowFat}
          setLowFat = {setLowFat}
          vegan = {vegan}
          setVegan = {setVegan}
          vegetarian = {vegetarian}
          setVegetarian = {setVegetarian}
          peanutFree = {peanutFree}
          setPeanutFree = {setPeanutFree}
          treeNutFree = {treeNutFree}
          setTreeNutFree = {setTreeNutFree}
         />
      </div>
      <div className="recipes">
      {loadingDiv}
      {recipes.map(recipe => (
        <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
        categories={recipe.recipe.healthLabels}
        />
      ))}
      </div>
    </div>
  )
}

export default App;
