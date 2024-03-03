import React from 'react'

const App = () => {
  const itemData = ["Banana", "Apple", "Pineapple", "Mango", "Orange", "Watermelon"]
  const [searchQuery, setSearchQuery] = React.useState("")


  const inputHandle = (e) => {
    setSearchQuery(e.target.value)

  }

  return (
    <>
      <div className='main p-4 h-screen w-full bg-zinc-500'>
        <div className='card rounded border bg-white w-fit mx-auto p-3'>
          <div className='flex gap-5 items-center'>
            <label htmlFor='searchInput' className=''>Search:</label>
            <input
              id='searchInput'
              type='text'
              className='px-2 py-1 border rounded'
              value={searchQuery}
              onChange={inputHandle}
            />
          </div>
          <div className='mt-3'>
            <ul>
              {itemData.filter((item) => item === "" || item.toLowerCase().includes(searchQuery.toLowerCase()))
                .slice(0, 10)
                .map((item, i) => <li key={i} className='p-2 hover:bg-slate-100'>{item}</li>)}

            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App