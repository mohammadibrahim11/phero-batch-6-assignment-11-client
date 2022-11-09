// import React, { useEffect, useState } from 'react';
import "./AllReviews.css";

const AllReview = ({ review }) => {
  console.log(review);

  const { name, photoURL, text } = review;

  return (
    <div className="d-flex ">
      <div>
        <img src={photoURL} alt="" srcset="" className="rounded-circle" />
      </div>
      <div className="text-start ps-2 fs-6">
        <span> {name}</span>
        <br />
        <span> {text}</span>
      </div>
    </div>
  );
};

export default AllReview;
