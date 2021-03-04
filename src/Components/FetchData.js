import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import TableData from './TableData';
import { useSelector } from 'react-redux';

const FetchData = (props) => {
    // const { items } = props;
    const userData = useSelector((state) => state.FetchApiReducer.data.data)
    console.log("userData",userData)
    return (
        <Fragment>
            <div className="container px-2">
                <TableData data={userData} itemsPerPage={5} />
            </div>
        </Fragment>

    )
}

// const mapStateToProps = state => {
//     const { fetchapireducer } = state;
//     return {
//         loading: fetchapireducer.loading,
//         items: fetchapireducer.data,
//         error: fetchapireducer.error
//     };
// };

export default FetchData;