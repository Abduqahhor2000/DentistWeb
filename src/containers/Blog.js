import React, { useEffect, useState } from "react";
import "../style/blog.css"
import BlogComponent from "../styled_components/blog";
import ArticleCard from "../components/ArticleCard";
// import MiniArticleCard from "../components/MiniArticleCard";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from "../configs/firebase";
import { useSelector, useDispatch } from "react-redux";
import { addArticles } from "../store/actions/articlesAction";
import Loader from "../components/Loader";

export default function Blog() {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [articles, setArticles] = useState([]);
    const reduxArticles = useSelector((state) => state?.articles?.articles);
     
    useEffect(() => {
        if(isLoading){
            getDoc();
        }
    });
    
    const getDoc = async () => {
        if(reduxArticles?.length > 0){
            setArticles(reduxArticles);
            console.log(reduxArticles);
            setIsLoading(false);
            return;
        }
        try{
            const querySnapshot = await getDocs(collection(db, "articles"));
            let articles = [];
            querySnapshot.forEach((doc) => {
                articles.push( {id: doc.id, ...doc.data()} );
            });
            dispatch(addArticles(articles));
            setIsLoading(false);
        }catch(error){
            console.log(error);
        }
    }

    return(<>
    {isLoading ? <Loader/> : 
        <div className="BlogPage">
            <BlogComponent.LastArticle>
                 <div className="blog_card">
                    <h1>Last Articles</h1>
                    {articles.map((item) => {
                        return(
                            <>
                                <ArticleCard article={item} key={item.id} />
                            </>
                        )
                    })}
                </div> 
            </BlogComponent.LastArticle>
            {/* <BlogComponent.YouLikeArticles>           
                <div className="YouLike">
                    <h2>These You Like</h2>
                    <MiniArticleCard />
                    <MiniArticleCard />
                    <MiniArticleCard />
               </div><br/>
                <div className="MostRead">
                    <h2>Read A Lot</h2>
                    <MiniArticleCard />
                    <MiniArticleCard />
                    <MiniArticleCard />
                 </div>
            </BlogComponent.YouLikeArticles>  */}
        </div>}
    </>);      
}