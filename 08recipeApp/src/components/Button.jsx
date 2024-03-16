
const Button = (props) => {
    return (
        <button
            className={`border py-2 font-medium px-3 ${props.className}`}
            onClick={props.clickFunction}>
            {props.children}
        </button>
    )
}

export default Button