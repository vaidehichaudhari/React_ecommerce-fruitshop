import React, { useEffect, useState, useRef, useContext } from "react";
import formImages from "../assets/formImages.jpg";
import HomePage from "./HomePage";
import './LoginPage.css'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../Hooks/ThemeContext";


const LoginPage = ({ setIsLogin,
  // setLoggedUser
}) => {

  const { theme } = useContext(ThemeContext)
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [loggedUser, setLoggedUser] = useState()
  // const [isLoggedIn,setIsLoghgedIn] = useState(false)
  const inputRef = useRef(null);
  const navigate = useNavigate()

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user'))
    setLoggedUser(loggedInUser);
  }, [])

  console.log(loggedUser);

  useEffect(() => {
    inputRef.current.focus()
  }, [])
  function handleFormSubmit(event) {
    event.preventDefault();
    if (email == loggedUser.email && password == loggedUser.password) {
      toast.success('Yov have logged in suceesfully')
      // setIsLoghgedIn(true);
      setIsLogin(true);
      navigate('/home')
    } else {
      toast.error('credentials inValid')
    }

  }
  console.log(email, password);
  return (
    <div className={theme === 'light' ? 'container1' : 'containerbg'}>
      <div className="row">
        <div className="col">
          <img src={formImages} alt="fruit image" className="img-fluid" />
        </div>
        <div className="col">
          <form onSubmit={handleFormSubmit} className={`${theme == 'light' ? 'bg-light text-dark' : 'bg-dark text-light'}`}>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                onChange={(e) => setEmail(e.target.value)}
                ref={inputRef}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Login
            </button>
            <Link to="/register">If Not Registered</Link>

          </form>
        </div>
      </div>

      {/* {isLoggedIn ? <p>logged In</p>    : <p>Please Log in</p>} */}

      <br></br>

      {/* {isLoggedIn && <HomePage />} */}
      <ToastContainer />
    </div>
  );
};

export default LoginPage;