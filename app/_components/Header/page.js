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
      <div className="flex justify-between">
        <div className="flex space-x-7">
          <div>
            <a href="/" className="flex items-center py-4 px-2">
              
              <span className="font-semibold text-gray-500 text-lg">Welcome,</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <a href="/upload" className="py-4 px-2 text-gray-500  hover:text-green-500 hover:border-b-4 hover:border-green-500 font-semibold ">Upload</a>
            <a href="/files" className="py-4 px-2 text-gray-500  hover:text-green-500 hover:border-b-4 hover:border-green-500 font-semibold ">Files</a>
            {/* <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Upgrade</a>
            <a href="" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Newsletter</a> */}
          </div>
        </div>
  
        <div className="hidden md:flex items-center space-x-3 ">
         {!loggedIn ?  <a href="/sign-in" className="py-2 px-2 font-medium rounded bg-green-500 text-white transition duration-300">Log In</a> : <UserButton /> }
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