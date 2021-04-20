import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from "react-redux"


const Increment = () => {

    const counter = useSelector(state => state.IncrementReducer.counter)
    const dispatch = useDispatch();

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4">

                </div>
                <div className="col-md-4 mt-5 pt-5">
                    <div className="card text-center">
                        <div className="card-header">
                            Increment And Decrement Counter
                       </div>
                        <div classclassName="card-body">
                            <h1 className="lead">Counter: {counter}</h1>&nbsp;
                            <button className="btn btn-success" onClick={(() => dispatch({ type: "INCREMENT" }))}> Increment </button> <br></br> <br></br>
                            <button className="btn btn-info" onClick={(() => dispatch({ type: "DECREMENT" }))}> Decrement </button> <br></br>

                        </div>
                        <div className="card-footer text-muted">
                            <Link to='/Dashboard'>
                                <button className="btn btn-warning ">Dashboard</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Increment;