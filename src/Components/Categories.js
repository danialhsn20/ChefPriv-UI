import React from 'react'
import { Image } from 'antd';

export default function Categories() {
  return (
    <>
      <h1 className="browse-by-categories-container">
        <span>
          <span>Browse by</span>
          <span className="span">{` `}</span>
        </span>
        <span className="party">Categories</span>
      </h1>
      <div className="unsplashuc0hzduitwy-parent">
        <a><Image
          className="unsplashuc0hzduitwy-icon"
          width={710}
          height={770}
          src="/unsplashuc0hzduitwy@2x.png"
        />
          <div className="group-child">
            <h1 className="explore-food">Explore Food</h1>
          </div>
        </a>
      </div>

      <div className="unsplashsiqgni-cqfg-parent">
        <img
          className="unsplashsiqgni-cqfg-icon"
          alt=""
          src="/unsplashsiqgnicqfg@2x.png"
        />
        <div className="unsplasheewlcfydzq4" />
        <h1 className="master-chefs">Master Chefs</h1>
      </div>
      <div className="unsplash6utqmtqcazs-parent">
        <img
          className="unsplashsiqgni-cqfg-icon"
          alt=""
          src="/unsplash6utqmtqcazs@2x.png"
        />
        <div className="unsplasheewlcfydzq4" />
        <h1 className="birthdays">Birthdays</h1>
      </div>
      <div className="unsplasheewlcfydzq4-parent">
        <img
          className="unsplashsiqgni-cqfg-icon"
          alt=""
          src="/unsplasheewlcfydzq4@2x.png"
        />
        <div className="unsplasheewlcfydzq4" />
        <h1 className="events">Events</h1>
      </div>
      <div className="unsplashclpdea23z44-parent">
        <img
          className="unsplashsiqgni-cqfg-icon"
          alt=""
          src="/unsplashclpdea23z44@2x.png"
        />
        <div className="unsplasheewlcfydzq4" />
        <h1 className="desserts">Desserts</h1>
      </div>
    </>
  )
}
