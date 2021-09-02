import React from "react";
import "../style/blog.css"
import BlogComponent from "../styled_components/blog";
import ArticleCard from "../components/ArticleCard";
// import MiniArticleCard from "../components/MiniArticleCard";
// import { collection, getDocs } from "firebase/firestore"; 
// import { db } from "../configs/firebase";
// import { useState } from "react";

export default function Blog() {
    // const [data, setData] = useState([]);
    
    // const getDoc = async () => {
    //     try{
    //         const querySnapshot = await getDocs(collection(db, "articles"));
    //         querySnapshot.forEach((doc) => {
    //              setData([...data, doc.data()]);
    //         })
    //     }catch(error){
    //         console.log(error);
    //     }
    // }

    return(
    <div className="BlogPage">
        <BlogComponent.LastArticle>
            {/* <div className="blog_card">
                <h1>Last Articles</h1>
                <button onClick={getDoc}>Geeeet!</button>
                {data.map((item) => {
                    return(
                        <>
                            <ArticleCard article={item} />
                        </>
                    )
                })}
            </div>  */}
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
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
    </div>
    );      
}