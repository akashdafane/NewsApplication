import React, { useState, Fragment } from 'react';
import TableData from './TableData';
import { useSelector } from 'react-redux';

const FetchData = () => {
    const userData = useSelector((state) => state.fetchApiReducer.items.data)
    return (
        <Fragment>
            <div className="container px-2">
                <TableData data={userData} itemsPerPage={5} />
            </div>
        </Fragment>

    )
}

export default FetchData;