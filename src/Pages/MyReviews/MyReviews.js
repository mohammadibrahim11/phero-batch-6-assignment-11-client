import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/UseTitle";
import UserReview from "../UserReview/UserReview";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [userReviews, setUserReviews] = useState([]);

  useTitle('MyReviews')

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUserReviews(data);
        console.log(data);
      });
  }, [user?.email]);

  const handleUserReviewDelete = id => {
    const agree = window.confirm(
      "are you sure, you want to delete your review"
    );
    if (agree) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {

            if(data.deletedCount > 0){
                alert('deleted successfully')
                const remaining = userReviews.filter(rvw => rvw._id !== id);
                setUserReviews(remaining);
            }
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
