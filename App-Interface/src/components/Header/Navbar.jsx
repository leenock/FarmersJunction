// eslint-disable-next-line no-unused-vars
import React from 'react'
import logo from "../../assets/logo.png"
import { RiMenu4Line } from 'react-icons/ri';

const Navbar = () => {
  return (
    <div className='bg-white'>
        <nav>
            <div>
                <img src={logo} alt="Logo" className='h-11 w-auto object-contain'/>
                <ul>
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
                <button>Contact Us</button>

                <button>
                    <RiMenu4Line />
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar



//rafce