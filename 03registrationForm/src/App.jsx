import { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const [values, setValues] = useState({
    fname: '',
    lname: '',
    email: ''
  })
  const [isRegistered, setIsRegistered] = useState(false)
  useEffect(() => {
    if (isRegistered) {
      toast.success('You are successfully registered');
    }
  }, [isRegistered]);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsRegistered(true)
    console.log("submitted")

  }

  return (
    <>
      <div className='main p-4 w-full h-screen bg-emerald-600'>
        <div className='card w-96 m-auto p-3 rounded bg-white'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <input
              id='firstName'
              type='text'
              className='px-2 py-2 rounded bg-zinc-100'
              placeholder='First Name'
              value={values.fname}
              onChange={(e) => setValues({ ...values, fname: e.target.value })} />
            <input
              id='lastName'
              type='text'
              className='px-2 py-2 rounded bg-zinc-100'
              placeholder='Last Name'
              value={values.lname}
              onChange={(e) => setValues({ ...values, lname: e.target.value })} />
            <input
              id='email'
              type='email'
              className='px-2 py-2 rounded bg-zinc-100'
              placeholder='Email'
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })} />
            <button
              type='submit'
              className='rounded bg-emerald-500 text-white font-medium px-3 py-2'
            >Register</button>

          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  )
}

export default App