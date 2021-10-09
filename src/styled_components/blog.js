import styled from "styled-components";

const BlogComponent = {};

BlogComponent.LastArticle = styled.section`
    & {
        width: 820px;
        min-width: 300px;
        height: auto;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        align-items: center;
        @media (max-width: 1220px){
            flex-direction: column;
        }
        @media (max-width: 1100px){
            
        }
        @media (max-width: 899px){
            width: 360px;
            flex-direction: column;
        }
        @media (max-width: 500px){
            width: 300px;
        }
        
        h1{
            font-size: 24px;
            margin: 20px 0 10px;
            font-family: 'Acme', sans-serif;
        }
        
        .card {
            width: 100%;
            min-width: 300px;
            height: auto;
            background-color: white;
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            flex-wrap: wrap;
            border-radius: 5px;
            overflow: hidden;
            box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
            margin-bottom: 20px;
            @media (max-width: 899px){
                width: 360px;
                flex-direction: column;
            }
            @media (max-width: 500px){
                width: 300px;
            }
        }
     
        .blog_mean {
            width: 450px;
            height: 240px;
            padding: 15px;
            align-self: center;
            @media (max-width: 899px){
                width: 100%;
                height:auto;
            }
            
            h2 {
                margin: 0;
                line-height: 22px;
                margin-bottom: 5px;
            }
        }
     
        .photo{
            width: 360px;
            min-width: 300px;
            height: 240px;
            background-color: #3b3b3b;
            @media (max-width: 500px){
                width: 300px;
                height:200px;
            }
     
            img {
                display: block;
                position: relative;
                width: 100%;
                height: 100%;
                background-color: rgb(15, 37, 37);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }
    
        .status{
            width: 100%;
            display: flex;
            justify-content: space-between;
            color: #b3b3b3;
            margin-bottom: 10px;
        }
        .info{
            width: 180px;
            display: flex;
            justify-content: space-between;
            align-items:center;
        }
    
        .view{
            font-size: 16px;
            color: #979797;
            position: relative;
            top: 2px;
        }
    
        .like_share{
            width: 100px;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
    
        .like{
            font-size: 16px;
            color: #ff4949;
            position: relative;
            top: 4px;
        }
    
        .share{
            width: 25px;
            font-size: 16px;
            color: #1d59ce;
            position: relative;
            top: 3px;
        }

        .comment{
            width: 25px;
            font-size: 16px;
            color: #979797;
            position: relative;
            top: 3px;
        }

   }

  
`;

BlogComponent.YouLikeArticles = styled.section`
    & {
        width: 300px;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        @media (max-width: 1220px){
            width: 810px;
            flex-direction: row;
            justify-content: space-around;
            align-items: flex-start;
        }
        @media (max-width: 899px){
            width: 300px;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
        }
       
        h2{
            font-size: 24px;
            margin: 20px 0 10px;
            font-family: 'Acme', sans-serif;
        } 

        .card {
            width: 300px;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            background-color: white;
            box-shadow: 0px 5px 6px -3px rgba(0, 0, 0, 0.2);
            margin-bottom: 10px;
        }

        .photo{
            width: 300px;
            height: 200px;

            img {
                display: block;
                position:relative;
                width: 100%;
                height: 100%;
                background-color: rgb(15, 37, 37);
                background-position: center;
                background-repeat: no-repeat;
                background-size: cover;
            }
        }

        .blog_mean{
            width: 100%;
            height:auto;
            padding:10px;

            h4{
                font-size: 16px;
                line-height: 20px;
            }

            .status{
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
                color: #979797;
                margin: 5px 0 10px;

                .info{
                    display: flex;
                    justify-content: space-between;
                    width: 170px;

                    .comment{
                        width: 25px;
                        font-size: 16px;
                        position: relative;
                        top: 3px;    
                    }

                    .view {
                        font-size: 16px;
                        position: relative;
                        top: 3px; 
                    }
                }

                .like_share{
                    display: flex;
                    justify-content: space-around;
                    width: 80px;

                    .like{
                        font-size: 16px;
                        position: relative;
                        top: 3px; 
                        color: #ff4949;
                    }

                    .share{
                        width: 25px;
                        font-size: 16px;
                        color: #1d59ce;
                        position: relative;
                        top: 2px;
                    }
                }
            }
        }
    }
`;

BlogComponent.ViewArticle = styled.section`
    & {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: top;

        .article_window{
            width: calc(100% - 200px);
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            padding: 0 20px;

            @media (max-width: 1000px){
                width: 95%;
                padding: 0;
            }
            
            .article{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
               

                .header_text{
                    width: 100%;
                    margin: 0;

                    h2{
                        font-size: 30px;
                        line-height: 36px;
                    }
                }
                .status{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: #979797;
                    margin: 5px 0 30px;

                    .info{
                        display: flex;
                        justify-content: space-between;
                        width: 220px;
    
                        .comment{
                            width: 25px;
                            font-size: 16px;
                            position: relative;
                            top: 3px;    
                        }
    
                        .view {
                            font-size: 16px;
                            position: relative;
                            top: 3px; 
                        }
                    }
    
                    .like_share{
                        display: flex;
                        justify-content: space-around;
                        width: 25%;

                        .like_blok{       
                            &:hover {
                                cursor: pointer;
                            }
                            

                            .like, .liked{
                                font-size: 16px;
                                position: relative;
                                top: 3px; 
                                color: #ff4949;
                            }
                        }
    
                        .share{
                            width: 25px;
                            font-size: 16px;
                            color: #1d59ce;
                            position: relative;
                            top: 2px;
                        }
                    }
                }
                .text{
                    width: 100%;
                    margin-bottom: 20px;

                    p{
                        font-size: 18px;
                    }
                }
                .article_photo{
                    width: 100%;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    img{
                        width: 100%;
                        height: auto;
                    }
                }
                .video{
                    width: 100%;
                    margin-bottom: 20px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    iframe{
                        width: 100%;
                        height: 400px;

                        @media (max-width: 900px){
                            height: 300px;
                        }
                        @media (max-width: 700px){
                            height: 200px;
                        }
                    }
                }
            
            }
            .comments{
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                

                .input{
                    width: 700px;
                    height: auto;
                    background-color: #0c2556;
                    padding: 10px;
                    border-radius: 10px 10px 0 0;
                    position: relative;

                    @media (max-width: 1200px){
                        width: 100%;
                    }

                    div{
                        display: flex;
                        justify-content: flex-start;
                        align-items: center;
                        margin-bottom: 10px;

                        span{
                            font-size: 22px;
                            color: white;
                            margin-right: 10px;
                        }
                        .comment_icon{
                            position: relative;
                            top: 1px;
                        }
                    }
                    input{
                        display: inline-block;
                        width: calc(100% - 60px);
                        padding-left: 10px;
                        height: 40px;

                    }
                    .send-icon{
                        display: block;
                        width: 60px;
                        height: 45px;
                        font-size: 40px;
                        position: absolute;
                        top: 51px;
                        right: 0px;
                        background-color: white;
                        color: #0c2556;



                        &:hover {
                            color: #0157ff;
                            cursor: pointer;
                        }

                        .sendIcon{
                            position: relative;
                            right: 0px;
                            top: -4px;
    
                        }
                    }
                }
                .text{
                    width: 700px;
                    height: auto;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    margin-top: 20px;
                    align-items: flex-end;
                    
                    @media (max-width: 1200px){
                        width: 100%;
                    }

                    .comment{
                        width: calc(100% - 60px);
                        height: auto;
                        background-color: #e3eeff;
                        border-radius: 10px;
                        margin-bottom: 20px;
                        padding: 0 15px 15px;

                        .comment_header{
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;
                            position: relative;
                            left: -75px;

                            .Image{
                                width: 50px;
                                height: 50px;
                                border-radius: 50%;
                                background-color: rgb(15, 37, 37);
                                background-position: center;
                                background-repeat: no-repeat;
                                background-size: cover;
                                margin-right: 25px;
                            }
                            .Name{
                                font-size: 22px;
                                font-weight: 600px;
                            }
                        }
                        p{
                            margin-top: -12px;
                            margin-bottom: 5px;
                            font-size: 12px;
                            color: #8f92ff;
                        }
                        .comment_text{
                            font-size: 16px;
                            font-family: 'Lora', serif;
                            overflow-x: hidden;
                        }
                    }
                }
            }
        }
        .other_window{
            width: 200px;
            height: 1000px;
            background-color: green;

            @media (max-width: 1000px){
                display: none;
            }
        }
    }
    
`;

export default BlogComponent;