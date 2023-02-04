import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  //  const {photoURL}=user;

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  // <a href="https://ibb.co/zrZJ1Q2"><img src="https://i.ibb.co/JKHQNmp/Whats-App-Image-2023-02-04-at-5-05-27-AM.jpg" alt="Whats-App-Image-2023-02-04-at-5-05-27-AM" border="0"></a>

  return (
    <nav class="navbar navbar-expand-lg bg-white sticky-top">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          <img src="https://i.ibb.co/JKHQNmp/Whats-App-Image-2023-02-04-at-5-05-27-AM.jpg" alt="" style={{width:" 100%", height:"65px"}}/>
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto  m-auto center mb-2  mb-lg-0">
            <li class="nav-item pe-2">
              <Link class="nav-link " aria-current="page" to="/home">
                Favourites
              </Link>
            </li>
            <li class="nav-item pe-2">
              <Link class="nav-link" to="/services">
                Discover
              </Link>
            </li>

            <li class="nav-item pe-2">
              <Link class="nav-link" to="/addservice">
                Submit
              </Link>
            </li>
            <li class="nav-item pe-2">
              <Link class="nav-link" to="/myreviews">
                Community
              </Link>
            </li>

            {/* <li class="nav-item pe-2">
          <Link class="nav-link" to="/blog">Blog</Link >
        </li> */}
          </ul>
          <div class="d-flex gap-4">
            <div>
              <img className="userImg" src={user?.photoURL} alt="" srcset="" />

              {user?.displayName}
            </div>

            {user?.email ? (
              <div onClick={handleSignOut} className="btn btn-primary">
                log out
              </div>
            ) : (
              <>
                {" "}
                <Link to="/login">
                  {" "}
                  <button class="btn btn-outline-success">log in</button>
                </Link>
                <Link to="/signin">
                  {" "}
                  <button class="btn btn-outline-success">sign in</button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
