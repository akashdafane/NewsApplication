import React from 'react';


const Button = ({
    label,
    type,
    className,
    onClick,
}) => {
    return (
        <button
            type={type}
            className={className}
            onClick={(e) => {
                onClick(e.target.value)
            }}
        >
            {label}
        </button>

    )
}

export default Button;