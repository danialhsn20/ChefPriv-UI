import React from 'react'
import "../pages/ChefPriveHomePage.css";
export default function Cover() {
  return (
    <>
    <img className="image-45-icon" alt="" src="/image-45@2x.png" />
      <img className="image-54-icon" alt="" src="/image-54@2x.png" />
      <img className="image-108-icon" alt="" src="/image-108@2x.png" />
      <img className="image-44-icon" alt="" src="/image-44@2x.png" />
      <h1 className="book-private-chef-container">
        <p className="book-private-chef">
          <span className="book">{`Book `}</span>
          <span>Private Chef</span>
        </p>
        <p className="for-your">for your</p>
        <p className="for-your">
          <span>{`Dinner `}</span>
          <span className="party">Party</span>
        </p>
      </h1>
      <div className="were-providing-the-container">
        <p className="were-providing-the">
          We’re providing the best Chef booking platform.
        </p>
        <p className="for-your">Choose a menu and book your Chef instantly</p>
      </div>
      <div className="we-accept-parent">
        <div className="we-accept">We accept</div>
        <img className="image-104-icon" alt="" src="/image-104@2x.png" />
        <img className="image-105-icon" alt="" src="/image-105@2x.png" />
      </div>

     {/* ////Reviews//// */}
      <div className="our-happy-customers-parent">
        <div className="our-happy-customers">Our happy customers</div>
        <img
          className="unsplashisle-8ypbiq-icon"
          alt=""
          src="/unsplashisle8ypbiq@2x.png"
        />
        <img
          className="unsplashdlycwj55mmg-icon"
          alt=""
          src="/unsplashdlycwj55mmg@2x.png"
        />
        <img
          className="unsplash3tll-97hnjo-icon"
          alt=""
          src="/unsplash3tll-97hnjo@2x.png"
        />
        <img
          className="unsplashlnnhyrbmm0o-icon"
          alt=""
          src="/unsplashlnnhyrbmm0o@2x.png"
        />
        <img className="iconlyboldstar" alt="" src="/iconlyboldstar.svg" />
        <div className="div1">4.7</div>
        <div className="k-review">(8.2K Review)</div>
      </div>
    </>
  )
}
