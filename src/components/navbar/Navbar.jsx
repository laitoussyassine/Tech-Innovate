"use client"
import Link from 'next/link.js';
import { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import {links} from "./data.js";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-gray-900 sm:flex sm:justify-between sm:items-center sm:px-6 sm:py-5">
        <div className="flex items-center justify-between px-4 py-3 sm:p-0">
          <div>
            <h3 className='text-mainColor text-xl font-bold'><span className='text-white'>Tech</span> Innovate</h3>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="block text-white hover:text-mainColor focus:text-mainColor focus:outline-none"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
        <nav className={`${isOpen ? 'block' : 'hidden'} px-2 pt-2 pb-4 sm:flex sm:p-0`}>
          {links.map((link) => (
            <Link key={link.id} href={link.url} className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 hover:text-mainColor">
              {link.title}
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
