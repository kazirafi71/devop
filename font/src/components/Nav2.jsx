import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Nav2.css";


const Nav2 = () => {
  const { authenticated } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.auth);
  console.log(authenticated);
  console.log(user)
  let dispatch = useDispatch();

  

  const logout = () => {
    dispatch({ type: "Clear_User" });
    localStorage.clear("auth_token");
    console.log(authenticated);
  };

  const routing = () => {
   
    if (authenticated) {
      return [
        <li className="nav-item">
          <Link className="nav-link " to="/">
            Home
          </Link>
        </li>,
        <li className="nav-item">
          <Link className="nav-link " to="/blog">
            Blog
          </Link>
        </li>,
        <li className="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Alumni
          </Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/ice">
              ICE
            </Link>
            <Link className="dropdown-item" to="/es">
              ES
            </Link>
          </div>
        </li>,
        <li className="nav-item">
          <Link className="nav-link " to='/contact'>
            
            Contact Us
          </Link>
        </li>,
        // <li className="nav-item">
        //   <a className="nav-link " href="#event">
        //     Upcoming Events
        //   </a>
        // </li>,
      ];
    } else if (!authenticated) {
      return [
        <li className="nav-item">
          <a className="nav-link " href="#news">
            {" "}
            News
          </a>
        </li>,
        <li className="nav-item">
          <a className="nav-link " href="#event">
            Events
          </a>
        </li>,
      ];
    }
  };
  return (
    <div>
      <nav className="navbar-light nav__head2">
        <div className="container">
          <div className="" id="navbarNav">
            <ul className="nav justify-content-center   py-2">{routing()}</ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav2;
