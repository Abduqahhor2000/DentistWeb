import React from "react";
import {ControlNavigator} from "../components/ControlNavigator";

export default function Admin () {
    return(
        <> <ControlNavigator position={"/admin"}/>
            <div className="coming-soon">
                <h1>Coming soon...</h1>
            </div>
        </>
    );
}