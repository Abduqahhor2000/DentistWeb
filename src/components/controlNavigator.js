import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNavigatorPosition } from "../store/actions/navigatorAction";

export const ControlNavigator = (props) => {
    const dispatch = useDispatch();
    const navigatorPosition = useSelector(state => state?.navigator?.navigator);
    console.log("shuuuuu", navigatorPosition);
    
    if (navigatorPosition.position === props.position) {
       return;
    }
    
    dispatch(addNavigatorPosition(props.position));

    return(
        <>
        </>
    );
};