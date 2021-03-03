import React from 'react'



const UserFilter = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <h1>Pagination, Filtering and Sorting with Redux</h1>
                <div className="col-md-4">
                <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                this.previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                this.nextPage()
                            }}>Next page
                            </button>
                            <ul className="pagination-list">
                                {/* {
                                    [...Array(this.props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${this.props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => this.goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                } */}
                            </ul>
                        </nav>
                </div>
            </div>
        </div>
    )
}


export default UserFilter;