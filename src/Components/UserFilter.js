// import React from 'react'
// import { useDispatch, useSelector } from "react-redux"


// const UserFilter = () => {
//     const userData = useSelector(state => state.fetchApiReducer.items.data)
//     console.log("Filter", userData)
//     const dispatch = useDispatch();
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <h1>Pagination, Filtering and Sorting with Redux</h1>
//                 <input type="text" className="form-control" onChange={(() => dispatch({ type: "FILTERING" }))} />
//                 <div className="col-md-4">
//                     {userData.map((v, k) => (
//                         <li key={k}>{v.name}</li>
//                     ))}
//                 </div>

//             </div>
//         </div>
//     )
// }


// export default UserFilter;

import React, { useEffect} from 'react';
import {connect, useSelector} from 'react-redux';
import {loadData, loadExactPage, loadNewPage, sortByAlphabet, sortByPrice} from "../actions/actionType";
import {fetchApiAction} from '../actions/fetchUserAction'
// import "bulma/css/bulma.min.css"
import {filterByValue} from '../actions/actionType';

const UserFilter = (props) => {
   
    const useData = useSelector(state => state.UserFilterReducer.appliedFilters.data)
    
  useEffect(()=>{
    const params = new URLSearchParams(window.location.search);
        const pageQueryParam = params.get('page');
        if (!pageQueryParam) {
            window.history.pushState({page: 1}, "title 1", "?page=1");
        } else {

        }
        // props.dispatch(fetchApiAction({count: 5}));
  })
    
  

   const filterByInput = (e) => {
        let input = e.target.value;
        props.dispatch(filterByValue({value: input}))
    }

    const nextPage = () => {
       props.dispatch(loadNewPage({page: 1}))
    }

   const previousPage = ()=> {
        props.dispatch(loadNewPage({page: -1}));
    }

   const goToPage = (page) =>{
        props.dispatch(loadExactPage({page}))
    }

   const sortByInput = (e) => {
        let value = e.target.value;
        let direction = value.endsWith('asc') ? "asc" : "desc";

        if (value.startsWith('price')){
            props.dispatch(sortByPrice({direction}))
        }else {
            props.dispatch(sortByAlphabet({direction}));
        }
    }

    
        let products = useData;
        console.log("filterproduct",useData)
        return (
            <div className="App">
                <section className="hero">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">
                                Pagination, Filtering and Sorting with React
                            </h1>
                            <h2 className="subtitle">
                                A detailed guide
                            </h2>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <nav className="pagination" role="navigation" aria-label="pagination">
                            <button className="button pagination-previous" onClick={() => {
                                previousPage()
                            }}>Previous
                            </button>
                            <button className="button pagination-next" onClick={() => {
                                nextPage()
                            }}>Next page
                            </button>
                            <ul className="pagination-list">
                                {
                                    [...Array(props.state.filteredPages)].map((value, index) => (
                                        <button
                                            className={`button pagination-link ${props.state.currentPage === index + 1 ? "is-current" : ""}`}
                                            aria-label="Page 1"
                                            onClick={() => goToPage(index + 1)}
                                            aria-current="page">
                                            {index + 1}
                                        </button>
                                    ))
                                }
                            </ul>
                        </nav>

                    </div>
                </section>
                <section className='section'>
                    <div className='container'>
                        <div>
                            <div className="field is-grouped" style={{alignItems: "center"}}>
                                <div className="control">
                                    <div className="select">
                                        <select onChange={e => {
                                            sortByInput(e)
                                        }}>
                                            <option value="" disabled selected>Sort by</option>

                                            <option value='alphabet_asc'>Name - A-Z</option>
                                            <option value='alphabet_desc'>Name - Z-A</option>

                                            <option value='price_asc'>Price - Lowest to Highest</option>
                                            <option value='price_desc'>Price - Highest to Lowest</option>

                                        </select>
                                    </div>
                                </div>

                                <div className='control' style={{minWidth: "300px"}}>
                                    <input onChange={e => {
                                        filterByInput(e);
                                    }} style={{width: "100%"}} placeholder='Filter by' type='text'/>
                                </div>
                            </div>
                        </div>
                        <div className='tile is-ancestor' style={{flexWrap: "wrap"}}>
                            {
                                products && products.length && products.map(product => (
                                    <div className='tile is-parent is-3'>
                                        <div className='tile is-child box'>
                                            <p>
                                                <b>Name: </b>
                                                {product.name}
                                            </p>
                                            <p>
                                                <b>Username: </b>
                                                {product.username}
                                            </p>
                                            <p>
                                                <b>Email: </b>
                                                {product.email}
                                            </p>
                                            <p>
                                                <b>City: </b>
                                                {product.address.city}
                                            </p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </section>
            </div>

        );
    }

function mapStateToProps(state) {
    return {state};
}

export default connect(mapStateToProps)(UserFilter);
