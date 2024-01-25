// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../../assets/logo.png"
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className="bg-background sticky top-0 z-10">
        <nav className="max-w-screen-xl mx-auto py-4 px-6">
            <div className="flex items-center justify-between">
                <img src={logo} alt="Logo" className="h-11 w-auto object-contain" />
                <ul className="hidden md:flex md:gap-14">
                    <li>
                        <a className="menu-item">Home</a>
                    </li>
                    <li>
                        <a className="menu-item">Services</a>
                    </li>
                    <li>
                        <a className="menu-item">Our Work</a>
                    </li>
                    <li>
                        <a className="menu-item">Testmonials</a>
                    </li>
                </ul>
                <button className="hidden h-10 bg-primary text-white text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block">Contact Us</button>

                <button className="w-11 h-11 bg-blue-100 text-2xl text-primary flex items-center justify-center rounded">
                    <RiMenu4Line />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar



//rafce