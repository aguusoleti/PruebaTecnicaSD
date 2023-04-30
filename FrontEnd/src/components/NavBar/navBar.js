import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './navBar.module.css';
import PrimaryButton from '../Buttom/PrimaryButtom.js';
import Login from '../Login/Login';
import Register from '../Register/Register';

const NavBar = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isRegisterOpen, setRegisterOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLoginClose = () => {
    setLoginOpen(false);
  };

  const handleRegisterOpen = () => {
    setRegisterOpen(true);
  };

  const handleRegisterClose = () => {
    setRegisterOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    router.push('/'); // Redirigir al inicio después de cerrar sesión
  };

  return (
    <div className={styles.nav}>
      <h1>Story Dots</h1>
      <img src="./logo.jpeg" alt="logo" />
      {!isLoggedIn && (
        <>
          <PrimaryButton
            text="Register"
            top="4vh"
            left="88%"
            onClick={handleRegisterOpen}
          />
          <PrimaryButton
            text="Login"
            top="4vh"
            left="78%"
            onClick={handleLoginOpen}
          />
        </>
      )}
      {isLoggedIn && (
        <>
          <PrimaryButton
            text="Admin"
            top="4vh"
            left="78%"
            onClick={() => router.push('/admin')}
          />
          <PrimaryButton
            text="Logout"
            top="4vh"
            left="88%"
            onClick={handleLogout}
          />
        </>
      )}
      {isRegisterOpen && <Register handleClose={handleRegisterClose} />}
      {isLoginOpen && <Login handleClose={handleLoginClose} />}
    </div>
  );
};

export default NavBar;
