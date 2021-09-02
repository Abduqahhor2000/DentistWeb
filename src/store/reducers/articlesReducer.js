import * as actionTypes from "../actionTypes";

const initialState = {
    articles: [],
}

const articlesReducer = (state = initialState, action) => {
    const articles = action?.payload;

    switch(action.type) {
        case actionTypes.ADD_ARTICLES:{
            return{
               articles: articles ? articles : [],
            }
        }
        case actionTypes.CLEAR_ARTICLES:{
            return initialState;
        }
        default: {
            return state;
        }
    }

}

export default articlesReducer;