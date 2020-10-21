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
            <p><span className="calories">Total Recipe Calories:</span> {cal}</p>
            <h2 className="ingredient">Ingredients</h2>
            <ul>
                {ingredients.map(ingredient => <li key={ingredient.index}>{ingredient.text}</li>)}
            </ul>
            <a className="recipe-link" target="_blank" rel='noreferrer noopener' href={url}>CLICK HERE FOR THE FULL RECIPE</a>

        </div>
    )
    //  } else {
    //     return (
    //         <div className="recipe">
    //         <h1>Your Recipe</h1>
    //         <h2>Categories</h2>
    //         <p>Your Recipe Categories</p>
    //         <h2 className="ingredient">Ingredients</h2>
    //         <ul>
    //             <li>Your</li>
    //             <li>Recipe</li>
    //             <li>Ingredients</li>
    //             <li>Listed</li>
    //             <li>Here</li>
    //         </ul>
    //         <button className="recipe-link">Click Here for the full recipe</button>

    //     </div>
    //     )
    // }
}

export default Recipe;