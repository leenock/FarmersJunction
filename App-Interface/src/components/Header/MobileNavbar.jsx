import React from 'react'
import logo from "../../assets/logo.png"

const MobileNavbar = (setIsMenuOpen) => {
  return (
    <div>
    <div className="">
         <img src={logo} alt="Logo" className="w-16 object-contain mb-8" />
         <ul>
            <li className="mb-5">
                <a className="menu-item">Home</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Services</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Our Work</a>
            </li>
            <li className="mb-5">
                <a className="menu-item">Testmonials</a>
            </li>
         </ul>
         <button className="">Contact Us</button>
    </div>
    <div onClick={() => {}} className=""></div>
    </div>
  )
}

export default MobileNavbar