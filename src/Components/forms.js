import React from 'react';
import { addInfo } from '../actions/formActionType';
import { connect } from 'react-redux';

const forms = (props) => {

//   const handleState = (e) => {
//      let input = ({ [e.target.name] : e.target.value})
//      console.log("input",input)
//     }

    return(
        <form onSubmit={(e) => {
            e.preventDefault();
            let firstName = e.target.FirstName.value;
            let lastName = e.target.LastName.value;
            let email = e.target.Email.value;
            let phone = e.target.Phone.value;
            let address = e.target.Address.value;
            let dob = e.target.DOB.value;
            let time = e.target.Time.value;
            let Url = e.target.url.value;
            // props.dispatch(addInfo(firstName))
            props.dispatch(addInfo(firstName,lastName,email,phone,address,dob,time,Url));
            e.target.FirstName.value=""
            e.target.LastName.value=""
            e.target.Email.value=""
            e.target.Phone.value=""
            e.target.Address.value=""
            e.target.DOB.value=""
            e.target.Time.value=""
            e.target.url.value=""

            // console.log("####",firstName,lastName,email,phone,address,time,Url)
        }}>
        <div className="container-fluid mt-2">
            <div className="row">
                  {/* firstName */}
                <div className="col-md-6">
                <label>First Name</label>
                <input 
                type="text"
                className="form-control"
                name="FirstName"
                // onChange={handleState}
                />
                </div>

                    {/* lastName */}

                <div className="col-md-6">
                <label>Last Name</label>
                <input 
                type="text"
                className="form-control"
                name="LastName"
                // onChange={handleState}
                />
                </div>

                {/* email */}
                <div className="col-md-6">
                <label>Email</label>
                <input 
                type="email"
                className="form-control"
                name="Email"
                // onChange={handleState}
                />
                </div>

                {/* phone */}
                <div className="col-md-6">
                <label>Phone</label>
                <input 
                type="tel"
                className="form-control"
                name="Phone"
                // onChange={handleState}
                />
                </div>

                {/* Address */}

                <div className="col-md-6">
                <label>Address</label>
                <input 
                type="text"
                className="form-control"
                name="Address"
                // onChange={handleState}
                />
                </div>

                {/* date */}

                <div className="col-md-6">
                <label>Date of Birth</label>
                <input 
                type="date"
                className="form-control"
                name="DOB"
                // onChange={handleState}
                />
                </div>

                {/* time */}

                <div className="col-md-6">
                <label>Time</label>
                <input 
                type="time"
                className="form-control"
                name="Time"
                // onChange={handleState}
                />
                </div>

                {/* url */}
                <div className="col-md-6">
                <label>Website Url</label>
                <input 
                type="url"
                className="form-control"
                name="url"
                placeholder="Website url"
                // onChange={handleState}
                />
                </div>
                <button  className="btn btn-primary">Submit</button>

                </div>
        
        </div>
        </form>
    )
}

export default connect()(forms);