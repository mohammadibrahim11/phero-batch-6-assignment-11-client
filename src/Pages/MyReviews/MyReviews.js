import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import UserReview from "../UserReview/UserReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReviews(data);
        console.log(data);
      });
  }, [user?.email]);

  const handleUserReviewDelete = (id) => {
    const agree = window.confirm(
      "are you sure, you want to delete your review"
    );
    if (agree) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          // if(data.deleteCount)
        });
    }
  };

  // {
  //     headers:{
  //         authoraization: `Bearer${localStorage.getItem(service-review-token)}`
  //     }

  // }

  return (
    <div>
      display my reviews : {userReviews.length}
      {userReviews.map((userReview) => (
        <UserReview key={userReview._id} 
        userReview={userReview}
        handleUserReviewDelete={handleUserReviewDelete}
        ></UserReview>
      ))}
    </div>
  );
};

export default MyReviews;
