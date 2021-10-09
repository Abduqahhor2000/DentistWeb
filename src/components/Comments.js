import React, { useState } from "react";
import { FaRegCommentDots, BiSend } from "react-icons/all";
import { timeConverteToString } from "./HelperFunctions";
import { doc, getDoc, Timestamp, updateDoc } from "@firebase/firestore";
import { db } from "../configs/firebase";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";

export const Comments = (props) => {
    const history = useHistory();
    const user = useSelector((state) => state?.user?.user);
    const token = useSelector((state) => state?.user?.token);
    const [allComments, setAllComments] = useState(props.article.data.comments);
    const [commentsLimit, setCommentsLimit] = useState(15);
    const [showComments, setShowComments] = useState();
    const articleID = props.ID;
    const [comment, setComment] = useState({
        createdBy: {
            userName: "",
            photo: "",
            createdAt: "",
        },
        text: "",
    });

    useEffect(()=>{
        
    }, []);
    useEffect(()=>{
        commentsLimitFunc();
    }, [commentsLimit]);

    const commentsLimitFunc = () => {
        let arr = [];
        if (allComments.length <= commentsLimit){
            for ( let i = 0; i < allComments.length; i++ ){
                arr.push(allComments[i]);
            }
            setShowComments(arr);
            return;
        }
        for ( let i = 0; i < commentsLimit; i++ ){
            arr.push(allComments[i]);
        }
        setShowComments(arr);  
        return;
    }

    const onChangeInput = (e) => {
        const text = e.target.value;
        setComment({
            createdBy: {
                userName: user.displayName,
                photo: user.photoURL,
                createdAt: Timestamp.fromDate(new Date()),
            },
            text: text,
        });
    }

    const writeComment = async () => { 
        if(!token){
            history.push("/sign-in");
            return;
        }
        let docSnap;
        console.log(comment);
        try{
            const docRef = doc(db, "articles", articleID);
            const docs = await getDoc(docRef);
            console.log("salolaaaar", docs.data());  
            docSnap =  docs.data();
        }catch(error){
            console.log(error)
        }

        try{
            const write_comment = doc(db, "articles", articleID);
            await updateDoc(write_comment, {
                data:{
                    comments: [comment, ...docSnap.data.comments],
                    view: docSnap.data.view, 
                    createdAt: docSnap.data.createdAt,       
                    likes: docSnap.data.likes,   
                    updateAt: docSnap.data.updateAt,    
                }
            });
            setAllComments(() => [comment, ...docSnap.data.comments]);
        }catch(error){
            console.log(error)
        }
        setComment({text: ""});
    }

    return (
        <div className="comments">
            <div className="input">
                <div><span className="comment_icon"><FaRegCommentDots/></span><span>Comments</span></div>
                <input name="text" value={comment.text} onChange={onChangeInput} type="text" placeholder="Write comment here..."></input>
                <span onClick={writeComment} className="send-icon"><BiSend className="sendIcon" /></span>
            </div>  
            <div className="text">
                {showComments.map((item, index) => {
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
   );
}