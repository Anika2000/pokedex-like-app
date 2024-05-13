"use client"
import React from 'react'
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";

const PrevNext = ({prevPage, nextPage}) => {
  return (
    <div className='flex justify-center my-6'>
        {prevPage && <GrCaretPrevious onClick={prevPage} className='text-red-500 cursor-pointer text-3xl hover:scale-125 
            transition-transform duration-200 ease-out'/>}
        {nextPage && <GrCaretNext onClick={nextPage} className='text-red-500 cursor-pointer text-3xl hover:scale-125 
            transition-transform duration-200 ease-out'/>}
    </div> 
  )
}

export default PrevNext