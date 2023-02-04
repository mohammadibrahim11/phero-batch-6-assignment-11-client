import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useTitle from "../../Hooks/UseTitle";

const UpdateReview = ({handleUpdateReview}) => {
    console.log(handleUpdateReview);
  const storedReview = useLoaderData();
  console.log(storedReview);
  const { user } = useContext(AuthContext);
  useTitle("addreviews");

  const [updateReview, setUpdateReview] = useState();

//   const handleUpdateReview = (event) => {
//     event.preventDefault();
//     const form = event.target;
//     const name = form.name.value;
//     const email = user?.email || "unregister";
//     const photoURL = form.photoURL.value;
//     const text = form.message.value;
//     console.log(name, photoURL, email, text);

//     // const addreview = {
//     //   name,
//     //   photoURL,
//     //   text,
//     // //   service: _id,
//     //   email,
//     // };



//     fetch(`http://localhost:5000/reviews/${storedReview.id}`, {
//       method: "PUT",
//       headers: {
//         "content-type": "application/json",
//       },
//       body: JSON.stringify(updateReview),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.acknowledged) {
//           alert("updated review successfully");
//           form.reset();
//         }
//       })
//       .catch((error) => console.error(error));
//   };

  const handleInputChange= event =>{
    const field = event.target.name;
    const value = event.target.value;
    const newReview = {...updateReview}
    newReview[field] = value;
    setUpdateReview(newReview)
}


  return (
    <div>
      update your review here
      <div className="w-50 m-auto shadow mt-5">
        <p className="text-danger">add a review</p>
        <form onSubmit={()=>handleUpdateReview()}>
          <div>
            <input
            onChange={handleInputChange}
       
              type="text"
              name="name"
              placeholder="your name"
              className="m-2 "
            />

            <input
            onChange={handleInputChange}
           
              type="photoURL"
              name="photoURL"
              placeholder="enter your photo url"
            />
          </div>

          <textarea
          onChange={handleInputChange}
          
            name="message"
            id=""
            cols="30"
            rows="10"
            className="w-30"
            placeholder="write a review about my service"
          ></textarea>

          <div>
            <input
              className="btn btn-danger m-2"
              type="submit"
              value="update"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateReview;
