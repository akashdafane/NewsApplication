import React from 'react';
import { Formik, Form, formik, useFormik } from 'formik';
import { addInfo } from '../actions/formActionType';
import { TextField } from './TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
import { values } from 'lodash';

const FormikForm = (props) => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
        lastName: Yup.string()
            .max(15, 'Must be 15 character or less')
            .required('Required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Required'),
        phone: Yup.string()
            .min(10, 'Minmum 10 numbers ')
            .max(11, 'Invalid')
            .required('Required'),
        address: Yup.string()
            .max(15, 'maximum 15 words')
            .required('Required'),
        dob: Yup.string()
            .required('Required'),
        time: Yup.string()
            .required('Required'),
        url: Yup.string()
            .url("Invalid url")
            .required('Required'),
    })

    const initialValues = {
        firstName: "",
    }

    const getInputClasses = (fieldname) => {
        if (formik.touched[fieldname] && formik.errors[fieldname]) {
            return "is-invalid";
        }
        if (formik.touched[fieldname] && !formik.errors[fieldname]) {
            return "is-valid";
        }
        return "";
    };

    const formik = useFormik({
        initialValues,
        validationSchema: validate,
        onsubmit: (values) => {
            console.log("values", values.firstName)
        }
    })

    const submit = () => {
        console.log('form data', initialValues)
    }

    return (

        <div>
            <form onSubmit={formik.handleSubmit}>
                <input
                    placeholder="firstName"
                    type="text"
                    className={`form-control ${getInputClasses(
                        "firstName"
                    )}`}
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                    {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                    <div className="fv-plugins-message-container">
                        <div className="error">{formik.errors.firstName}</div>
                    </div>
                ) : null}
                <button type="button" onClick={submit} className="btn btn-primary">Submit</button>
                <Link to='/Dashboard'>
                    <button className="btn btn-primary">Dashboard</button>
                </Link>
            </form>
        </div>
    )
}

export default connect()(FormikForm);