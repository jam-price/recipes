import React from 'react';
import './Recipe.css'

const Recipe = ({ title, calories, image, ingredients, url, categories }) => {
    // round down calorie total
    const cal = Math.floor(calories)

    if(title) {
    return (
        <div className="recipe">
            <h1>{title}</h1>
            <img className="image" src={image} alt={title} />
            <h2>Categories</h2>
            {categories.map(cat => <p>{cat}</p>)}
            <p><span className="calories">Total Recipe Calories:</span> {cal}</p>
            <h2 className="ingredient">Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.text}>{ingredient.text}</li>)}
            </ul>
            <button className="recipe-link" href={url}>Click Here for the full recipe</button>

        </div>
    ) } else {
        return (
            <div className="recipe">
            <h1>Your Recipe</h1>
            <h2>Categories</h2>
            <p>Your Recipe Categories</p>
            <h2 className="ingredient">Ingredients</h2>
            <ul>
                <li>Your</li>
                <li>Recipe</li>
                <li>Ingredients</li>
                <li>Listed</li>
                <li>Here</li>
            </ul>
            <button className="recipe-link">Click Here for the full recipe</button>

        </div>
        )
    }
}

export default Recipe;