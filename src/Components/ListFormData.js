import React from 'react';
import { connect } from 'react-redux';


const ListFormData = (props) => {
    let a = props.userData
    // console.log("a",a)
    return (
        <div>
            <ul>
            {props.userData.map((v,k) => (
                <li key={k}>{v.firstName}</li>
            ))}
            </ul>

        </div>
    )
}

const mapStateToProps = (state) => ({
    userData: state.formReducer.inputData
})

export default connect(mapStateToProps)(ListFormData)

