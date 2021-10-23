import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNavigatorPosition } from "../store/actions/navigatorAction";

export default function controlNavigator (props) {
    const dispatch = useDispatch();
    const navigatorPosition = useSelector(state => state.navigator.navigator);
    console.log("shuuuuu", navigatorPosition);
    
    if (navigatorPosition === props) {
       return;
    }
    
    dispatch(addNavigatorPosition(props));

    return(
        <>
        </>
    );
}