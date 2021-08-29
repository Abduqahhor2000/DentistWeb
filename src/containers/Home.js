import React, { useEffect, useState } from "react";
import "../style/home.css";
import {
    FiSettings,
    BsBell,
    GiHamburgerMenu,
    AiFillPhone,
    RiHealthBookLine,
    FiTwitch,
    AiOutlineHome,
   } from 'react-icons/all';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import routes from '../routes';
import { useDispatch, useSelector } from "react-redux";
import { clearUserID } from "../store/actions/userIdAction";

export default function Home () {
  const userID = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [menuButton, setMenuButton] = useState(true);
  const [useOne, setUseOne] = useState(1);
  
  const menuHendler = () => {
    const menu = document.querySelector(".menu");
    const brand = document.querySelector(".brand");
    const mean = document.querySelector(".mean");

    if(useOne === 1){
      setUseOne(0);
      return;
    }

    if(menuButton === true){
       menu.style.width = "250px";
       mean.style.width = "calc(100% - 250px)";
       mean.style.left = "250px";
       brand.style.left = "0px";
    }else if(menuButton === false){
        menu.style.width = "40px";
        mean.style.width = "calc(100% - 40px)";
        mean.style.left = "40px";
        brand.style.left = "-212px";
    }else{
      return;
    }
  }
  
  useEffect(() => menuHendler(), [menuButton]);

  const signOutClick = () => {
   dispatch( clearUserID() );
  } 

    return (
       <div className="home">
        {/* <div className={`menu ${menuButton ? "menu_is_open" : "menu_is_close"}`}> */}
        <div className={`menu`} id="menu">
          {/* <div className={`brand ${menuButton ? "" : "brand_close"}`}>  */}
          <div className={`brand`} id="brand"> 
                <span className={`dreamDental`}>Dream Dental</span>
                {/* <ImExit onClick={() => {setMenuButton(!menuButton); return}} className={`hamburgerMenu ${(menuButton || (menuButton === "")) ? "" : "Display_none"}`} style={{marginRight: "3px"}} /> */}
                <GiHamburgerMenu onClick={() => {setMenuButton(!menuButton); return}} className={`hamburgerMenu`} />
          </div>
          <div className="menu-list">
              <ul>
                  <Link className="router-link" to="/dashboard"><li className=""><AiOutlineHome className="menu-icons" /> <span>Biz bilan bog'lanish</span></li></Link>
                  <Link className="router-link" to="/balance"><li className="active-list"><FiTwitch className="menu-icons" /> <span>Blog</span></li></Link>
                  <Link className="router-link" to="/help"><li className=""><RiHealthBookLine className="menu-icons" /> <span>Services</span></li></Link>
                  <Link className="router-link" to="/invoice"><li className=""><AiFillPhone className="menu-icons" /> <span>Cantact us</span></li></Link>
                  <Link className="router-link" to="/setting"><li className=""><FiSettings className="menu-icons" /> <span>Setting</span></li></Link>
              </ul>
          </div>
        </div>
        {/* <div className={`mean ${menuButton ? "with_menu" : "menu_less"}`}> */}
        <div className={`mean`} id="mean">
          <div className="mean-header">
            <div className="user-panel">
              {
                (userID) ? <><div className="bell-icon">
                              <BsBell />
                            </div>
                            <div className="user-info">
                              <img src={user.photoURL} className="user-image" alt=""></img>
                              <div className="user-name">
                                <p>{user.displayName}</p>
                                <p>{user.isAdmin ? "Admin" : "Customer"} <button onClick={signOutClick} className="sign-out">Sign Out</button></p>
                              </div>
                            </div></> :
                            <>
                              <Link className="sign sign-in" to="/sign-in"> Sign In </Link>
                              <Link className="sign sign-up" to="/sign-up"> Sign Up </Link>
                            </>
              }
             
            </div>
          </div>
          <Redirect to="/balance" />
          <Switch>
              {routes.menu.map(item => {
                return(
                  <Route {...item} />
                )
              })}  
          </Switch>
         </div>
       </div>
    );
}