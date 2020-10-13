import React from 'react';
import './Recipe.css'

const Recipe = ({ title, calories, image, ingredients, url, categories }) => {
    // round down calorie total
    const cal = Math.floor(calories)

    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt={title} />
            <h2>Categories</h2>
            {categories.map(cat => <p>{cat}</p>)}
            <p>Calories: {cal}</p>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.text}>{ingredient.text}</li>)}
            </ul>
            <a className="recipe-link" href={url}>Click Here for the full recipe</a>

        </div>
    )
}

export default Recipe;