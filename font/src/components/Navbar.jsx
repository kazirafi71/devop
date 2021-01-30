import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Nav1.css'
import Axios from 'axios'


const Navbar = () => {
  const [profile,setProfile]=useState('')
  const {authenticated}=useSelector(state=>(state.auth))
  console.log(authenticated)
  let dispatch=useDispatch()
  const {user}=useSelector(state=>(state.auth))
  console.log(user.name)
  

  useEffect(() => {
    Axios.get("/profile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("auth_token"),
      },
    })
      .then((result) => {
        console.log(result.data);
        setProfile(result.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout=()=>{
    dispatch({type:"Clear_User"})
    localStorage.clear('auth_token')
    console.log(authenticated)
  }

  const routing=()=>{
     if(authenticated)
    {
      return[

        <li className="nav-item">
        <Link className="nav-link text-light" to="/profile">{user.name}</Link>
      </li>,
      <li className="nav-item">
      <Link onClick={logout} className="nav-link text-light" to="/login">Logout</Link>
    </li>
      ]
    }
    else if(!authenticated){
      return[
        <li className="nav-item">
        <Link  className="nav-link text-light" to="/login">Login</Link>
      </li>,
      <li className="nav-item">
        <Link className="nav-link text-light" to="/register">Register</Link>
      </li>
      ]
    }
  }
    return (
        <div>
            <nav className="navbar navbar-light nav__head">
                <div className="container">
  <Link className="navbar-brand text-light" to='/'>BUP ALUMNI</Link>
  {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> */}
  <div className="" id="navbarNav">
    <ul className="nav justify-content-end text-light">
      {routing()}
      
      
      

      
      
    </ul>
  </div>
  </div>
</nav>
<div className='border__style'></div>
        </div>
    );
};

export default Navbar;