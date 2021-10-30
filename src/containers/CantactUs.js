import React from "react";
import "../style/cantact_us.css"
import { ControlNavigator } from "../components/ControlNavigator";
import BlogComponent from "../styled_components/blog";

export default function CantactUs () {
    return(
    <> <ControlNavigator position={"/cantact_us"}/>
           <BlogComponent.CantactUs>
               <div className="contact_header">Contact Us</div>
               <div className="contact_panel">
                   <div className="form">
                  
                   </div>
                   <div className="information">

                   </div>
               </div> 
           </BlogComponent.CantactUs>
    </>
    )
}