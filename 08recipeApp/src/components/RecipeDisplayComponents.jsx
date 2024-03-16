import React, { useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeDisplayComponents = ({ recipeData }) => {
    return (
        <div className='flex flex-wrap gap-10 justify-evenly p-3'>
            {recipeData.map((item, index) => (
                <RecipeCard
                    key={index}
                    imgURL={item.recipe.image}
                    recipeTitle={item.recipe.label}
                    completeRecipeUrlHandler={() => window.open(item.recipe.url)}
                    ingrediantHandler=''
                />
            ))}
        </div>
    );
};

export default RecipeDisplayComponents;
