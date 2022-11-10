import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Layout/Root";
import AddReviews from "../../Pages/AddReviews/AddReviews";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import LogIn from "../../Pages/Login/LogIn";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import Services from "../../Pages/Services/Services";
import SignIn from "../../Pages/Signin/SignIn";
import Spinner from "../../Pages/Spinner/Spinner";
import UpdateReview from "../../Pages/UpdateReview/UpdateReview";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/servicesHome"),
      },
      {
        path: "/home",
        element: <Home></Home>,
        loader: () => fetch("https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/servicesHome"),
      },
      {
        path: "/services",
        element: <Spinner><Services></Services></Spinner>,
        loader: () => fetch("https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/services/${params.id}`),
      },
      {
        path: "/addreviews/:id",
        element: <PrivateRoute><AddReviews></AddReviews></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://b6a11-service-review-server-side-mohammadibrahim11.vercel.app/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Spinner><LogIn></LogIn>,</Spinner>
      },
      {
        path: "/signin",
        element: <Spinner><SignIn></SignIn></Spinner>
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/addservice",
        element: <PrivateRoute><AddService></AddService></PrivateRoute>,
      },
      {
        path: "/myreviews",
        element:<PrivateRoute> <MyReviews></MyReviews></PrivateRoute>,
      },
      {
        path: "/addreviews",
        element:<AddReviews></AddReviews>
      },
      {
        path: "/updateReview",
        element:<UpdateReview></UpdateReview>
      },
    ],
  },
]);

export default router;
