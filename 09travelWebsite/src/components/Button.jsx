import React from 'react'

const Button = (props) => {
    return (
        <button
            className={`${props.className} px-4 py-1 border uppercase font-medium ${props.btnType == 'primary' ? 'border-1 border-white text-white hover:bg-white hover:text-black' : 'bg-white text-black hover:text-white hover:bg-black'}`}
            type={props.type}
            onClick={props.onClick}>{props.children}
        </button>
    )
}

export default Button