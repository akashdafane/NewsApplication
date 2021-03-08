// const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
// const FILTER_BY_VALUE = "FILTER_BY_VALUE";
// const LOAD_DATA = "LOAD_DATA";
// const LOAD_NEW_PAGE = "LOAD_NEW_PAGE";
// const LOAD_EXACT_PAGE = "LOAD_EXACT_PAGE";

import { Promise } from "es6-promise";



// export const sortByAlphabet = payload => ({
//     type: SORT_BY_ALPHABET,
//     payload
// });

// export const filterByValue = payload => ({
//     type: FILTER_BY_VALUE,
//     payload
// });

// export const loadData = (payload) => ({
//     type: LOAD_DATA,
//     payload
// });

// export const loadNewPage = (payload) => ({
//     type: LOAD_NEW_PAGE,
//     payload
// });

// export const loadExactPage = (payload) => ({
//     type: LOAD_EXACT_PAGE,
//     payload
// });

// export default UserFilterAction;


// export const SET_SORT = 'SET_SORT';

// const setSort = (sortDirection, sortKey) => ({
//     type: SET_SORT,
//     sortDirection,
//     sortKey,
// });

// export const sort = (sortDirection = 'desc', sortKey = 'create_at') => dispatch => {
//     dispatch(setSort(sortDirection, sortKey));
//     return Promise.resolve();
// }

import Axios from 'axios';
export const FETCH_PHOTOS = 'FETCH_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';
export const SET_SORT = 'SET_SORT';


const testPhotos = [
  {
    id: '789',
    created_at: '2018-07-14T21:18:44-04:00'
  },
  {
    id: '456',
    created_at: '2018-08-29T21:18:44-04:00'
  },
    {
    id: '123',
    created_at: '2018-08-14T21:18:44-04:00'
  },
];

export const fetchPhotos = (dispatch) => {
    Axios('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return dispatch({ type: FETCH_PHOTOS, payload: res})
    })

//   type: FETCH_PHOTOS

}


const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

const setSort = (sortDirection, sortKey) => ({
  type: SET_SORT,
  sortDirection,
  sortKey
});

export const unsplash = () => dispatch => {
  dispatch(fetchPhotos());

  setTimeout(() => {
    // dispatch(receivePhotos(testPhotos));
    // dispatch(fetchPhotos());
    return Promise.resolve();
  }, 1000)
};

export const sort = (sortDirection = 'desc', sortKey = 'created_at') => dispatch => {
  dispatch(setSort(sortDirection, sortKey));
  return Promise.resolve();
};