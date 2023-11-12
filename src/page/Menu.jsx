import React, { useState } from 'react';
import {NavLink, Link } from 'react-router-dom';
import "./css/Menu.css"
import Cart from '../components/Menu/Cart';
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className=" bg-white border-gray-200 dark:bg-[#161616]">
      <div className='container sm:px-6 mx-auto'>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Guiño
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-[#2b2b2b] dark:focus:ring-[#2b2b2b]"
          aria-controls="navbar-default"
          aria-expanded={menuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          } md:w-auto w-full md:block transition-all duration-300 ease-in-out`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0  ">
            <li>
              <NavLink
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-green-700 md:p-0 dark:text-white md:dark:hover-text-green-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover-bg-transparent"
                activeClassName="active"
                aria-current="page"
              >
                Inicio
              </NavLink>
            </li>


          </ul>
        </div>
        <div className='flex'>
          {/*
      <a className={`${
            menuOpen ? 'hidden' : 'block'} text-gray-200 px-2`} href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      </a>
      */}
        <Cart menuOpen={menuOpen}/>
    </div>
      </div>
      </div>
    </nav>
  );
};

export default Menu;
