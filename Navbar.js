import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const[nav,setNav]=useState(true);

  const linksRef=useRef(null);
  const linksContainerRef=useRef(null)

  useEffect(()=>{
    //::::::::::::::::::::Get Height of the links by bellow function::::::::::::::::::::
    const linksHeight=linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    //:::::::::::::::::::::::Whenever Toggles  which Links container Appears I want to manipulate containers height :::::::::::::::::::::::::::
    if(nav){
      linksContainerRef.current.style.height=`${linksHeight}px`
    }
    else {
      linksContainerRef.current.style.height='0px'
    }
  },[nav])
  
  function toggleBtn(){
    setNav(!nav);

  }
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="myLogo" />
            <button className="nav-toggle" onClick={toggleBtn}>
              <FaBars />
            </button>
          </div>
<div className="links-container" ref={linksContainerRef}>
            <ul className="links" ref={linksRef}>
             {links.map((link)=>{
              const{id,url,text}=link;
              return <li key={id}>
              <a href={url}>{text}</a>
             </li>})}
            </ul>
          </div> 
          

          <ul className="social-icons">
            {social.map((social)=>{
              const{id,url,icon}=social;
              return <li key={id}>
                <a href={url}>{icon}</a>
              </li>})}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
