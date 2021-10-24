import React from "react";
import "../style/settings.css"
import {ControlNavigator} from "../components/ControlNavigator";

export default function Settings () {
    return(
    <>  <ControlNavigator position={"/settings"}/>
        <div className="coming-soon">
            <h1>Coming soon...</h1>
        </div>
    </>
    )
}