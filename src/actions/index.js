

import { apiCall } from "../api";
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./actionTypes";


export const fetchRedditData = () => ({
    type: FETCH_POST_REQUEST,
    
});

export const fetchRedditSuccess = (post) => ({
    type: FETCH_POST_SUCCESS,
    payload: post,
});

export const fetchRedditFailure = (error) => ({
    type: FETCH_POST_FAILURE,
    payload: error,
});

export const fetchPost = () => {
    return (dispatch) => {
        dispatch(fetchRedditData());
        apiCall()
   
        .then(response => {
            const post = response.data[0].data.children[0].data;
            dispatch(fetchRedditSuccess(post));
        })
        .catch(error => {
            dispatch(fetchRedditFailure(error.message));
        })
    }
}