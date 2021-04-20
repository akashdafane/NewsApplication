import React from 'react';
import PropsTypes from 'prop-types';

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

Button.propTypes = {
    label : PropsTypes.func.isRequired,
    type : PropsTypes.func.isRequired,
    className : PropsTypes.func.isRequired,
    onClick : PropsTypes.func.isRequired
}

export default Button;