import React from "react";
import ReactLoading from 'react-loading';

export default function Loader () {
 
    const Example = (type, color) => (
        <ReactLoading  type={type} color={color} height={"100%"} width={"100%"} />
    );

    return(
        <div className="loading_container">
            <div className="loader">
                {Example("bars", "#dadada")} 
            </div>
        </div> 
    );
}