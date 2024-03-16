
import burgerLogo from '../assets'
import Button from './Button'

const RecipeCard = (props) => {

    const ingrediantHandler = () => {

    }

    return (
        <>
            <div className='w-80 p-3 flex flex-col gap-3 border rounded-lg bg-white shadow-sm'>
                <div className='text-center flex justify-center h-40'>
                    <img className='w-full rounded' src={props.imgURL ? props.imgURL : burgerLogo} alt='brandlogo' />
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='font-medium text-xl'>{props.recipeTitle ? props.recipeTitle : 'Matar Paneer'}</p>
                    <Button
                        className='border-teal-500 text-teal-500 w-full hover:bg-teal-500 hover:text-white'
                        onclick={ingrediantHandler}
                    >Ingrediants</Button>
                    <Button
                        className='border-red-500 text-red-500 w-full hover:bg-red-500 hover:text-white'
                        onclick={ingrediantHandler}
                    >See Complete Recipe</Button>
                </div>
            </div>
        </>
    )
}

export default RecipeCard