
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "../actions/actionTypes";

const initalState = {
    loading: false,
    post: {},
    error: '',
};

const RedditReducer = (state = initalState, action) =>{
    switch(action.type){
        case FETCH_POST_REQUEST:
            return {...state, loading: true };
        case FETCH_POST_SUCCESS:
            return {loading: false, post:action.payload, error:'' };
         case FETCH_POST_FAILURE:
             return {loading: false, post: {}, error: action.payload };
        
        default:
            return state;
    }
};

export default RedditReducer;