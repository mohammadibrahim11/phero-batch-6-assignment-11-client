import React from "react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Footer.css'

const Footer = () => {
  return (



<section class="position-relative py-24 bg-dark overflow-hidden pt-5 pb-5 mt-5 ">
  <img class="position-absolute bottom-0 start-0" src="gradia-assets/elements/footers/radial.svg" alt=""/>
  <div class="position-relative container" style={{z_index: '50'}}>
    <div class="row g-16">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="d-flex flex-column justify-content-between h-100">
          <div class="mb-16">
            <Link class="d-inline-block" href="#">
              <img class="img-fluid" src="gradia-assets/logos/gradia-name-black.svg" alt=""/>
            </Link >
          </div>
          <div>
            <h3 class="fs-6 fw-medium mb-4 text-white ">The boldest SaaS kit in the market.</h3>
            <p class="fs-6 text-muted mb-5">&copy; Copyright 2022. All Rights Reserved by Gradia.</p>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <h3 class="fs-5 fw-semibold text-dark text-uppercase mb-9 text-muted" style={{letter_spacing: '1px'}}>Company</h3>
        <ul class="nav flex-column">
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Features</h3>
            </Link >
          </li>
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Pricing</h3>
            </Link >
          </li>
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Affiliate Program</h3>
            </Link >
          </li>
          <li class="nav-item">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Press Kit</h3>
            </Link >
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <h3 class="fs-5 fw-semibold text-dark text-uppercase mb-9 text-muted" style={{letter_spacing: '1px'}}>Support</h3>
        <ul class="nav flex-column">
          <li class="nav-item mb-2">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Account</h3>
            </Link >
          </li>
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Help</h3>
            </Link >
          </li>
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Contact Us</h3>
            </Link >
          </li>
          <li class="nav-item">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0 ">Customer Support</h3>
            </Link >
          </li>
        </ul>
      </div>
      <div class="col-12 col-md-6 col-lg-2">
        <h3 class="fs-5 fw-semibold text-dark text-uppercase mb-9 text-muted" style={{letter_spacing: '1px'}}>Legals</h3>
        <ul class="nav flex-column">
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Terms &amp; Conditions</h3>
            </Link >
          </li>
          <li class="nav-item">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Privacy Policy</h3>
            </Link >
          </li>
          <li class="nav-item ">
            <Link class="nav-link px-0" href="#">
              <h3 class="fs-6 fw-medium mb-0">Licensing</h3>
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
