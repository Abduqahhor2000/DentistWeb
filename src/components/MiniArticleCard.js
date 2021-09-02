import React from "react";
import {BsFillHeartFill, BsHeart, FaShareAlt, BsEye, CgComment} from "react-icons/all";

export default function MiniArticleCard(props) {
    return(
        <>
            <div className="card">
                <div className="photo">
                    <img style={{backgroundImage: `url("https://media.istockphoto.com/photos/healthcare-and-medicine-concept-picture-id1147579605")` }} alt="" />
                </div>
                <div className="blog_mean">
                    <h4>Shunday bo'lib turadi endi. nishetasan axir. asta asta bo'luvradi biyag'ina</h4>
                    <div className="status">
                        <div className="info">
                            <span className="date">31.08.2021</span>
                            <span><BsEye className="view"/>142</span>
                            <span><CgComment className="comment"/>5</span>
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
                </div>
            </div>
        </>
    )
}


