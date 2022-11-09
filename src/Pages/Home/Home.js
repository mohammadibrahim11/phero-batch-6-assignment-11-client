import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import AddService from "../AddService/AddService";
// import Services from "../Services/Services";

import "./Home.css";
import ServicesHome from "./servicesHome/ServicesHome";

const Home = () => {
  const servicesHome = useLoaderData();

  // const [addService , setAddService] = useState([]);

  // useEffect( ()=>{
  //   fetch('http://localhost:5000/addservice')
  //   .then(res => res.json())
  //   .then(data => setAddService(data))
  // },[]);



  // useEffect( ()=>{
  //   fetch(`http://localhost:5000/reviews`)
  //   .then(res => res.json())
  //   .then(data => console.log(data));
  // },[])
  // console.log(servicesHome);

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
        <p className="fs-1 fw-bold text-secondary mt-5 pt-5">See my services</p>
      </div>
      <div className="home-service-card container m-auto mt-5">
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
    </div>
  );
};

export default Home;
