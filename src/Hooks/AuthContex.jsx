import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [savedUser, setSavedUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setSavedUser(JSON.parse(storedUser));
    }
  }, []);

  const Login = (email, password) => {
    if (!savedUser) {
      toast.error('No registered user found. Please register first.');
      return false;
    }

    if (email === savedUser.email && password === savedUser.password) {
      setLoggedUser(savedUser);
      toast.success('You have logged in successfully');
      navigate('/home');
      return true;
    } else {
      toast.error('Invalid credentials');
      return false;
    }
  };

  const Logout = () => {
    setLoggedUser(null);
    toast.info('You have been logged out');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ loggedUser, Login, Logout, savedUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;