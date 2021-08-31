import React from "react";
import "../style/blog.css"
import BlogComponent from "../styled_components/blog";

export default function Blog() {

    return(
    // <div>
        <BlogComponent.LastArticle>
            <h1>Oxirgi maqola</h1>
            <div className="card">
                <div className="photo">

                </div>
                <div className="mean">
                    <div className="title">
                        <h2>Salomatlik bu harakat garovi. shunday ekan. yotib damingizni oling.</h2>
                    </div>
                    <div className="text">
                        <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like...
                        </p>
                    </div> 
                    <div className="status">
                    </div>
                </div>
            </div>
        </BlogComponent.LastArticle>
    // </div>
    );      
}