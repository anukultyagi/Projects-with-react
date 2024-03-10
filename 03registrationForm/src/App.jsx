import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    const [values, setValues] = useState({
        firstname: '',
        lastname: '',
        email: ''
    })
    const fnameHandler = (e) => {
        setValues({ ...values, firstname: e.target.value })
    }
    const lnameHandler = (e) => {
        setValues({ ...values, lastname: e.target.value })
    }
    const emailHandler = (e) => {
        setValues({ ...values, email: e.target.value })
    }
    const formHandler = (e) => {
        e.preventDefault();
        console.log(values)
        setValues({
            firstname: '',
            lastname: '',
            email: ''
        })
        if ((values.firstname.length !== 0) && (values.lastname.length !== 0) && (values.email.length !== 0)) {
            toast("mission Successful")
        }
    }


    return (
        <div className='main w-full h-screen flex justify-center items-center bg-teal-700'>
            <div className='card w-96 bg-white rounded p-5'>
                <form onSubmit={formHandler} className='flex flex-col gap-5'>

                    <div className='flex flex-col gap-2'>
                        <input
                            type='text'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='First Name'
                            value={values.firstname}
                            onChange={fnameHandler}

                        />
                        <span className='text-sm text-red-500'>Enter Valid First Name</span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input
                            type='text'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='Last Name'
                            value={values.lastname}
                            onChange={lnameHandler}

                        />
                        <span className='text-sm text-red-500'>Enter Valid Last Name</span>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <input
                            type='email'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='Email'
                            value={values.email}
                            onChange={emailHandler}

                        />
                        <span className='text-sm text-red-500'>Enter Valid email</span>
                    </div>

                    <button
                        className='px-3 py-2 text-white font-medium bg-teal-700'
                    >Register</button>
                </form>
                <ToastContainer />
            </div>
        </div>
    )
}

export default App