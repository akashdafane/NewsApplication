import React from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';


const ListFormData = (props) => {
    return (
        <div>
            <ul>
                {props.userData.map((v, k) => (
                    <ul>
                        <li key={k}>{v.firstName}</li>
                        <li>{v.lastName}</li>
                        <li>{v.email}</li>
                        <li>{v.phone}</li>
                        <li>{v.address}</li>
                        <li><Moment>{v.date}</Moment></li>
                        <li>{v.time}</li>
                        <li>{v.url}</li><br></br>
                    </ul>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => ({
    userData: state.formReducer.inputData
})

export default connect(mapStateToProps)(ListFormData)

