"use client"

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { FaSearch } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';

const Header = () => {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
          if (inputRef.current && !inputRef.current.contains(e.target)) {
            setIsSearchOpen(false);
          }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);

  useEffect(() => {
    if (isSearchOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isSearchOpen]);

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
      };


  return (
    <div className='shadow-sm sticky top-0 bg-white bg-opacity-30 z-30 p-3'>
      <div className='flex justify-between items-center max-w-6xl mx-auto'>
        {/* logo */}
        <Link href='/'>
            <Image src='/pokemon-main-logo.png' width={100} height={100} alt='logo' />
        </Link>

        {/* redirects */}
        <div>
            <NavLink href='/'>Home</NavLink>
            <NavLink href='/about'>About</NavLink>
            <NavLink href='/contact'>Contact</NavLink>
        </div>
        
        {/* search icon */}
        <FaSearch className='cursor-pointer' onClick={toggleSearch}/>

        {isSearchOpen && (<div
          className={`fixed inset-0 z-40 flex justify-center items-center 
          transition-opacity duration-300 ease-in-out ${
            isSearchOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 backdrop-blur-sm"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 
          -translate-y-1/2 w-3/4 max-w-md">
            <form>
            <input
                ref={inputRef}
                type="text"
                placeholder="Please 'Return' to Search"
                className="bg-transparent w-full text-3xl 
                text-white placeholder-gray-400 outline-none focus:outline-none
                text-left"
              />
            </form>
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default Header