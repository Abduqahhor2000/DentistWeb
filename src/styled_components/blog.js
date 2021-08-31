import styled from "styled-components";

const BlogComponent = {};

BlogComponent.LastArticle = styled.section`
    & {
       width: 900px;
       min-width: 300px;
       height: auto;
       display: flex;
       justify-content: flex-start;
       flex-direction: column;
       align-items: center;

       @media (max-width: 1170px){
            width: 500px;
       }
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

       @media (max-width: 1170px){
           width: 450px;
           flex-direction: column;
       }
   }

    .blog_mean {
        width: 450px;
        height: 300px;
        padding: 10px;
        align-self: center;

        h2 {
            margin: 0;
            line-height: 22px;
            margin-bottom: 5px;
        }

    @media (max-width: 1170px){
        height: auto;
    }
   }

   .photo{
       width: 450px;
       min-width: 300px;
       height: 300px;
       background-color: #3b3b3b;

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
        width: 130px;
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
        top: 4px;
    }
`;


export default BlogComponent;