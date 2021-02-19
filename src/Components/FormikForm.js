import React from 'react';
import { Formik, Form, formik } from 'formik';
import { addInfo } from '../actions/formActionType';
import { TextField } from './TextField';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as Yup from 'yup';

const FormikForm = (props) => {
    const validate =  Yup.object({
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

    const onSubmit = values => {
        console.log('form data', values)
    }

    return(
        <Formik
         initialValues = {{
             firstName: '',
             lastName: '',
             email: '',
             phone: '',
             address: '',
             dob: '',
             time:'',
             url:'',
         }}
         validationSchema = {validate} 
         
        >
            {
                formik => (
             <div>
                 <Form >
              <div className="container-fluid mt-2">
                <div className="row">
                  {/* firstName */}
                <div className="col-md-6">
                    <TextField label="firstName"  name="firstName" type="text"  />
                {/* <label>First Name</label> */}
                {/* <input 
                type="text"               
                value={firstName.firstName}
                className="form-control"
                onChange={e => setFname({ firstName: e.target.value})}
                /> */}
                </div>

                    {/* lastName */}

                <div className="col-md-6">
                {/* <label>Last Name</label> */}
                <TextField label = "lastName"  name = "lastName" type="test" />
                {/* <input 
                type="text"
                className="form-control"
                value={lastName.lastName}
                onChange={e => setLname({ lastName: e.target.value })}
                /> */}
                </div>

                {/* email */}
                <div className="col-md-6">
                    <TextField label="Email" name="email" type="email" />
                {/* <label>Email</label>
                <input 
                type="email"
                className="form-control"
                value={email.email}
                onChange={e => setEmail({ email: e.target.value })}
                /> */}
                </div>

                {/* phone */}
                <div className="col-md-6">
                    <TextField label="Phone" name="phone" type="tel" />
                {/* <label>Phone</label>
                <input 
                type="tel"
                className="form-control"
                value={phone.phone}
                onChange={e => setPhone({ phone: e.target.value })}
                /> */}
                </div>

                {/* Address */}

                <div className="col-md-6">
                    <TextField label="Address" name="address" type="test" />
                {/* <label>Address</label>
                <input 
                type="text"
                className="form-control"
                value={address.address}
                onChange={e => setAddress({ address: e.target.value })}
                /> */}
                </div>

                {/* date */}

                <div className="col-md-6">
                    <TextField label="Date of Birth" name="dob" type="date" />
                {/* <label>Date of Birth</label>
                <input 
                type="date"
                className="form-control"
                value={dob.DOB}
                onChange={e => setDob({ DOB: e.target.value })}
                /> */}
                </div>

                {/* time */}

                <div className="col-md-6">
                    <TextField label="Time" name="time" type="time" />
                {/* <label>Time</label>
                <input 
                type="time"
                className="form-control"
                value={time.time}
                onChange={e => setTime({ time: e.target.value })}
                /> */}
                </div>

                {/* url */}
                <div className="col-md-6">
                    <TextField label="Website Url" name="website url" type="url" />
                {/* <label>Website Url</label>
                <input 
                type="url"
                className="form-control"
                value={url.url}
                placeholder="Website url"
                onChange={e => setUrl({ url: e.target.value })}
                /> */}
                </div>
                <button className="btn btn-primary">Submit</button>
                <Link to = '/Dashboard'>
                <button className="btn btn-primary">Dashboard</button>
                </Link>
                </div>
                
        </div>
        </Form>
        </div>
           )
        }
        </Formik>
    )
}

export default connect ()(FormikForm);