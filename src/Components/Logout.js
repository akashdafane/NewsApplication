import React from 'react'
import { Link } from 'react-router-dom'


const Logout = (props) => {

    localStorage.removeItem("token")

    return (
        <div>
            <h1>You have been logged Out !!!</h1>
            <Link to = "/">Login Again</Link>
        </div>
    )
}

export default Logout;