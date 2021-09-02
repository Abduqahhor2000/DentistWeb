import * as actionTypes from "../actionTypes";

export const addArticles = (payload) => {
    return {
        payload,
        type: actionTypes.ADD_ARTICLES,
    }
}
export const clearArticles = () => {
    return {
        type: actionTypes.CLEAR_ARTICLES,
    }
}