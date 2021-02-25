import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { InsertCommentSharp } from '@material-ui/icons';
import _, { orderBy, sortBy } from 'lodash';



const FetchData = (props) => {
    const { items } = props;
    const [users, setUsers] = useState(items.data.slice(0, 10));
    const [searchTerm, setSearchTerm] = useState('')
    // const [login, setLogin] = useState(false)
    
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 5
    const pagesVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(users.length / usersPerPage);

    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)

        const data1 = _.sortBy(displayUsers, ['type', 'name'])
        const [data, setData] = useState({'data':data1});

    const changePage = ({ selected }) => {
        console.log("count",selected)
        setPageNumber(selected)

    }

    const Ascending = () => {
        // var data = ;
        // console.log("asc", data)
        setData({ data:_.sortBy(displayUsers, ['type', 'name']) })
    }
    console.log("data1",data)

    const Descending = () => {
        // var data = _.sortBy(displayUsers, ['type', 'name']).reverse();
        // console.log("desc", data)
        // setLogin({ login: false })
        setData({ data:_.sortBy(displayUsers, ['type', 'name']).reverse() })
    }

    // var data = data
    // var data = _.sortBy(displayUsers, ['type', 'name']);


    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-4 mt-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by city..."
                        onChange={event => { setSearchTerm(event.target.value) }}
                    /><br></br>
                </div>
                <div className="col-md-4">
                    <button type="button" onClick={Ascending} className="btn btn-primary">asc</button>
                </div>
                <div className="col-md-4 ">
                    <button type="button" onClick={Descending} className="btn btn-primary">desc</button>
                </div>
            </div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.data.filter((val) => {
                            if (searchTerm == "") {
                                return val
                            } else if (val.address.city.toLowerCase().includes(searchTerm.toLowerCase())) {
                                return val
                            }
                        })
                            .map((user, i) => (
                                <tr>
                                    <th scope="row">{i}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address.city}</td>
                                </tr>
                            ))
                    }

                </tbody>
            </table>

            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisable"}
                activeClassName={"paginationActive"}
            />
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

export default connect(mapStateToProps)(FetchData) 