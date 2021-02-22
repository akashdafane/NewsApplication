import React, { useState, useEffect } from 'react';
import { addInfo } from '../actions/formActionType';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function Forms(props){

    const [formvalue, updateFormValues] = useState({});
    const [firstName, setFname] = useState({ firstName:'' })
    const [lastName, setLname] = useState({ lastName:'' })
    const [email, setEmail] = useState({ email:'' })
    const [phone, setPhone] = useState({ phone: '' })
    const [address, setAddress] = useState({ address: '' })
    const [dob, setDob] = useState({ DOB:'' })
    const [time, setTime] = useState({ time:'' })
    const [url, setUrl] = useState({ url:'' })


    // const [lastName, setLastName] = useState("")
    //   const handleState = (e) => {
    //  let input = ({ [e.target.name] : e.target.value})
    //  console.log("input",input)
    // }
    // console.log("f",name);
    // var s = props.userData

//    useEffect(() => {
//        const formdata = window.localStorage.getItem("persist:formReducer");
//        const saveValue = JSON.parse(formdata);
//        updateFormValues(saveValue.s, firstName,lastName )
    //    setFname(saveValue.firstName)
    //    setLname(saveValue.lastName)
//    })

//    useEffect(() => {
//        const valuesTosave = { s}
//        window.localStorage.setItem("persist:formReducer",(valuesTosave))
//    })

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            // props.dispatch(addInfo(name.firstName,name.lastName,name.email,name.phone,name.address,name.DOB,name.time,name.url));
            props.dispatch(addInfo(
                firstName.firstName,
                lastName.lastName,
                email.email,
                phone.phone,
                address.address,
                dob.DOB,
                time.time,
                url.url
                ));
        }}>
        <div className="container-fluid mt-2">
            <div className="row">
                  {/* firstName */}
                <div className="col-md-6">
                <label>First Name</label>
                <input 
                type="text"               
                value={firstName.firstName}
                className="form-control"
                onChange={e => setFname({ firstName: e.target.value})}
                />
                </div>

                    {/* lastName */}

                <div className="col-md-6">
                <label>Last Name</label>
                <input 
                type="text"
                className="form-control"
                value={lastName.lastName}
                onChange={e => setLname({ lastName: e.target.value })}
                />
                </div>

                {/* email */}
                <div className="col-md-6">
                <label>Email</label>
                <input 
                type="email"
                className="form-control"
                value={email.email}
                onChange={e => setEmail({ email: e.target.value })}
                />
                </div>

                {/* phone */}
                <div className="col-md-6">
                <label>Phone</label>
                <input 
                type="tel"
                className="form-control"
                value={phone.phone}
                onChange={e => setPhone({ phone: e.target.value })}
                />
                </div>

                {/* Address */}

                <div className="col-md-6">
                <label>Address</label>
                <input 
                type="text"
                className="form-control"
                value={address.address}
                onChange={e => setAddress({ address: e.target.value })}
                />
                </div>

                {/* date */}

                <div className="col-md-6">
                <label>Date of Birth</label>
                <input 
                type="date"
                className="form-control"
                value={dob.DOB}
                onChange={e => setDob({ DOB: e.target.value })}
                />
                </div>

                {/* time */}

                <div className="col-md-6">
                <label>Time</label>
                <input 
                type="time"
                className="form-control"
                value={time.time}
                onChange={e => setTime({ time: e.target.value })}
                />
                </div>

                {/* url */}
                <div className="col-md-6">
                <label>Website Url</label>
                <input 
                type="url"
                className="form-control"
                value={url.url}
                placeholder="Website url"
                onChange={e => setUrl({ url: e.target.value })}
                />
                </div>
                <button className="btn btn-primary">Submit</button>
                <Link to = '/Dashboard'>
                <button className="btn btn-primary">Dashboard</button>
                </Link>
                <Link to = '/ListFormData'>
                <button className="btn btn-primary">ListFormData</button>
                </Link>
                </div>
        
        </div>
        </form>
    )
}

// const mapStateToProps = (state) => ({
//     userData: state.formReducer.inputData
// })


export default connect()(Forms);