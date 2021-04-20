import React from 'react';
import { useFormik } from 'formik';
// import { addInfo } from '../actions/formActionType';
// import { TextField } from './TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';
// import { values } from 'lodash';
// import { values } from 'lodash';
// import { values } from 'lodash';



const FormikForm = () => {

    const validationSchema = Yup.object({
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

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            dob: '',
            time: '',
            url: '',
        },
        validationSchema,
        onSubmit: values => {
            console.log("onsubmit", values)
        }
    })
    console.log("formik", formik.values)

    return (
        <div className="container-fluid mt-2">
            <form onSubmit={formik.handleSubmit}>
                <div className="row">

                    {/* firstName */}
                    <div className="col-md-6">
                        <label htmlFor="firstName">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            id="firstName"
                            className="form-control"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.firstName && formik.errors.firstName ? (
                            <div className="error">{formik.errors.firstName}</div>
                        ) : null}
                    </div>

                    {/* lastName */}

                    <div className="col-md-6">
                        <label htmlFor="lastName">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.lastName && formik.errors.lastName ? (
                            <div className="error">{formik.errors.lastName}</div>
                        ) : null}
                    </div>

                    {/* email */}
                    <div className="col-md-6">
                        <label>Email</label>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                    </div>

                    {/* phone */}
                    <div className="col-md-6">
                        <label>Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="form-control"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.phone && formik.errors.phone ? (
                            <div className="error">{formik.errors.phone}</div>
                        ) : null}
                    </div>

                    {/* Address */}

                    <div className="col-md-6">
                        <label>Address</label>
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address ? (
                            <div className="error">{formik.errors.address}</div>
                        ) : null}
                    </div>

                    {/* date */}

                    <div className="col-md-6">
                        <label>Date of Birth</label>
                        <input
                            type="date"
                            name="dob"
                            className="form-control"
                            value={formik.values.dob}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.dob && formik.errors.dob ? (
                            <div className="error">{formik.errors.dob}</div>
                        ) : null}
                    </div>

                    {/* time */}

                    <div className="col-md-6">
                        <label>Time</label>
                        <input
                            type="time"
                            name="time"
                            className="form-control"
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.time && formik.errors.time ? (
                            <div className="error">{formik.errors.time}</div>
                        ) : null}
                    </div>

                    {/* url */}
                    <div className="col-md-6">
                        <label>Website Url</label>
                        <input
                            type="url"
                            className="form-control"
                            placeholder="Website url"
                            name="url"
                            value={formik.values.url}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.url && formik.errors.url ? (
                            <div className="error">{formik.errors.url}</div>
                        ) : null}
                    </div>

                    <button className="btn btn-primary">Submit</button>
                    <Link to='/Dashboard'>
                        <button className="btn btn-primary">Dashboard</button>
                    </Link>

                </div>
            </form>
        </div>


    )
}

export default connect()(FormikForm);