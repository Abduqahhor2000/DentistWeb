import React, { useEffect, useState } from "react";
import "../style/panel.css";
import {FaTooth,
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

export default function Panel () {
  const userID = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();
  const [menuButton, setMenuButton] = useState("");
  const [activeMenuLi, setActiveMenuLi] = useState(1);
  
  const menuHendler = () => {
    const menu = document.querySelector(".menu");
    const brand = document.querySelector(".brand");
    const mean = document.querySelector(".mean");

     if(menuButton === true){
       menu.style.width = "250px";
       mean.style.width = "calc(100% - 250px)";
       mean.style.minWidth = "300px";
       mean.style.left = "250px";
       brand.style.left = "0px";
    }else if(menuButton === false){
        menu.style.width = "40px";
        mean.style.width = "calc(100% - 40px)";
        mean.style.minWidth = "300px";
        mean.style.left = "40px";
        brand.style.left = "-212px";
    }else{
      return;
    }
  }
  
  useEffect(() => {menuHendler()});
  
  const signOutClick = () => {
   dispatch( clearUserID() );
  } 

  const menuListClick = (number) => {
      setActiveMenuLi(number);
  }

    return (
       <div className="home">
        <div className={`menu`} id="menu">
          <div className={`brand`} id="brand"> 
                <FaTooth className="tooth_brand" />
                <span className={`dreamDental`}>Dream &nbsp; &nbsp; Dental</span>
                <GiHamburgerMenu onClick={() => {setMenuButton(!menuButton); }} className={`hamburgerMenu`} />
          </div>
          <div className="menu-list">
              <ul>
                  <Link onClick={() => menuListClick(1)} className="router-link" to="/home"><li className={`${activeMenuLi === 1 ? "active-list" : ""}`}><AiOutlineHome className="menu-icons" /> <span>Home</span></li></Link>
                  <Link onClick={() => menuListClick(2)} className="router-link" to="/blog"><li className={`${activeMenuLi === 2 ? "active-list" : ""}`}><FiTwitch className="menu-icons" /> <span>Blog</span></li></Link>
                  <Link onClick={() => menuListClick(3)} className="router-link" to="/services"><li className={`${activeMenuLi === 3 ? "active-list" : ""}`}><RiHealthBookLine className="menu-icons" /> <span>Services</span></li></Link>
                  <Link onClick={() => menuListClick(4)} className="router-link" to="/cantact_us"><li className={`${activeMenuLi === 4 ? "active-list" : ""}`}><AiFillPhone className="menu-icons" /> <span>Cantact us</span></li></Link>
                  <Link onClick={() => menuListClick(5)} className="router-link" to="/settings"><li className={`${activeMenuLi ===5 ? "active-list" : ""}`}><FiSettings className="menu-icons" /> <span>Settings</span></li></Link>
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
          <Redirect to="/home" />
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