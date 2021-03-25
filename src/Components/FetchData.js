import React, { useState, Fragment } from 'react';
import TableData from './TableData';
import { useSelector } from 'react-redux';

const FetchData = () => {
    // const userData = useSelector((state) => state.fetchApiReducer.items.data)
    const FilterData = useSelector((state) => state.fetchApiReducer.filteredItems)
    return (
        <Fragment>
            <div className="container px-2">
                <TableData data={FilterData} itemsPerPage={5} />
            </div>
        </Fragment>

    )
}

export default FetchData;