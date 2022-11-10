// import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
// import ClientReview from "./ClientReview/ClientReview";
import './Home.css'


import "./Home.css";
import ServicesHome from "./servicesHome/ServicesHome";

const Home = () => {

  const servicesHome = useLoaderData();
  useTitle('Home')


  return (
    <div>
      <div className="position w-50 m-auto">
        <p className="fw-bold">Proffessional Cleaning Service</p>
        <h1 className="fw-bold fs-1">So Fresh and So Clean</h1>
      </div>
      <div>
        <img
          src="https://i.ibb.co/RQdDkz6/slide-3.jpg"
          className="w-100"
          alt=""
          border=""
        />
      </div>

      <div>
        <p className="fs-1 fw-bold text-danger mt-5 pt-5">services</p>
      </div>
      <div className="home-service-card mt-5">
        {servicesHome.map((service) => (
          <ServicesHome key={service._id} service={service}></ServicesHome>
        ))}
        {/* {
          addService.map(ads => <AddService key={ads._id} ads={ads}></AddService>)
        } */}
      </div>

      <div className="mt-4">
        <Link to='/services' ><button className="btn btn-primary">see all services</button></Link>
       </div>

       <div className="gallery w-full mt-5 m-auto">

        <p className="fs-3 fw-bold p-3 text-danger"> services gallery</p>
       {/* <!-- Gallery --> */}
<div class="row">
  <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/9bbNb0M/service-page-1-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />

    <img
      src="https://i.ibb.co/ZKrNKnQ/service-page-2-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Wintry Mountain Landscape"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/jfPnwY6/service-page-3-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Mountains in the Clouds"
    />

    <img
      src="https://i.ibb.co/8dPw9Bx/service-page-7-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Boat on Calm Water"
    />
  </div>

  <div class="col-lg-4 mb-4 mb-lg-0">
    <img
      src="https://i.ibb.co/RBB5kPZ/service-page-4-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Waves at Sea"
    />

    <img
      src="https://i.ibb.co/HPKKypy/service-page-9-img.jpg"
      class="w-100 shadow-1-strong rounded mb-4"
      alt="Yosemite National Park"
    />
  </div>
</div>
{/* <!-- Gallery --> */}
       </div>

    

    <div>
    {/* <!--====== ABOUT ONE PART START ======--> */}
<section class="about-area about-one mt-5">
   <div class="container">
      <div class="row">
         <div class="col-lg-12">
            <div class="about-title text-center">
               <h2 class="title fw-bold text-danger">Why Choose Me</h2>
            </div>
         </div>
      </div>
      {/* <!-- row --> */}
      <div class="row justify-content-center mt-3">
         <div class="col-md-4 col-sm-8">
            <div class="single-about-items">
               <div class="items-icon">
                  <i class="lni lni-bullhorn"></i>
               </div>
               <div class="items-content border shadow">
                  <h4 class="items-title text-danger mt-3">CareFull</h4>
                  <p class="text p-3 text-start">
                  Carefull Services in Vadodara is one of the leading businesses in the Washing Machine Repair & Services. Also known for AC Repair & Services, Washing Machine Repair & Services, Microwave Oven Repair & Services.
                  </p>
               </div>
            </div>
            {/* <!-- single about items --> */}
         </div>
         <div class="col-md-4 col-sm-8">
            <div class="single-about-items">
               <div class="items-icon">
                  <i class="lni lni-investment"></i>
               </div>
               <div class="items-content border shadow">
                  <h4 class="items-title text-danger mt-3">Time Manage</h4>
                  <p class="text p-3 text-start">
                  Carefull Services in Vadodara is one of the leading businesses in the Washing Machine Repair & Services. Also known for AC Repair & Services, Washing Machine Repair & Services, Microwave Oven Repair.
                  </p>
               </div>
            </div>
            {/* <!-- single about items --> */}
         </div>
         <div class="col-md-4 col-sm-8">
            <div class="single-about-items">
               <div class="items-icon">
                  <i class="lni lni-handshake"></i>
               </div>
               <div class="items-content border shadow">
                  <h4 class="items-title text-danger mt-3">Honesty</h4>
                  <p class="text p-3 text-start">
                  Carefull Services in Vadodara is one of the leading businesses in the Washing Machine Repair & Services. Also known for AC Repair & Services, Washing Machine Repair & Services, Microwave Oven Repair & Services.
                  </p>
               </div>
            </div>
            {/* <!-- single about items --> */}
         </div>
      </div>
      {/* <!-- row --> */}
   </div>
   {/* <!-- container --> */}
</section>
{/* <!--====== ABOUT ONE PART ENDS ======--> */}
    </div>


    </div> 
  );
};

export default Home;
