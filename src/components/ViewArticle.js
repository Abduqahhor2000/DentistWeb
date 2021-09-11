import React, { useEffect, useState } from "react";
import BlogComponent from "../styled_components/blog";
import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { doc, getDoc, updateDoc } from "firebase/firestore"; 
import { db } from "../configs/firebase";
import { BsEye, 
         CgComment,
         BsFillHeartFill,
         BsHeart,
         FaShareAlt,
         BiSend,
         FaRegCommentDots } from "react-icons/all";

const timeConverteToString = (ts) => {
    console.log(ts);
    const time = new Date(ts * 1000);
    const [day, month, year] = [time.getDate(), time.getMonth(), time.getFullYear()];
    console.log(year);
    let monthName = "";
    switch(month){
        case 0: monthName = "january";  break; 
        case 1: monthName = "february"; break;
        case 2: monthName = "march";    break;
        case 3: monthName = "april";    break;
        case 4: monthName = "may";      break;
        case 5: monthName = "june";     break;
        case 6: monthName = "july";     break;
        case 7: monthName = "august";   break; 
        case 8: monthName = "september";break; 
        case 9: monthName = "oktober";  break; 
        case 10: monthName = "november";break; 
        case 11: monthName = "december";break; 
        default: monthName= "";   
    }
    return `${day} ${monthName} ${year}`;
} 

export default function ViewArticle () {
    const params = useParams();
    console.log(params);
    const [isView, setIsView] = useState(false);
    const [converted, setCanverted] = useState();
    const [isLoading, setIsLoading] = useState();
    const [getLoading, setGetLoading] = useState(true);
    const [article, setArticle] = useState();
    const mamArticle =  useSelector((state) => { 
        if (state?.articles?.articles){
            const demoData = state.articles.articles.find((item) => {
                if(item.id === params.id){
                    return true;
                }
                return false;
            });
            console.log(demoData);
            return demoData;
        }
        return false; 
    });


    const articleIsView = async () => {
        setIsView(true); 
        try{
            const docRef = doc(db, "articles", params.id);
            const docs = await getDoc(docRef);
            console.log("salolaaaar", docs.data());  
            const docSnap =  docs.data();

            const article_view = doc(db, "articles", params.id);
            await updateDoc(article_view, {
                data:{
                    coments: docSnap.data.coments,
                    view: docSnap.data.view + 1, 
                    createdAt: docSnap.data.createdAt,       
                    likes: docSnap.data.likes,   
                    updateAt: docSnap.data.updateAt,    
                }
            });
        }catch(error){
            console.log(error)
        }
    }
    
    const getArticle = async () => {  
        setGetLoading(false);
        if(mamArticle){
            setArticle(mamArticle);
            setIsLoading(true);
            return;
        }
       
        try{
            const docRef = doc(db, "articles", params.id);
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
            setArticle(docSnap.data());
            setIsLoading(true);
        }catch (error){
            setIsLoading(true);
            console.log(console.log("bu o'sha", error))
        }
    }
    
    const converting = () => {  
        const convertation = article.text.meanText.map((item) => {
            switch(item.type) {
                case "text": {
                    return (<div className="text"><p>{item.text}</p></div>)
                }   
                case "video": {
                    return (<div className="video"><iframe src={item.videoURL} title="YouTube video player" allowFullScreen></iframe></div>)
                }  
                case "photo": {
                    return (<div className="article_photo"><img src={item.photoURL} alt="Bu yerda rasm bor edi." ></img></div>)
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
        if(getLoading){
            getArticle();
        } 
        if(isLoading){
            converting();
        }
        if(!isView){
            articleIsView();
        }
    });
    
    return(
        <>
            {!converted ? <div>salom</div> :
                <>
                    <BlogComponent.ViewArticle>
                        <div className="article_window">
                            <div className="article">
                                <div className="header_text">
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
                                {converted.map((item, index) => {
                                    return <div key={index}>{item}</div>
                                })}
                            </div>
                             <div className="comments">
                                <div className="input">
                                    <div><span className="comment_icon"><FaRegCommentDots/></span><span>Comments</span></div>
                                    <input type="text" placeholder="Write comment here..."></input>
                                    <button><span className="send-icon"><BiSend /></span></button>
                                </div>  
                                <div className="text">
                                    {article.data.comments.map((item, index) => {
                                        console.log(item);
                                        return (<div className="comment" key={index}>
                                                    <div className="comment_header">
                                                        <div className="Image" style={{backgroundImage: `url(${item.createdBy.photo})`, width: "50px", height: "50px"}}></div>
                                                        <div className="Name">{item.createdBy.userName}</div>
                                                    </div>
                                                    <p>{timeConverteToString(item.createdBy.createdAt.seconds)}</p>
                                                    <div className="comment_text">{item.text}</div>
                                                </div>);
                                    })}
                                </div> 
                            </div> 
                        </div>
                        <div className="other_window">
        
                        </div>
                    </BlogComponent.ViewArticle>
                </>}
        </>
        
    )
}