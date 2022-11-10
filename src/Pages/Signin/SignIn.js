// import { signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
// import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from "../../Context/AuthProvider";

const SignIn = () => {
  const [error, setError] = useState();

  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  const handleUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.error(error));
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate("/services");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  
  return (
    <div className="w-50 m-auto">
     
        <form className="shadow p-5" onSubmit={handleSignIn}>

            <div className="w-50 m-auto text-start" >
            <label class="form-label  mt-2" for="email">
              your name
            </label>

            <input
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="Your name "
            />
          
            </div>
          <div class="w-50 m-auto text-start ">
            <label class="form-label  mt-2" for="photourl">
              photo url
            </label>
            <input className="form-control" type='photoURL' name='photoURL' placeholder='photourl'/>
          </div>
          <div class="w-50 m-auto text-start ">
            <label class="form-label  mt-2" for="email">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              name="email"
              placeholder="Your email address"
            />
          </div>
          <div class="w-50 m-auto text-start mt-2">
            <label class="form-label" for="password">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="password"
              name="password"
              placeholder="Password"
              autocomplete="current-password"
            />
          </div>
          <div class="mb-3 text-danger ">{error}</div>
          <p className="mt-3">
            already have an accout?please
            <Link to="/login">
              <span className="btn btn-primary  "> log in </span>
            </Link>
          </p>
          <div>
            <input
              class="btn btn-primary w-full mt-3"
              type="submit"
              value="sign in"
            />
          </div>

          <div>
          <button className="btn btn-primary mt-3" onClick={handleGoogleSignIn}>sign in with google</button>
        </div>
        </form>

        {/* <div>
                    <input type="text" name='name' placeholder='your name' />
                    <input type='photoURL' name='photoURL'placeholder='url'></input>

                    <input type="email" name='email' placeholder='your email'/>

                    <input type="password" name='password' placeholder='your password' />

                </div>

                <div>
                   <span className='text-danger'> {error}</span>
                </div>

                <div>
                   <input type="submit" value='sign up' />
                </div> */}

       

    </div>
  );
};

export default SignIn;
