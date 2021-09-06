import React from "react";
import {BsFillHeartFill, BsHeart, FaShareAlt, BsEye, CgComment} from "react-icons/all";
import { Link } from "react-router-dom";

export default function ArticleCard(props) {
    const article = props.article;

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
                            <span className="date">31.08.2021</span>
                            <span><BsEye className="view"/> 142</span>
                            <span><CgComment className="comment"/> {article.data.comments.length}</span>
                        </div>
                        <div className="like_share">
                            <div>
                                <BsFillHeartFill className="like liked Display_none"/>
                                <BsHeart className="like"/>
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


