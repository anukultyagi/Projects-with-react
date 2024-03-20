import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Button'

const Navbar = () => {
    const [hamburgerClick, setHamburgerClick] = React.useState(false)

    const handleClick = () => {
        setHamburgerClick(!hamburgerClick)
    }


    return (
        <>
            <nav className=' p-3 bg-black text-white'>
                <div className='container mx-auto sm:flex justify-between items-center px-4 md:py-3'>
                    <div className='flex justify-between'>

                        <Link to='/' className='md:text-2xl' onClick={() => setHamburgerClick(false)}>TRVL <span><i className="pi pi-eject"></i></span></Link>
                        <button onClick={handleClick} className='sm:hidden ' ><i className={hamburgerClick ? "pi pi-times" : "pi pi-bars"}></i></button>
                    </div>

                    <ul className={`sm:flex flex-col sm:flex-row sm:gap-5 sm:items-center ${hamburgerClick ? 'text-center w-full' : 'hidden'}`}>
                        <li><Link to='/' className='hover:sm:bg-none hover:bg-white hover:text-black py-2 font-medium' onClick={() => setHamburgerClick(false)}>Home</Link></li>
                        <li><Link to='/services' className='hover:bg-white hover:text-black py-2 font-medium' onClick={() => setHamburgerClick(false)}>Services</Link></li>
                        <li><Link to='/products' className='hover:bg-white hover:text-black py-2 font-medium' onClick={() => setHamburgerClick(false)}>Products</Link></li>
                        <li>
                            <Button className='py-2 font-medium' btnType='primary' type='button' >
                                <Link to='/products' className='hover:bg-white hover:text-black py-2 font-medium' onClick={() => setHamburgerClick(false)}>Sign Up</Link>
                            </Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
{/* <Link
to='/'
className=''
>
TRVL <span><i className="pi pi-eject"></i></span>
</Link> */}