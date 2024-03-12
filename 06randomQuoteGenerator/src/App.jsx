import React, { useEffect, useState } from 'react'

const App = () => {
  const [quoteText, setQuoteText] = useState("")
  const quoteGenerator = () => {
    fetchQuote()
  }

  const fetchQuote = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((res) => res.json())
      .then((res) => setQuoteText(res.slip.advice))
      .catch((error) => console.error("Error fetching quote:", error));
  }

  useEffect(
    () => {
      fetchQuote()
    },
    []
  )


  return (
    <>
      <div className='main h-screen w-full bg-background-image bg-center bg-cover flex justify-center items-center'>
        <div className='card max-w-xl p-5 rounded bg-white flex flex-col items-center justify-between gap-10'>
          <div className='text-2xl font-semibold text-center '>
            {quoteText}
          </div>
          <div>
            <button
              onClick={quoteGenerator}
              className='px-4 py-2 border border-black rounded-md hover:bg-zinc-100 hover:scale-110 font-medium text-black'>Generate</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App