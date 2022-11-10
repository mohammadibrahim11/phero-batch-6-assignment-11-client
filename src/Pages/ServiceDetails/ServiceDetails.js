import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import AllReview from "../allReview/AllReview";
import './ServiceDetails.css'

const ServiceDetails = () => {
  const serviceDetails = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(user);

  console.log(serviceDetails);

  const [reviews , setReviews]=useState([]);
  
  useEffect( ()=>{
    fetch(`https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/reviews/${serviceDetails._id}`
    )
    .then(res => res.json())
    .then(data => {
      setReviews(data)
      console.log(data)})
  },[serviceDetails._id])



  const { img, price, name, ratings, description ,_id} = serviceDetails;
  return (
    <div className="row">
     
      <div className="bg-body bg-secondary col-7 border rounded p-3 ">
        <div>
          <img
            className="mt-3"
            src={img}
            style={{ width: "90%", height: "50%" }}
            alt=""
            srcset=""
          />
        </div>
        <div className="fs-4 fw-bold  pt-3 text-start text-danger"
           style={{ width: "90%", margin: "auto"}}>
            {name}
        </div>

        <div className="d-flex pt-3 justify-content-between fs-5 fw-bold text-danger" style={{ width: "90%", margin: "auto"}}>
            {price}
            <p className="pe-2"> ratings: {ratings}</p>
        </div>
        <div className="text-start text-secondary " style={{ width: "90%", margin: "auto"}}>
     <p className="text-primary fw-bold">
         about my work: </p><p>
        {description}
        </p>
        </div>
      </div>
      
     
      <div className="col-5 border rounded p-2 ">

        <div>
          {name}
        </div>

     <div className="review">
     {
          reviews.map((review) => <AllReview key={review._id} review={review}></AllReview>)
        }
     </div>
        <Link to={`/addreviews/${_id}`}> <button className="btn btn-primary mt-5">add review</button></Link>
      </div>
    </div>
  );
};

export default ServiceDetails;
