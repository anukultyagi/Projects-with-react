import Header from './components/Header'
import 'primeicons/primeicons.css';
import RecipeDisplayComponents from './components/RecipeDisplayComponents';
import { useEffect, useState } from 'react';
import axios from 'axios'



const App = () => {

  const apiId = import.meta.env.VITE_API_ID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [recipeData, setRecipeData] = useState([])
  const [searchQuery, setSearchQuery] = useState("biryani")

  useEffect(
    () => {
      const fetchData = async () => {
        try {
          // Make the API call using Axios
          const response = await axios.get(`https://api.edamam.com/search?q=${searchQuery}&app_id=${apiId}&app_key=${apiKey}`)
          // Handle the response data here
          setRecipeData(response.data.hits)
        } catch (error) {
          // Handle any errors that occur during the API call
          console.error('Error fetching data:', error);
        }
      };
      fetchData()
    },
    [searchQuery]
  )
  const searchQueryHandle = (e) => {
    setSearchQuery(e)
  }

  return (
    <>
      <div className='main  w-full bg-slate-700 '>
        <Header
          onSearch={searchQueryHandle}
        />
        <RecipeDisplayComponents
          recipeData={recipeData}
        />
      </div>
    </>
  )
}

export default App