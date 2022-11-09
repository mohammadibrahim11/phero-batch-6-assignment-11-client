import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import "./UserReview.css";

const UserReview = ({ userReview,handleUserReviewDelete }) => {
  const { user } = useContext(AuthContext);
  console.log(userReview);
  const { name, photoURL, text ,_id,service} = userReview;


  const [userReviews,setUserReviews] = useState({})

  useEffect(()=>{
    fetch(  `http://localhost:5000/services/${service}`)
    .then(res => res.json())
    .then(data => setUserReviews(data))
  },[service])




  return (
    <div>
      {userReviews ? (
        <div className="border p-3 w-25 m-auto shadow mt-5 mb-5">
              <div className="d-flex ms-3">
              <div>
            <img className="user-review-img" src={photoURL} alt="" srcset="" />
          </div>
          <div className="user-review-text">
            <p className="text-primary"> user name: {name}</p>
            <p className="text-danger"> user review: {text}</p>
          </div>
              </div>
          <div className="pt-4 d-flex justify-content-evenly ">
            <button onClick={handleUserReviewDelete(_id)} className="btn btn-primary me-3">edit</button>
            <button className="btn btn-danger">delete</button>
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
