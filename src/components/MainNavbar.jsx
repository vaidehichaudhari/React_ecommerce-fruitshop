import React, { useContext } from "react";
import logo from "../assets/logo.jpg"
import { Link } from "react-router-dom";
import { CiLight,CiDark  } from "react-icons/ci";

import { ThemeContext } from "../Hooks/ThemeContext";

const MainNavbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)


// function handleClick(){
// console.log(theme, "******theme value from context file**********")
// toggleTheme();

// }

  return (
    <div className="navbar1">
    <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <img src={logo} alt="logo" className="logoimg" height={50}/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mr-0"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/login" class="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" class="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item" style={{fontSize:"30px"}}>
              <button onClick={toggleTheme} className= {`${theme == 'light' ? 'customToggleButtonLight' : 'customToggleButtonDark'}` }>
                {theme == "light" ? <CiLight /> : <CiDark />}
              </button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
    </div>
  );
};

export default MainNavbar;