import React, { useState } from 'react';
import { Modal } from 'flowbite-react';
import RecipeCard from './RecipeCard';
import Button from './Button'


const RecipeDisplayComponents = ({ recipeData }) => {

    const [openModal, setOpenModal] = useState(false);
    const [ingrediantsList, setIngrediantsList] = useState([]);

    return (
        <div className='flex flex-wrap gap-10 justify-evenly p-3'>
            {recipeData.map((item, index) => (
                <RecipeCard
                    key={index}
                    imgURL={item.recipe.image}
                    recipeTitle={item.recipe.label}
                    completeRecipeUrlHandler={() => window.open(item.recipe.url)}
                    ingrediantHandler={() => {
                        setOpenModal(true)
                        setIngrediantsList(item.recipe.ingredients)
                    }}
                />
            ))}


            <Modal dismissible show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>Ingrediants List</Modal.Header>
                <Modal.Body>
                    <div className=''>

                        <table className=' min-w-full'>
                            <thead className='bg-zinc-100'>
                                <tr className='p-2'>

                                    <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">Ingrediants</th>
                                    <th scope="col" className="px-6 py-3 text-start font-medium text-gray-500 uppercase">Weight(g)</th>

                                </tr>
                            </thead>
                            <tbody className='p-2'>
                                {ingrediantsList.map((ingrediants, index) => (
                                    <tr key={index} className='odd:bg-white even:bg-zinc-50 dark:odd:bg-slate-900 dark:even:bg-slate-800'>
                                        <td className='px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>{ingrediants.text}</td>
                                        <td className='px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200'>{Math.round(ingrediants.weight * 100, 2) / 100}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                </Modal.Body>
                <Modal.Footer className='justify-end'>
                    <Button className="px-5 py-1 bg-teal-900 text-white rounded-lg hover:bg-teal-950" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default RecipeDisplayComponents;
