import { FETCH_POSTS } from './types';
import Axios from 'axios';

export function fetchPosts(){
    return function(dispatch){
        Axios('https://jsonplaceholder.typicode.com/posts')
        // .then(res => res.json())
        .then(postReducer => dispatch({
            type: FETCH_POSTS,
            payload: postReducer
        }))
    }
}