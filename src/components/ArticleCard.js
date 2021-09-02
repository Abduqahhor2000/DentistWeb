import React from "react";
import {BsFillHeartFill, BsHeart, FaShareAlt, BsEye, CgComment} from "react-icons/all";

export default function ArticleCard(props) {
    const article = props.article;

    return(
        <>
            <div className="card">
                <div className="photo">
                    <img style={{backgroundImage: `url(${article.text.banner.photo})`}} alt="" />
                </div>
                <div className="blog_mean">
                    <div className="title">
                        <h2>{article.text.headerText}</h2>
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
        </> 
    )
}


/*
<>
//     <div className="card">
//         <div className="photo">
//             <img style={{backgroundImage: `url("https://media.istockphoto.com/photos/healthcare-and-medicine-concept-picture-id1147579605")`  }} alt="" />
//         </div>
//         <div className="blog_mean">
//             <div className="title">
//                 <h2>Salomatlik bu harakat garovi. shunday ekan. yotib damingizni oling.</h2>
//             </div>
//             <div className="status">
//                 <div className="info">
//                     <span className="date">31.08.2021</span>
//                     <span><BsEye className="view"/> 142</span>
//                     <span><CgComment className="comment"/> 5</span>
//                 </div>
//                 <div className="like_share">
//                     <div>
//                         <BsFillHeartFill className="like liked Display_none"/>
//                         <BsHeart className="like"/>
//                         <span> 73</span>
//                     </div>
//                     <div>
//                         <FaShareAlt className="share"/>
//                     </div>
//                 </div>
//             </div>
//             <div className="text">
//                 <p>
//                     It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like...
//                 </p>
//             </div> 
//         </div>
//     </div>       
//    </>
*/