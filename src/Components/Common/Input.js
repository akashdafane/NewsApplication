import React, { useState } from 'react';
import PropsTypes from 'prop-types';

const Input = ({
    type,
    className,
    onChange,
    placeholder,
    label,
    value,
    isPassword,
}) => {

    const [hidePassword, setHidePassword] = useState(true);

    const managePasswordVisibility = () => {
        setHidePassword(!hidePassword)
    };

    const displayIcon = () => {
        if (isPassword) {
            return (
                <i
                    className={
                        hidePassword ? 'fas fa-eye-slash' : 'fa fa-eye '
                    }
                    aria-hidden="true"
                    onClick={managePasswordVisibility}
                />
            );
        }
        return null;
    };

    return (
        <>
            <p>{label}</p>
            <input
                type={isPassword && !hidePassword ? 'text' : type}
                value={value}
                className={className}
                placeholder={placeholder}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
            />
            {isPassword && <div className="showIcon">{displayIcon()}</div>}
        </>

    )
}

Input.propTypes = {
    type : PropsTypes.func.isRequired,
    className : PropsTypes.func.isRequired,
    onChange : PropsTypes.func.isRequired,
    placeholder : PropsTypes.func.isRequired,
    label : PropsTypes.func.isRequired,
    value : PropsTypes.func.isRequired,
    isPassword : PropsTypes.func.isRequired,
}

export default Input;