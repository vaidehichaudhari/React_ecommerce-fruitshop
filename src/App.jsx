import React from "react";
import { useState } from "react";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage.jsx";
import MainNavbar from "./components/MainNavbar.jsx";
import data from "./data.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CardDetails from "./components/CardDetails.jsx";
import Navbar from "./components/Navbar.jsx";
import ThemeProvider from "./Hooks/ThemeContext.jsx";
import AuthProvider from "./Hooks/AuthContex.jsx";
function App() {
  const [isLoggin, setIsLogin] = useState(false)
  const [loggedUser, setLoggedUser] = useState('')
  console.log("isLoggin on App.js", isLoggin);
  console.log("loggedUser on App.js", loggedUser);

  return (
    <>
      <Router>
        <ThemeProvider>
          <AuthProvider>
          {/* <Navbar/> */}
          <MainNavbar />

          <Routes>
            <Route path="/login" element={<LoginPage setIsLogin={setIsLogin} setLoggedUser={setLoggedUser} />}></Route>
            <Route path="/register" element={<RegisterPage />}></Route>
            <Route path="/home" element={<HomePage data={data} />}></Route>
            <Route path="/card-details/:ID/*" element={<CardDetails />}></Route>
          </Routes>
          </AuthProvider>
        </ThemeProvider>
      </Router>
      {/* <RegisterPage ></RegisterPage>

      <LoginPage />
      <HomePage data={data} /> */}
    </>
  );
}

export default App;