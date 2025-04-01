import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiToggleLeft, BiToggleRight } from "react-icons/bi";
import { ThemeContext } from "../Hooks/ThemeContext";
import { AuthContext } from "../Hooks/AuthContex";


const MainNavbar = () => {

  const {theme, toggleTheme} = useContext(ThemeContext)
  const {loggedUser, logout,} = useContext(AuthContext)
console.log(loggedUser,"In navbar")

const navigate = useNavigate();

function handleLogout(){
  logout();
  navigate('/login')
alert('Logout Success');

}

  return (
    <nav className={`navbar navbar-expand-lg ${theme == 'light' ? 'navbar-light bg-light' : 'navbar-dark bg-dark'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
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
            { loggedUser == null ?
              (<><li className="nav-item">
              <Link to="/login" class="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/register" class="nav-link">
                Register
              </Link>
            </li>
            </>) : (<>
              <span>{loggedUser.name}</span>
              <li className="nav-item">
                <button onClick={handleLogout}>Logout</button>
              </li>
            </>)

            }


            <li className="nav-item" style={{fontSize:"30px"}}>
              <button onClick={toggleTheme} className={`${theme == 'light' ? 'customToggleButtonLight' : 'customToggleButtonDark'}`}>
                {theme == "light" ? <BiToggleLeft /> : <BiToggleRight />}
              </button>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainNavbar;