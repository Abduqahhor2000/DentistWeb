import React, { useEffect, useState } from "react";
import BlogComponent from "../styled_components/blog";
import { useParams } from "react-router";
import { useSelector } from "react-redux";

export default function ViewArticle () {
    const params = useParams();
    console.log(params);
    const [converted, setCanverted] = useState([]);
    
    
    const article =  useSelector(async (state) => { 
        const demoData = await state.articles.articles.find( (item) => {
            if(item.id === params.id){
                return true;
            }
            return false;
        });

        return demoData;
    });

    console.log( article);
    console.log( article);
    
    const converting = () => {  
        const convertation = article.text.meanText.map((item) => {
            switch(item.type) {
                case "text": {
                    return (<div><p>{item.text}</p></div>)
                }   
                case "video": {
                    return (<div><iframe width="932" height="524" src={item.videoURL} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>)
                }  
                case "photo": {
                    return (<div><div style={{backgroundImage: `url(${item.photoURL})`, width: "600px", height: "400px"}}></div></div>)
                }
                default: {
                    return null;
                }
            }
        });
        setCanverted(convertation);
    }

    
    useEffect(() => {
        converting();
    }, [])
    
    
    return(
        <div>
            <BlogComponent.ViewArticle>
                <div>
                    <div>
                        <div>
                            <h2>{article.text.headerText}</h2>
                        </div>
                        {converted}
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