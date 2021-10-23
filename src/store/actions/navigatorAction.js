import * as actionTypes from "../actionTypes";

export const addNavigatorPosition = (payload) => {
    return {
        payload,
        type: actionTypes.ADD_POSITION,
    }
}
