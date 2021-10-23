import * as actionTypes from "../actionTypes";

const initialState = {
    navigator: "/home"
}

const controlNavigator = (state = initialState, action) => {
    const navigator = action?.payload;

    switch(action.type) {
        case actionTypes.ADD_POSITION:{
            return{
               navigator: navigator ? navigator : "/home",
            }
        }
        default: {
            return state;
        }
    }

}

export default controlNavigator;