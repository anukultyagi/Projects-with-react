
const Button = (props) => {
    return (
        <button
            className={`${props.className} border py-2 font-medium px-3 `}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button