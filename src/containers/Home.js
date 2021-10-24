import React from "react";
import "../style/home.css"
import {ControlNavigator} from "../components/ControlNavigator";

export default function Home () {
    return(
    <>  <ControlNavigator position={"/home"}/>
        <div className="coming-soon">
            <h1>Coming soon...</h1>
        </div>
    </>
    )
}