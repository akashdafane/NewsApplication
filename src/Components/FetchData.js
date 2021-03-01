import React, { useState, Fragment } from 'react';
import { connect } from 'react-redux';
import TableData from './TableData';

const FetchData = (props) => {
    const { items } = props;
    return (
        <Fragment>
            <div className="container px-2">
                <TableData data={items.data} itemsPerPage={5} />
            </div>
        </Fragment>

    )
}

const mapStateToProps = state => {
    const { fetchapireducer } = state;
    return {
        loading: fetchapireducer.loading,
        items: fetchapireducer.data,
        error: fetchapireducer.error
    };
};

export default connect(mapStateToProps)(FetchData)
