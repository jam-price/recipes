import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "87acb045";
  const APP_KEY = "b716b80f3a3b8bd8ef8d00f3ef57de54";

  

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('')

  const reqURL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

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

  const loadingDiv = query === '' ? <p>this</p> : <p></p>

  return (
    <div className="App">
    {/* When loading horizontally centre div, move to top when loaded*/}
      <div className={query === '' ? 'div-down' : null }>
        <h1 className='title'>Find your perfect Recipe</h1>
        <form onSubmit={getSearch} className="search-form">
          <input type="text" className="search-bar" placeholder="What do you want to eat?" value={search} onChange={updateSearch}/>
          <button className="search-button" type="submit">Search</button>
        </form>
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
