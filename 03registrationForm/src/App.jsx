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


        if (values.firstname && values.lastname && values.email) {
            toast.success('Mission Successful', {
                position: "top-center",
            });

        } else {
            toast.error('Please fill out all fields', {
                position: "top-center",
            });
        }

        setValues({
            firstname: '',
            lastname: '',
            email: ''
        })

    }


    return (
        <div className='main w-full h-screen flex justify-center items-center bg-teal-700'>
            <div className='card w-96 bg-white rounded p-5'>
                <form onSubmit={formHandler} className='flex flex-col gap-5'>

                    <div className='flex flex-col gap-2'>
                        <input
                            type='text'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='First Name *'
                            value={values.firstname}
                            onChange={fnameHandler}
                            required
                        />


                    </div>
                    <div className='flex flex-col gap-2'>
                        <input
                            type='text'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='Last Name'
                            value={values.lastname}
                            onChange={lnameHandler}

                        />


                    </div>

                    <div className='flex flex-col gap-2'>
                        <input
                            type='email'
                            className='px-3 py-2 bg-slate-100'
                            placeholder='Email *'
                            value={values.email}
                            onChange={emailHandler}
                            required

                        />


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