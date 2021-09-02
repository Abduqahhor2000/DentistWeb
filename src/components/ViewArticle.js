import React, { useState } from "react";
import BlogComponent from "../styled_components/blog";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function ViewArticle () {
    const params = useParams();
    const [converted, setCanverted] = useState([]);

    const article = useSelector((state) => { 
        return  state.articles.articles.find( (item) => {
                    if(item.id === params.id){
                        return true;
                    }
                    return false;
                })
    });
    
    const converting = () => {
        setCanverted([...converted, ]);
    }


    

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