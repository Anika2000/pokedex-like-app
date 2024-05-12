import Link from 'next/link'
import React from 'react'

const NavLink = ({href, children}) => {
  return (
    <Link href={href} className='rounded-full border border-gray-500 hover:bg-red-500
     text-white px-4 py-2 transition duration-300 ease-in-out m-2'>
        {children}
    </Link>
  )
}

export default NavLink