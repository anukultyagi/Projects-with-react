import Header from './components/Header'
import 'primeicons/primeicons.css';
import RecipeDisplayComponents from './components/RecipeDisplayComponents';
import { useEffect, useState } from 'react';
import axios from 'axios'
import { Button } from 'flowbite-react';
import RecipeLoader from './components/RecipeLoader';



const App = () => {

  const apiId = import.meta.env.VITE_API_ID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [recipeData, setRecipeData] = useState([])
  const [searchQuery, setSearchQuery] = useState("biryani")



  const searchQueryHandle = (e) => {
    setSearchQuery(e)
  }

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          // Make the API call using Axios
          const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}`)
          // Handle the response data here
          setRecipeData(response.data.hits)
          console.log(response.data)
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error('Error fetching data:', error);
        }
      };
      fetchData()
    },
    [searchQuery]
  )

  return (
    <>
      <div className='main w-full '>
        <Header
          onSearch={searchQueryHandle}
        />
        {recipeData.length > 0 ? <RecipeDisplayComponents
          recipeData={recipeData}
        /> : <RecipeLoader />

        }


      </div>
    </>
  )
}

export default App