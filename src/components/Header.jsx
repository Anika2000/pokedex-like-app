import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'
import { FaSearch } from "react-icons/fa";

const Header = () => {
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
        <FaSearch className='cursor-pointer'/>

      </div>
    </div>
  )
}

export default Header