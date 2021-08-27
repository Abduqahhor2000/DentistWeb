import * as actionTypes from "../actionTypes";

const initialState = {
    token: null,
    user: {}
}

const userIdReducer = (state = initialState, action) => {
    const user = action?.payload?.user;

    switch(action.type) {
        case actionTypes.ADD_USER_ID:{
            return{
                token: user?.uid,
                user: user ? user : {},
            }
        }
        case actionTypes.CLEAR_USER_ID:{
            return initialState;
        }
        default: {
            return state;
        }
    }

}

export default userIdReducer;