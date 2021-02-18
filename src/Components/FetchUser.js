import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { FetchUsersAction } from '../actions/FetchUsersAction';


const FetchUser = ({ userData, FetchUsersAction })=> {
    useEffect(() => {
        FetchUsersAction()
    }, [input])
    return userData.loading (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
        userData: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        FetchUsersAction: () => dispatch(FetchUsersAction())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(FetchUser)