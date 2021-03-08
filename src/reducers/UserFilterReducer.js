// import React from 'react';
// import {
//     SORT_BY_ALPHABET,
//     FILTER_BY_VALUE,
//     LOAD_NEW_PAGE,
//     LOAD_EXACT_PAGE,

// import { SET_SORT } from "../actions/UserFilterAction";

// } from '../actions/UserFilterAction'

// const initialState = {
//     appliedFilters: []
// };

// const UserFilterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SORT_BY_ALPHABET:
//             const sortByAlphabetState = Object.assign({}, state);
//             let sortedAlphabetArr = action.payload.direction === "asc" ?
//                 sortAsc(state.filteredProducts, 'name') :
//                 sortDesc(state.filteredProducts, 'name');

//             sortByAlphabetState.filteredProducts = sortedAlphabetArr;
//             sortByAlphabetState.appliedFilters = addFilterIfNotExists(SORT_BY_ALPHABET, sortByAlphabetState.appliedFilters);
//             sortByAlphabetState.appliedFilters = removeFilter(SORT_BY_ALPHABET, sortByAlphabetState.appliedFilters);

//             return sortByAlphabetState;
//         // case SORT_BY_PRICE:
//     let sortByPriceState = Object.assign({}, state);
//     let sortedPriceArr = action.payload.direction === "asc" ?
//         sortAsc(state.filteredProducts, 'price') :
//         sortDesc(state.filteredProducts, 'price');

//     sortByPriceState.filteredProducts = sortedPriceArr;
//     sortByPriceState.appliedFilters = addFilterIfNotExists(SORT_BY_ALPHABET, sortByPriceState.appliedFilters);
//     sortByPriceState.appliedFilters = removeFilter(SORT_BY_PRICE, sortByPriceState.appliedFilters);

//     return sortByPriceState;
// case FILTER_BY_PRICE:
//     filter by price
//     return state;
// case FILTER_BY_VALUE:
//     let newState = Object.assign({}, state);
//     let value = action.payload.value;
//     let filteredValues = state.products.filter(product => {
//         return product.name.toLowerCase().includes(value) ||
//             product.designer.toLowerCase().includes(value);
//     });

//     let appliedFilters = state.appliedFilters;

//     if (value) {
//         appliedFilters = addFilterIfNotExists(FILTER_BY_VALUE, appliedFilters);

//         newState.filteredProducts = filteredValues;
//         newState.filteredCount = newState.filteredProducts.length;
//         newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);

//     } else {
//         appliedFilters = removeFilter(FILTER_BY_VALUE, appliedFilters);

//         if (appliedFilters.length === 0) {
//             newState.filteredProducts = newState.products;
//             newState.filteredCount = newState.filteredProducts.length;
//             newState.filteredPages = Math.ceil(newState.filteredCount / newState.countPerPage);
//         }
//     }
//     return newState;
// case LOAD_DATA:
//     let count = action.payload.count;
//     let countPerPage = action.payload.countPerPage || 10;

//     //round up
//     let totalPages = Math.ceil(count / countPerPage);

//     let products = generate(count);
//     return {
//         ...state,
//         products,
//         filteredProducts: products.slice(0, countPerPage),
//         currentCount: countPerPage,
//         countPerPage,
//         totalCount: count,
//         currentPage: 1,
//         totalPages: totalPages,
//         filteredPages: totalPages
//     };
// case LOAD_NEW_PAGE:
//Clone the previous state
// let loadNewPageState = Object.assign({}, state);
//How many pages should be added. Will always be 1 or -1
// let addPages = action.payload.page;
//add it to the current
// loadNewPageState.currentPage += addPages;

// let perPage = loadNewPageState.countPerPage; //20 by default

// let nextProducts;
// if (addPages === 1) {
//Moving from page 1 to 2 will cause ‘upperCount’ to be 40
//     let upperCount = loadNewPageState.currentCount + perPage;
//     let lowerCount = loadNewPageState.currentCount; //This hasn’t been changed. It will remain 20.

//     loadNewPageState.currentCount += loadNewPageState.countPerPage;
//     nextProducts = loadNewPageState.products.slice(lowerCount, upperCount);
// }

// if (addPages === -1) {
//     let upperCount = loadNewPageState.currentCount; //40
//     let lowerCount = loadNewPageState.currentCount - perPage; //20

//     loadNewPageState.currentCount -= loadNewPageState.countPerPage;
//     nextProducts = loadNewPageState.products.slice(lowerCount - perPage, upperCount - perPage);
// }

// loadNewPageState.filteredProducts = nextProducts;
// Don't use window.history.pushState() here in production
// It's better to keep redirections predictable
//             window.history.pushState({ page: 1 }, "title 1", `?page=${loadNewPageState.currentPage}`);
//             return loadNewPageState;
//         case LOAD_EXACT_PAGE:
//             const exactPageState = Object.assign({}, state);
//             const exactPage = action.payload.page;
//             let upperCountExact = exactPageState.countPerPage * exactPage;
//             let lowerCountExact = upperCountExact - exactPageState.countPerPage;

//             let exactProducts = exactPageState.products.slice(lowerCountExact, upperCountExact);
//             exactPageState.filteredProducts = exactProducts;
//             exactPageState.currentCount = upperCountExact;
//             exactPageState.currentPage = exactPage;
//             window.history.pushState({ page: 1 }, "title 1", `?page=${exactPageState.currentPage}`);

//             return exactPageState;

//         default:
//             return state;

//     }
// };



// function sortAsc(arr, field) {
//     return arr.sort(function (a, b) {
//         if (a[field] > b[field]) return 1;

//         if (b[field] > a[field]) return -1;

//         return 0;
//     })
// }

// function sortDesc(arr, field) {
//     return arr.sort(function (a, b) {
//         if (a[field] > b[field]) return -1;

//         if (b[field] > a[field]) return 1;

//         return 0;
//     })
// }

// function addFilterIfNotExists(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     if (index === -1) appliedFilters.push(filter);

//     return appliedFilters;
// }

// function removeFilter(filter, appliedFilters) {
//     let index = appliedFilters.indexOf(filter);
//     appliedFilters.splice(index, 1);
//     return appliedFilters;
// }

// export default UserFilterReducer;



// ##################################
// const initialState = {
//     isFetching: false,
//     sortDirection: null,
//     sortkey: null,
//     items:[]
// };

// const UserFilterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case SET_SORT:
//             return{
//                 ...state,
//                 sortKey: action.sortKey,
//                 sortDirection: action.sortDirection
//             }
//             default:
//                 return state;

//     }
// }
// ################################




// import { FETCH_PHOTOS, RECEIVE_PHOTOS } from '../actions/UserFilterAction';

// const initialState = {
//     isFetching: false,
//     sortDirection: null,
//     sortKey: null,
//     items: []
// };

// const UserFilterReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case FETCH_PHOTOS:
//             return {
//                 ...state,
//                 isFetching: true,
//                 items: action.res
//             };
//         case RECEIVE_PHOTOS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 items: action.photos
//             };
//         case SET_SORT:
//             return {
//                 ...state,
//                 sortKey: action.sortKey,
//                 sortDirection: action.sortDirection
//             };
//         default:
//             return state;
//     }
// };

// const rootReducer = combineReducers({
//   photos
// });

// export default UserFilterReducer;


import * as all from '../actions/types';
import { FETCH_API_SUCCESS } from '../actions/types'
import generate from "../DemoApiData.js/Data";


const initialState = {
    appliedFilters: [],
}


const UserFilterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_API_SUCCESS:
            return {
                ...state,
                appliedFilters: action.payload
            };
        case all.SORT_BY_ALPHABET:
            const sortByAlphabetState = Object.assign({}, state);
            let sortedAlphabetArr =
                action.payload.direction === "asc"
                    ? sortAsc(state.filteredProducts, "name")
                    : sortDesc(state.filteredProducts, "name");

            sortByAlphabetState.filteredProducts = sortedAlphabetArr;
            sortByAlphabetState.appliedFilters = addFilterIfNotExists(
                all.SORT_BY_ALPHABET,
                sortByAlphabetState.appliedFilters
            );
            sortByAlphabetState.appliedFilters = removeFilter(
                all.SORT_BY_ALPHABET,
                sortByAlphabetState.appliedFilters
            );

            return sortByAlphabetState;
        case all.SORT_BY_PRICE:
            let sortByPriceState = Object.assign({}, state);
            let sortedPriceArr =
                action.payload.direction === "asc"
                    ? sortAsc(state.filteredProducts, "price")
                    : sortDesc(state.filteredProducts, "price");

            sortByPriceState.filteredProducts = sortedPriceArr;
            sortByPriceState.appliedFilters = addFilterIfNotExists(
                all.SORT_BY_ALPHABET,
                sortByPriceState.appliedFilters
            );
            sortByPriceState.appliedFilters = removeFilter(
                all.SORT_BY_PRICE,
                sortByPriceState.appliedFilters
            );

            return sortByPriceState;
        case all.FILTER_BY_PRICE:
            //filter by price
            return state;
        case all.FILTER_BY_VALUE:
            let newState = Object.assign({}, state);
            let value = action.payload.value;
            let filteredValues = state.products.filter(product => {
                return (
                    product.name.toLowerCase().includes(value) ||
                    product.designer.toLowerCase().includes(value)
                );
            });

            let appliedFilters = state.appliedFilters;

            if (value) {
                appliedFilters = addFilterIfNotExists(all.FILTER_BY_VALUE, appliedFilters);

                newState.filteredProducts = filteredValues;
                newState.filteredCount = newState.filteredProducts.length;
                newState.filteredPages = Math.ceil(
                    newState.filteredCount / newState.countPerPage
                );
            } else {
                appliedFilters = removeFilter(all.FILTER_BY_VALUE, appliedFilters);

                if (appliedFilters.length === 0) {
                    newState.filteredProducts = newState.products;
                    newState.filteredCount = newState.filteredProducts.length;
                    newState.filteredPages = Math.ceil(
                        newState.filteredCount / newState.countPerPage
                    );
                }
            }
            return newState;
        case all.LOAD_DATA:
            let count = action.payload.count;
            let countPerPage = action.payload.countPerPage || 5;

            //round up
            let totalPages = Math.ceil(count / countPerPage);

            let products = appliedFilters.data;
            return {
                ...state,
                products,
                filteredProducts: products.slice(0, countPerPage),
                currentCount: countPerPage,
                countPerPage,
                totalCount: count,
                currentPage: 1,
                totalPages: totalPages,
                filteredPages: totalPages
            };
        case all.LOAD_NEW_PAGE:
            //Clone the previous state
            let loadNewPageState = Object.assign({}, state);
            //How many pages should be added. Will always be 1 or -1
            let addPages = action.payload.page;
            //add it to the current
            loadNewPageState.currentPage += addPages;

            let perPage = loadNewPageState.countPerPage; //20 by default

            let nextProducts;
            if (addPages === 1) {
                //Moving from page 1 to 2 will cause ‘upperCount’ to be 40
                let upperCount = loadNewPageState.currentCount + perPage;
                let lowerCount = loadNewPageState.currentCount; //This hasn’t been changed. It will remain 20.

                loadNewPageState.currentCount += loadNewPageState.countPerPage;
                nextProducts = loadNewPageState.products.slice(lowerCount, upperCount);
            }

            if (addPages === -1) {
                let upperCount = loadNewPageState.currentCount; //40
                let lowerCount = loadNewPageState.currentCount - perPage; //20

                loadNewPageState.currentCount -= loadNewPageState.countPerPage;
                nextProducts = loadNewPageState.products.slice(
                    lowerCount - perPage,
                    upperCount - perPage
                );
            }

            loadNewPageState.filteredProducts = nextProducts;
            window.history.pushState(
                { page: 1 },
                "title 1",
                `?page=${loadNewPageState.currentPage}`
            );
            return loadNewPageState;
        case all.LOAD_EXACT_PAGE:
            const exactPageState = Object.assign({}, state);
            const exactPage = action.payload.page;
            let upperCountExact = exactPageState.countPerPage * exactPage;
            let lowerCountExact = upperCountExact - exactPageState.countPerPage;

            let exactProducts = exactPageState.products.slice(
                lowerCountExact,
                upperCountExact
            );
            exactPageState.filteredProducts = exactProducts;
            exactPageState.currentCount = upperCountExact;
            exactPageState.currentPage = exactPage;
            window.history.pushState(
                { page: 1 },
                "title 1",
                `?page=${exactPageState.currentPage}`
            );

            return exactPageState;

        default:
            return state;
    }

};

export default UserFilterReducer;

function sortAsc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return 1;

        if (b[field] > a[field]) return -1;

        return 0;
    });
}

function sortDesc(arr, field) {
    return arr.sort(function (a, b) {
        if (a[field] > b[field]) return -1;

        if (b[field] > a[field]) return 1;

        return 0;
    });
}

function addFilterIfNotExists(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    if (index === -1) appliedFilters.push(filter);

    return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
    let index = appliedFilters.indexOf(filter);
    appliedFilters.splice(index, 1);
    return appliedFilters;
}