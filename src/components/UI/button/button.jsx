import './button.css'

const Button = ({ className, style, children, ...props }) => {

    let buttonStyleOriginal = {
        fontFamily: "Roboto, sans-serif",
        fontWeight: "500",
        fontStyle: "normal",
    }

    let buttonStyleAbout = {
        fontFamily: "Fascinate Inline, system-ui",
        fontWeight: "400",
        fontStyle: "normal",
        width: "200px",
    }

    return (
        <button 
            className={`button ${className}`}
            style={style === 'original' ? buttonStyleOriginal : buttonStyleAbout}  
            {...props}>
            {children}
        </button>
    )
}

export default Button;