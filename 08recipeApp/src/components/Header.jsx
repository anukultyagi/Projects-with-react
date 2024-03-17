import { useState } from 'react'
import burgerLogo from '../assets'

const Header = ({ onSearch }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const handleInputChange = (e) => {

        setSearchQuery(e.target.value)

    }
    const handleInputSubmit = (e) => {
        e.preventDefault()
        onSearch(searchQuery)
    }

    return (
        <>
            <nav className='p-5 sm:flex justify-between items-center bg-black mb-4'>
                <div className="mb-4 flex justify-center sm:block sm:mb-0 ">
                    {/* Brand Logo */}
                    <div className='flex gap-3 items-center'>
                        <img
                            src={burgerLogo}
                            className="max-h-7"
                            alt="brand-logo" />
                        <span className='text-white text-lg font-medium'>Recipe Finder</span>
                    </div>
                </div>
                <div className='flex sm:gap-2 gap-3 items-center bg-white rounded-xl px-2 py-1'>
                    {/* search bar */}
                    <i className="pi pi-search text-zinc-400 text-sm"></i>
                    <form onSubmit={handleInputSubmit}>
                        <input
                            type='text'
                            className='px-2 sm:w-80 focus:outline-none border-0'
                            placeholder='Search....'
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header