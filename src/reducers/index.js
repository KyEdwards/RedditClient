
import { combineReducers } from "redux";
import RedditReducer from "./redditReducer";



const allReducers = combineReducers({
    post: RedditReducer

})

export default allReducers;