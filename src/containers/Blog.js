import React from "react";
import "../style/blog.css"
import BlogComponent from "../styled_components/blog";
import {BsFillHeartFill, BsHeart, FaShareAlt, BsEye} from "react-icons/all";

export default function Blog() {

    return(
    <div className="isAllBlog">
        <BlogComponent.LastArticle>
            <div className="blog_card">
                <h1>Oxirgi maqola</h1>
                <div className="card">
                    <div className="photo">
                        <img src="https://media.istockphoto.com/photos/healthcare-and-medicine-concept-picture-id1147579605" alt="" />
                    </div>
                    <div className="blog_mean">
                        <div className="title">
                            <h2>Salomatlik bu harakat garovi. shunday ekan. yotib damingizni oling.</h2>
                        </div>
                        <div className="status">
                            <div className="info">
                                <span className="date">31.08.2021</span>
                                <span><BsEye className="view"/> 142</span>
                            </div>
                            <div className="like_share">
                                <div>
                                    <BsFillHeartFill className="like liked Display_none"/>
                                    <BsHeart className="like"/>
                                    <span> 73</span>
                                </div>
                                <div>
                                    <FaShareAlt className="share"/>
                                </div>
                            </div>
                        </div>
                        <div className="text">
                            <p>
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like...
                            </p>
                        </div> 
                    </div>
                </div>       
            </div>
        </BlogComponent.LastArticle>
        <div>
            dsdddddddddddddddddddddddd
        </div>
    </div>
    );      
}