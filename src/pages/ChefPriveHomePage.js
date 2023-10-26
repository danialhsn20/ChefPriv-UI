import "./ChefPriveHomePage.css";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Categories from "../Components/Categories";
import Booking from "../Components/Booking";
import Cover from "../Components/Cover";
import MobileAppCover from "../Components/MobileAppCover";
import PopularDishes from "../Components/PopularDishes";
import CustomerReviews from "../Components/CustomerReviews";

const ChefPriveHomePage = () => {


  return (
    <div className="chef-prive-home-page">
      <section className="chef-prive-home-page-child" />
      <Navbar />
      <Cover />
      <Booking />
      <MobileAppCover />
      <Categories />
      <PopularDishes />
      <CustomerReviews />
      <Footer />
    </div>
  );
};

export default ChefPriveHomePage;
