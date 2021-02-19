import React from 'react';
import { ErrorMessage, useField } from 'formik';


export const TextField = ({ label, ...props }) => {
    const [field,meta] = useField(props);
    // console.log("field",field);
    // console.log("meta", meta)
    return (
        <div>
            <label htmlFor={field.name}>{label}</label>
            <input 
            className={`form-control ${meta.touched && meta.error && 'is-invalid'}`}
            {...field} {...props}
            /> 
            <ErrorMessage component="div" name={field.name} className="error"/>
        </div>
    )
}

