"use client"
import { UserButton } from '@clerk/nextjs';
import React, { useState } from 'react'

const Header = ({loggedIn}) => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const handleButtonClick = () => {
    setIsMenuHidden(prevState => !prevState);
  };
  return (
    <nav className="bg-white shadow-lg">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between py-2">
        <div className="flex space-x-7">
          <div>
            <a href="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-500 text-lg">FILE SHARE APP</span>
            </a>
          </div>
        </div>
  
        <div className="hidden md:flex items-center space-x-1 ">
        <a href="/upload" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">UPLOAD FILES</a>
         {!loggedIn ?  <a href="/sign-in" className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">LOGIN</a> : <UserButton /> }
        </div>

        <div className="md:hidden flex items-center">
          <button className="outline-none mobile-menu-button" onClick={()=>handleButtonClick()}>
          <svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
            x-show="!showMenu"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        </div>
      </div>
    </div>

    <div className={`mobile-menu ${isMenuHidden ? 'hidden' : ''}`}>
      <ul className="">
        <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-black bg-green-500 font-semibold">Home</a></li>
        <li><a href="#services" className="block text-sm px-2 py-4 text-black hover:bg-green-500 transition duration-300">Services</a></li>
        <li><a href="#about" className="block text-sm px-2 py-4 text-black hover:bg-green-500 transition duration-300">About</a></li>
        <li><a href="#contact" className="block text-sm px-2 py-4 text-black hover:bg-green-500 transition duration-300">Contact Us</a></li>
      </ul>
    </div>
    
  </nav>
  
  )
}

export default Header;