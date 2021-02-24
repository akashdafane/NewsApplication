import React, { useState } from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

const FetchData = (props) => {
    const { items } = props;
    const [users, setUsers] = useState(items.data.slice(0, 10));
    const [pageNumber, setPageNumber] = useState(0)
    const usersPerPage = 5
    const pagesVisited = pageNumber * usersPerPage
    const pageCount = Math.ceil(users.length / usersPerPage);
    const displayUsers = users
        .slice(pagesVisited, pagesVisited + usersPerPage)
        .map((user) => {
            return (
                <div>
                  <table>
                      <tr>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.email}</td>
                          <td>{user.phone}</td>
                          <td>{user.website}</td>
                      </tr>
                  </table>
                    {/* <h3></h3> */}
                </div>
            )
        })

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }
    return (
        <div>
              <table>
                        <tr>
                            <th>Name</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Website</th>
                              
                        </tr>
                        {displayUsers}
          
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