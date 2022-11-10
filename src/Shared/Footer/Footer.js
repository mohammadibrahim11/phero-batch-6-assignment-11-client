import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (



<section className="position-relative py-24 bg-dark overflow-hidden pt-5 pb-5 mt-5 ">
  <img className="position-absolute bottom-0 start-0" src="gradia-assets/elements/footers/radial.svg" alt=""/>
  <div className="position-relative container" style={{z_index: '50'}}>
    <div className="row g-16">
      <div className="col-12 col-md-6 col-lg-6">
        <div className="d-flex flex-column justify-content-between h-100">
          <div className="mb-16">
            <Link className="d-inline-block" href="#">
              <img className="img-fluid" src="gradia-assets/logos/gradia-name-black.svg" alt=""/>
            </Link >
          </div>
          <div>
            <h3 className="fs-6 fw-medium mb-4 text-white ">proCleaner</h3>
            <p className="fs-6 text-muted mb-5">&copy; Copyright 2022. All Rights Reserved by proCleaner</p>
          </div>
        </div>
      </div>
      
      <div className="col-12 col-md-6 col-lg-2">
        <h3 className="fs-5 fw-semibold text-dark text-uppercase mb-9 text-muted" style={{letter_spacing: '1px'}}>Support</h3>
        <ul className="nav flex-column">
          <li className="nav-item mb-2">
            <Link className="nav-link px-0" to="/home">
              <h3 className="fs-6 fw-medium mb-0">Home</h3>
            </Link >
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-0" to="/blog">
              <h3 className="fs-6 fw-medium mb-0">Blog</h3>
            </Link >
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-0" to="/services">
              <h3 className="fs-6 fw-medium mb-0">Services</h3>
            </Link >
          </li>
          <li className="nav-item">
            <Link className="nav-link px-0" to="/addservice">
              <h3 className="fs-6 fw-medium mb-0 ">add a service</h3>
            </Link >
          </li>
        </ul>
      </div>
      <div className="col-12 col-md-6 col-lg-2">
        <h3 className="fs-5 fw-semibold text-dark text-uppercase mb-9 text-muted" style={{letter_spacing: '1px'}}>Find Me</h3>
        <ul className="nav flex-column">
          <li className="nav-item ">
            <Link className="nav-link px-0" to="https://www.facebook.com/">
              <h3 className="fs-6 fw-medium mb-0"><FaFacebook /></h3>
            </Link >
          </li>
          <li className="nav-item">
            <Link className="nav-link px-0" to="https://www.instagram.com/">
              <h3 className="fs-6 fw-medium mb-0"><FaInstagramSquare/></h3>
            </Link >
          </li>
          <li className="nav-item ">
            <Link className="nav-link px-0" to="https://twitter.com/code">
              <h3 className="fs-6 fw-medium mb-0"><FaTwitter/></h3>
            </Link >
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
          

  );

};

export default Footer;
