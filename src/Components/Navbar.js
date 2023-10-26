import React from 'react'
import "../pages/ChefPriveHomePage.css";
export default function Navbar() {
  return (
    
       <nav>
        <img className="updatedlogo-1-icon" alt="" src="/updatedlogo-1@2x.png" />
        <div className="how-it-works-parent">
          <div className="how-it-works1">how it works</div>
          <a className="home1" style={{color:'black'}}>home</a>
          <div className="our-chefs1">our chefs</div>
          <div className="book1">book</div>
          <input className="line-input" type="text" />
        </div>
        <div className="sign-up">Sign Up</div>
        <div className="chef-prive-home-page-item" />
        <div className="log-in">Log In</div>
        <img className="mask-group-icon" alt="" src="/mask-group@2x.png" />
      </nav>
  )
}
