import React from 'react';
import { connect } from 'react-redux';

const FetchUser = (props) => {
    const { items } = props;

    return (
        <div>
            <ul>
                {
                    items && items.data && items.data.map((v, k) => (
                        <li key={k.id}>{v.name}</li>
                    ))}
            </ul>
        </div>
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

export default connect(mapStateToProps)(FetchUser) 