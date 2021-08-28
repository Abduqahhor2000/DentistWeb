import React from "react";
import "../style/home.css";
import { MdDashboard,
    BsCreditCard,
    BiHelpCircle,
    FiFileText, 
    FiSettings,
    BsBell,
    FiSearch,
    GiHamburgerMenu,
   } from 'react-icons/all';
import { Redirect, Route, Switch, Link } from 'react-router-dom';
import routes from '../routes';
import { useDispatch, useSelector } from "react-redux";
import { clearUserID } from "../store/actions/userIdAction";

export default function Home () {
  const userID = useSelector(state => state.user.token);
  const user = useSelector(state => state.user.user);
  const dispatch = useDispatch();

  const signOutClick = () => {
   dispatch( clearUserID() );
  } 

    return (
       <div className="home">
             <div className="menu">
          <div className="brand"> 
              <div>
                <GiHamburgerMenu className="hamburgerMenu" />
              </div>
              <p>salom</p>
          </div>
          <div className="menu-list">
              <ul>
                  <Link className="router-link" to="/dashboard"><li className=""><MdDashboard className="menu-icons" /> <span>Home</span></li></Link>
                  <Link className="router-link" to="/balance"><li className="active-list"><BsCreditCard className="menu-icons" /> <span>Blog</span></li></Link>
                  <Link className="router-link" to="/help"><li className=""><BiHelpCircle className="menu-icons" /> <span>Services</span></li></Link>
                  <Link className="router-link" to="/invoice"><li className=""><FiFileText className="menu-icons" /> <span>Cantact us</span></li></Link>
                  <Link className="router-link" to="/setting"><li className=""><FiSettings className="menu-icons" /> <span>Setting</span></li></Link>
              </ul>
          </div>
        </div>
        <div className="mean">
          <div className="mean-header">
            <div className="search">
              <span>
                <FiSearch />
              </span>
              <input type="text" placeholder="Search something..."/>
            </div>
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