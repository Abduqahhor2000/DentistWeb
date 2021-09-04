import React, { useEffect, useState } from "react";
import BlogComponent from "../styled_components/blog";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { doc, getDoc } from "firebase/firestore"; 
import { db } from "../configs/firebase";

export default function ViewArticle () {
    const params = useParams();
    console.log(params);
    const [converted, setCanverted] = useState([]);
    const [isLoading, setIsLoading] = useState({});
    const [article, setArticle] = useState();
    const mamArticle =  useSelector((state) => { 
        if (state?.articles?.articles){
            const demoData = state.articles.articles.find((item) => {
                if(item.id === params.id){
                    return true;
                }
                return false;
            });
            return demoData;
        }
        return false; 
    });
    
    const getArticle = async () => {
        try{
            if(mamArticle){
                setArticle(mamArticle);
            }
            const docRef = doc(db, "articles", params.id);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            setArticle(docSnap.data());
        }catch (error){
            console.log(console.log("bu o'sha", error))
        }
    }
    
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
        setIsLoading(false);
    }

    
    useEffect(() => {
        if(isLoading){
            getArticle();
            if(article){
                converting();
            }
        }
       
    });
    
    
    return(
        <>
            {isLoading ? <div>salom</div> :
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
                </div>}
        </>
        
    )
}