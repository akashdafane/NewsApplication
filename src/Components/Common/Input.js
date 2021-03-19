import React from 'react';


const Input = ({
    type,
    className,
    onChange,
    placeholder,
    label,
    value
}) => {
    return(
        <>
        <p>{label}</p>
        <input 
         type={type }
         value={value}
         className={className}
         placeholder={placeholder}
         onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        </>
       
    )
}

export default Input;