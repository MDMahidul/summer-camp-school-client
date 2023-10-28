import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";
import logo from '../../../assets/logo/logo.png'
import rlogo from '../../../assets/logo/rlogo.png'
import useReadingProgress from '../../../hooks/useReadingProgress';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const user = true;
    /* for scrolling progress  */
    const completion = useReadingProgress();
    const [theme,setTheme] = useState(localStorage.getItem('theme') || 'light');
    const [navbarBg,setNavbarBg] = useState('transparent');

    /* control nabar bg */
    useEffect(()=>{
        const handleScroll = ()=>{
            setNavbarBg(window.pageYOffset>120 ? 'solid' :'transparent')
        }

        window.addEventListener('scroll',handleScroll);

        return ()=>{
            window.removeEventListener('scroll',handleScroll);
        }
    },[])

    /* control dark and night mode */
    useEffect(()=>{
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }

      /* store theme mode in local storage */
      localStorage.setItem("theme", theme);

    },[theme]);

    const navOptions = (
      <>
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Sports</a>
        </li>
        <li>
          <a>Instructors</a>
        </li>
        <li>
          <a>About Us</a>
        </li>
        {user ? (
          <>
            <li>
              <a>Dashboard</a>
            </li>
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                className="w-10 rounded-full dark:border-white border-red-600 border mr-2"
                src={
                  user.photoURL
                    ? user.photoURL
                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                }
                alt=""
              />
            </div>
            <button className="btn-sm  bg-amber-500 hover:bg-amber-600 text-white rounded">
              Log Out
            </button>
          </>
        ) : (
          <>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="signup">Sign Up</Link>
            </li>
          </>
        )}
      </>
    );

    return (
      <>
        <div className="md:hidden bg-red-500 flex justify-center items-center py-2">
          <img className="w-20" src={logo} alt="" />
        </div>
        <div
          className={`navbar top-0 transition-all ease-out duration-300 dark:bg-gray-800 text-white md:fixed z-50 py-3 md:px-8 ${
            navbarBg !== "transparent" ? "navbar_bg " : "lg:py-4 py-5"
          }`}
        >
          <div className="navbar-start">
            <div className="dropdown">
              <label
                tabIndex={0}
                className="btn btn-ghost bg-red-500 lg:hidden hover:bg-red-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-red-500 dark:bg-gray-700 rounded-box w-52"
              >
                {navOptions}
              </ul>
            </div>
            <a className="cursor-pointer normal-case text-xl hidden md:block">
              {navbarBg !== "transparent" ? (
                <img className="w-28" src={rlogo} alt="" />
              ) : (
                <img className="w-28" src={logo} alt="" />
              )}
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul
              className={`menu menu-horizontal px-1 font-semibold ${
                navbarBg !== "transparent"
                  ? "text-red-500 dark:text-white"
                  : "text-white"
              }`}
            >
              {navOptions}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="dark:bg-dark  justify-center relative flex w-fit items-center rounded-full">
              <button
                className="toggle_class text-white dark:text-white"
                onClick={() => setTheme("light")}
              >
                <FiMoon className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10 hidden md:block">Light</span>
              </button>
              <button
                className={`toggle_class dark:text-white  ${navbarBg !== "transparent" ? 'text-red-500':'text-red-500 md:text-white'}`}
                onClick={() => setTheme("dark")}
              >
                <FiSun className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10 hidden md:block">Dark</span>
              </button>
              <div className="absolute inset-0 z-0 flex dark:justify-end justify-start">
                <motion.span
                  layout
                  transition={{ type: "spring", damping: 15, stiffness: 250 }}
                  className="h-full w-1/2 rounded-full bg-gradient-to-r from-red-500 to-yellow-500"
                />
              </div>
            </div>
          </div>
          <span
            style={{ transform: `translateX(${completion - 100}%)` }}
            className="absolute bg-gradient-to-r from-pink-500 via-yellow-500 to-transparent h-1 w-full bottom-0"
          />
        </div>
      </>
    );
};

export default Navbar;