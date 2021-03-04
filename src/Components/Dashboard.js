import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { useState } from 'react';

const Dashboard = (props) => {
    // const { items } = props.items
    const data = props
    // const [loggedIn] = useState(loggedIn)
    const token  = localStorage.getItem("token")

    var loggedIn = true
    if(token == null){
        loggedIn = false
    }
    // localStorage.removeItem("token")


    console.log("dashboard",data)
    return (
        <>
            {
                !loggedIn && <Redirect to="/ login"/>
            }
        <div>
            <h1>Dashboard</h1>
            <Link to='/AddTodos'>
                <button type="button" className="btn btn-primary">
                    Todo
            </button>
            </Link>

            <Link to='/Forms'>
                <button type="button" className="btn btn-primary">
                    Forms
            </button>
            </Link>

            <Link to='/FetchUser'>
                <button type="button" className="btn btn-primary">
                    Fetchuser
            </button>
            </Link>

            <Link to='/Formikform'>
                <button type="button" className="btn btn-primary">
                    FormikForm
            </button>
            </Link>

            <Link to='/FetchData'>
                <button type="button" className="btn btn-primary">
                    FetchData
            </button>
            </Link>

            <Link to='/Lodash'>
                <button type="button" className="btn btn-primary">
                    Lodash
            </button>
            </Link>

            <Link to="/Increment">
            <button type="button" className="btn btn-primary">
                Increment
            </button>
            </Link>

            <Link to="/UserFilter">
            <button type="button" className="btn btn-primary">
            UserFilter
            </button>
            </Link>

            <Link to="/Logout">
            <button type="button" className="btn btn-danger">
                Logout
            </button>
            </Link>

        </div>
        </>
    )
}

const mapStateToProps = state => {
    const { FetchApiReducer } = state;
    return {
        loading: FetchApiReducer.loading,
        items: FetchApiReducer.data,
        error: FetchApiReducer.error
    };
};

export default connect(mapStateToProps)(Dashboard) ;