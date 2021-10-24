import React from "react";
import "../style/services.css";
import {ControlNavigator} from "../components/ControlNavigator";

export default function Services () {
    return(
    <>  <ControlNavigator position={"/services"}/>
        <div className="coming-soon">
            <h1>Coming soon...</h1>
        </div>
    </>
    )
}