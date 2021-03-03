const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const LOAD_DATA = "LOAD_DATA";
const LOAD_NEW_PAGE = "LOAD_NEW_PAGE";
const LOAD_EXACT_PAGE = "LOAD_EXACT_PAGE";



export const sortByAlphabet = payload => ({
    type: SORT_BY_ALPHABET,
    payload
});

export const filterByValue = payload => ({
    type: FILTER_BY_VALUE,
    payload
});

export const loadData = (payload) => ({
    type: LOAD_DATA,
    payload
});

export const loadNewPage = (payload) => ({
    type: LOAD_NEW_PAGE,
    payload
});

export const loadExactPage = (payload) => ({
    type: LOAD_EXACT_PAGE,
    payload
});

// export default UserFilterAction;