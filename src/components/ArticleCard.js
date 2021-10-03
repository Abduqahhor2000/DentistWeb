import React, { useEffect, useState } from "react";
import {BsFillHeartFill, BsHeart, FaShareAlt, BsEye, CgComment} from "react-icons/all";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { timeConverteToStringNumber } from "./HelperFunctions";

export default function ArticleCard(props) {
    const article = props.article;
    const [isLike, setIsLike] = useState(false);
    const [isLikeControl, setIsLikeControl] = useState(true);
    const userID = useSelector((state) => state?.user?.token);

    const isLiked = () => {
        console.log("shuuuuu", article);
        if(userID){
            article.data.likes.map((item) => {
                if(item === userID){
                    setIsLike(true);
                    return true;
                }
                return false;
            });
        }else{
            setIsLike(false);
        }      
        setIsLikeControl(false);
    }

    useEffect(() => {
        if(isLikeControl) {
           isLiked();
        }
    });

    return(
        <div key={article.id}>
            <div className="card" >
                <div className="photo">
                    <Link to={`/blog/${article.id}`}><img style={{backgroundImage: `url(${article.text.banner.photo})`}} alt=""/></Link>
                </div>
                <div className="blog_mean">
                    <div className="title">
                    <Link to={`/blog/${article.id}`}><h2>{article.text.headerText}</h2></Link>
                    </div>
                    <div className="status">
                        <div className="info">
                            <span className="date">{timeConverteToStringNumber(article.data.createdAt.seconds)}</span>
                            <span><BsEye className="view"/> {article?.data?.view}</span>
                            <span><CgComment className="comment"/> {article.data?.comments?.length}</span>
                        </div>
                        <div className="like_share">
                            <div>
                                <BsFillHeartFill className={`like liked ${isLike ? "" : "Display_none"}`} />
                                <BsHeart className={`like ${isLike ? "Display_none" : ""}`}/>
                                <span> {article.data.likes.length}</span>
                            </div>
                            <div>
                                <FaShareAlt className="share"/>
                            </div>
                        </div>
                    </div>
                    <div className="text">
                        <p>
                            {article.text.banner.text}
                       </p>
                    </div> 
                </div>
            </div>   
        </div> 
    )
}


