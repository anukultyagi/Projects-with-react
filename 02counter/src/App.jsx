import React, { useState } from 'react'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ReplayIcon from '@mui/icons-material/Replay';

const App = () => {
  const [count, setCount] = useState(0)
  const [error, setError] = useState("")

  const addBtnHandler = () => {
    setCount(count + 1)
    setError("")
  }
  const reloadBtnHandler = () => {
    setCount(0)
    setError("")
  }
  const reduceBtnHandler = () => {
    if (count > 0) {
      setCount(count - 1);
    } else if (count === 0) {
      setError("Value can't be negative")
    }
  }

  return (
    <>
      <div className='main h-screen w-full bg-zinc-500 flex justify-center items-center'>
        <div className='card rounded border bg-white w-80 h-60  mx-auto p-4  flex flex-col justify-between'>
          <div className=''>
            <h1 className='font-bold text-8xl text-center'>{count}</h1>
            <p className='text-red-500 text-center mt-2'>{error}</p>
          </div>
          <div className='flex justify-between gap-3'>
            <button
              className='border rounded w-full py-2  hover:bg-zinc-200'
              onClick={addBtnHandler}
            >
              <AddIcon />
            </button>
            <button
              className='border rounded w-full py-2  hover:bg-zinc-200'
              onClick={reloadBtnHandler}
            >
              <ReplayIcon />
            </button>
            <button
              className='border rounded w-full py-2  hover:bg-zinc-200'
              onClick={reduceBtnHandler}
            >
              <RemoveIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App