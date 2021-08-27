import * as actionTypes from "../actionTypes";

export const addUserID = (payload) => {
    return {
        payload,
        type: actionTypes.ADD_USER_ID,
    }
}
export const clearUserID = () => {
    return {
        type: actionTypes.CLEAR_USER_ID,
    }
}