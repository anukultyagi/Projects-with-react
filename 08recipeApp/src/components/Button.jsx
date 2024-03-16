
const Button = (props) => {
    return (
        <button
            className={`border py-2 font-medium px-3 ${props.className}`}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button