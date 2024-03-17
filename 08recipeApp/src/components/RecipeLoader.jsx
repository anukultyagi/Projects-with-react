import React from 'react'
import burgerLogo from '../assets'

const RecipeLoader = () => {
    return (
        <>
            <div className='h-1/2 flex items-center justify-center'>
                <div className='relative top-2/4'>
                    <img className='w-auto grayscale' src={burgerLogo} alt='brand-logo' />
                </div>
            </div>
        </>
    )
}

export default RecipeLoader