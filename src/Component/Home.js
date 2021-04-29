import React, { useState } from 'react';
import { useFormik, useformik } from 'formik';
// import Index from '../Component/Index';
// import { useDispatch } from 'react-redux';
import { addName } from '../Actions/home';
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';



const Home = ({ history }) => {
  const dispatch = useDispatch()
  const editData = history.location.state || ''
  const Data = useSelector((state) => state.nameReducer.name)
  const { firstName } = editData


  const formik = useFormik({
    initialValues:{
      firstName: firstName,
    },
    onSubmit: values =>{
      dispatch(addName(values))
    }
  })

  return(
    
    <div className="container-fluid mt-2">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          <div className="com-md-6">
            <label htmlFor="firstName">FirstName</label>
            <input 
              type="text"
              name="firstName"
              id="firstName"
              className="form-control"
              value={formik.values.firstName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              />
                <button className="btn btn-primary">Submit</button>
          </div>
        </div>
      </form>
    <h1>{Data.firstName}</h1>
    </div>
    
  )
}

export default connect()(Home);