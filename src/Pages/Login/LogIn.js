import React, { useContext, useState } from 'react';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from '../../Hooks/UseTitle';

const LogIn = () => {

    const [error,setError]=useState('');
    const {signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location =useLocation()
    const from = location.state?.from?.pathname || '/'

    console.log(signIn);
    useTitle('login')


    const handleLogIn =event=>{
   event.preventDefault();
   const form = event.target;
   const email = form.email.value;
   const password =form.password.value;
   console.log(email,password);

   signIn(email,password)
   .then(result=>{
      const user = result.user;
      console.log(user);
      navigate('/')
      form.reset();
      setError('');
   })
   .catch(error => {
    setError(error.message)
    console.error(error)});
  
  
  
    }
    return (
        <div className='w-50 m-auto'>
          

            <form className='shadow p-5' onSubmit={handleLogIn}>

  <div class="w-50 m-auto text-start ">
    <label class="form-label  mt-2" for="email">Email address</label>
    <input type="email" class="form-control" id="email" name='email' placeholder="Your email address"/>
  </div>
  <div class="w-50 m-auto text-start mt-2">
    <label class="form-label" for="password">Password</label>
    <input type="password" class="form-control" id="password" name='password' placeholder="Password" autocomplete="current-password"/>
  </div>
  <div class="mb-3 text-danger">
  
  {error}
    </div>
    <p className='mt-3'>dont have an accout?please  
     <Link to='/signin'><span className='btn btn-primary  '> sign in </span></Link></p>
  <div>
  <input class="btn btn-primary w-full mt-3" type="submit" value="log in" />
  
  </div>

</form>
            

              
           
        </div>
    );
};

export default LogIn;