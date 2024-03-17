
import burgerLogo from '../assets'
import Button from './Button'

const RecipeCard = (props) => {


    return (
        <>
            <div className='w-80 p-3 flex flex-col justify-between gap-3 border border-slate-300 rounded-lg bg-white shadow-sm'>
                <div className=''>
                    <img className='w-full rounded h-44 mb-4' src={props.imgURL ? props.imgURL : burgerLogo} alt='brandlogo' />
                    <p className='font-medium text-xl'>{props.recipeTitle ? props.recipeTitle : 'Matar Paneer'}</p>
                </div>
                <div className='flex flex-col gap-3'>

                    <Button
                        className='border-teal-500 text-teal-500 w-full hover:bg-teal-500 hover:text-white'
                        onClick={props.ingrediantHandler}
                    >Ingrediants</Button>
                    <Button
                        className='border-red-500 text-red-500 w-full hover:bg-red-500 hover:text-white'
                        onClick={props.completeRecipeUrlHandler}
                    >See Complete Recipe</Button>


                </div>
            </div>
        </>
    )
}

export default RecipeCard