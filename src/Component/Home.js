import React, { useState } from 'react';
import { useFormik, useformik } from 'formik';
// import Index from '../Component/Index';
// import { useDispatch } from 'react-redux';
import { addName } from '../Actions/home';



const Home = () => {

  // const [name,setName] = useState()
  // const dispatch = useDispatch()
  // console.log("name",name)


  const formik = useFormik({
    initialValues:{
      firstName:'',
    },
    onSubmit: values =>{
      console.log("onSubmit",values)
      // dispatch(addName(values.firstName))
      // setName(values.firstName)
    }
  })

  console.log("formik",formik.values)

  return(
    
    <div className="container-fluid mt-2">
      <form onSubmit={formik.handleSubmit}>
        <div className="row">
          {/* firstname */}
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
      {/* {name}
      <Index data={name}/> */}
    </div>
    
  )
}

export default Home