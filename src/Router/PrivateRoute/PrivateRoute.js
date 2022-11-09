import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRoute = ({children}) => {
 console.log(children);
 const {user,loading} = useContext(AuthContext);
 const location = useLocation();
 console.log(user);

 if(loading){
    return <div>loading...</div>
 }

 if(!user){
  return <Navigate to='/login' state={{from:location}} replace></Navigate> ;
 }

    return children;
};

export default PrivateRoute;