import React from "react";
import BlogComponent from "../styled_components/blog";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function ViewArticle () {
    const params = useParams();

    const articleuseSelector


    

    return(
        <div>
            <BlogComponent.ViewArticle>
                <div>
                    <div>
                       
                    </div>
                    <div className="comments">

                    </div>
                </div>
                <div>

                </div>
            </BlogComponent.ViewArticle>
        </div>
    )
}