import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./UserReview.css";

const UserReview = ({ userReview,handleUserReviewDelete,handleUpdateReview }) => {

  const { name, photoURL, text ,_id,service} = userReview;


  const [userOwnReviews,setUserOwnReviews] = useState({})


  useEffect(()=>{
    fetch(  `http://localhost:5000/services/${service}`)
    .then(res => res.json())
    .then(data => setUserOwnReviews(data))
  },[service])




  return (
    <div>
      {userOwnReviews ? (
        <div className="border p-3 w-50 m-auto shadow mt-5 mb-5">
              <div className="d-flex ms-3">
              <div>
            <img className="user-review-img" src={photoURL} alt="" srcset="" />
          </div>
          <div className="user-review-text">
            <p className="text-primary"> user name: {name}</p>
            <p className="text-danger"> review : {text}</p>
          </div>
              </div>
          <div className="pt-4 d-flex justify-content-evenly ">
           <Link to='/updateReview'> <button  className="btn btn-primary me-3">update</button></Link>
            <button onClick={()=>handleUserReviewDelete(_id)} className="btn btn-danger">delete</button>
          </div>
          <div>
           
          </div>
        </div>
      ) : (
        <p>no reviews were added</p>
      )}
    </div>
  );
};

// user?.email

export default UserReview;
