import React, { useState } from 'react';


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

export default Input;