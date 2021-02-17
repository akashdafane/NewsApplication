import React from 'react';
import { connect } from 'react-redux';


const ListFormData = (props) => {
    let a = props.userData
    console.log("a",a)
    return (
        <div>
            {props.userData.map((v,k) => (
                <li key={k}>{v.firstname}</li>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => ({
    userData: state.fromReducer.inputData
})

export default connect(mapStateToProps)(ListFormData)

