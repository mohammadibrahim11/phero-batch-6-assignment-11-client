import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";
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
    </div>
  );
};

export default Home;
