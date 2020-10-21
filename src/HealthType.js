import React from 'react';
import './HealthType.css';

const HealthType = (props) => {
    return(
        <div>
            <form className="health-form">
            <div className="checkbox">
                    <label>
                        <input 
                        type="checkbox" 
                        value="low-carb" 
                        checked={props.lowCarb === true} 
                        onChange={props.lowCarb === true ? () => props.setLowCarb(false) : () => props.setLowCarb(true)} 
                        />
                        Low-Carb
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="low-fat" 
                        checked={props.lowFat === true} 
                        onChange={props.lowFat === true ? () => props.setLowFat(false) : () => props.setLowFat(true)}
                        />
                        Low-Fat
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="vegan"
                        checked={props.vegan === true} 
                        onChange={props.vegan === true ? () => props.setVegan(false) : () => props.setVegan(true)}
                         />
                        Vegan
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="vegetarian"
                        checked={props.vegetarian === true} 
                        onChange={props.vegetarian === true ? () => props.setVegetarian(false) : () => props.setVegetarian(true)}    
                        />
                        Vegetarian
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="peanut-free" 
                        checked={props.peanutFree === true} 
                        onChange={props.peanutFree === true ? () => props.setPeanutFree(false) : () => props.setPeanutFree(true)}
                        />
                        Peanut-Free
                    </label>
                </div>
                <div className="checkbox">
                    <label>
                        <input type="checkbox" 
                        value="tree-nut-free" 
                        checked={props.treeNutFree === true} 
                        onChange={props.treeNutFree === true ? () => props.setTreeNutFree(false) : () => props.setTreeNutFree(true)}
                        />
                        Tree-nut-Free
                    </label>
                </div>
                
            </form>
        </div>
    )

}

export default HealthType