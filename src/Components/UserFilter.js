import React from 'react'
import { useDispatch, useSelector } from "react-redux"

const UserFilter = () => {
    const userData = useSelector(state => state.FetchApiReducer.data.data)
    console.log("Filter", userData)
    const dispatch = useDispatch();
    return (
        <div className="container-fluid">
            <div className="row">
                <h1>Pagination, Filtering and Sorting with Redux</h1>
                <input type="text" className="form-control" onChange={(() => dispatch({ type: "FILTERING" }))} />
                <div className="col-md-4">
                    {userData.map((v, k) => (
                        <li key={k}>{v.name}</li>
                    ))}
                </div>

            </div>
        </div>
    )
}


export default UserFilter;