import React from 'react'
import "../pages/ChefPriveHomePage.css";

const Footer = () => {
  return (
    <section className="rectangle-parent">
        <div className="group-item" />
        <h3 className="subcribe-to-newsletter">Subcribe to Newsletter</h3>
        <div className="faqs-parent">
          <div className="we-accept">FAQ’s</div>
          <div className="contact-us">Contact Us</div>
        </div>
        <div className="home-parent">
          <div className="home">Home</div>
          <div className="how-it-works">How it works</div>
          <div className="our-chefs">Our Chefs</div>
          <div className="reviews">Reviews</div>
          <div className="whats-new">What’s new</div>
          <h3 className="links">Links</h3>
        </div>
        <input className="group-inner" placeholder='  Email Address' type="text" />
        <a><div className="rectangle-div" />
        <img className="mask-group-icon7" alt="" src="/mask-group6@2x.png" /></a>
        <h3 className="our-social">Our Social</h3>
        <a href='https://twitter.com/home' target="blank"><img className="mask-group-icon8" alt="" src="/mask-group7@2x.png" /></a>
        <a href='https://www.facebook.com/' target="blank"><img className="mask-group-icon9" alt="" src="/mask-group8@2x.png" /></a>
        <a href='https://www.instagram.com' target="blank"><img className="mask-group-icon10" alt="" src="/mask-group9@2x.png" /></a>
        <div className="group-child1" />
        <div className="group-child2" />
        <div className="copyrights-2022-chef-prive-a-parent">
          <div className="copyrights-2022-chef">
            Copyrights 2022 Chef Prive - All Rights Reserved
          </div>
          
        </div>
        <div className="address-parent">
          <h3 className="address">Address</h3>
          <div className="park-avenue-south-new-york-7-parent">
            <div className="park-avenue-south">
              Park Avenue South, New York, 74812, United States
            </div>
            <img
              className="mask-group-icon12"
              alt=""
              src="/mask-group11@2x.png"
            />
          </div>
          <div className="contactchefprivecom-parent">
            <div className="contactchefprivecom">contact@chefprive.com</div>
            <img
              className="mask-group-icon13"
              alt=""
              src="/mask-group12@2x.png"
            />
          </div>
          <img
            className="mask-group-icon14"
            alt=""
            src="/mask-group13@2x.png"
          />
          <div className="div8">000-123-456</div>
        </div>
        <img className="mask-group-icon15" alt="" src="/mask-group14@2x.png" />
      </section>
  );
};

export default Footer;