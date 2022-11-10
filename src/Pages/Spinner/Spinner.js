import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Spinner = ({children}) => {
  const { user, loading } = useContext(AuthContext);
  console.log(loading);
  if(loading){
    return <div className="spinner-border " role='status' ><span className="visually-hidden">loading...</span></div>
  }
  return children;
};

export default Spinner;
