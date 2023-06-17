'use client'

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu, } from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#6E07F3] cursor-pointer'>YC.</h1>
      <ul className='hidden md:flex'>
        <li className='py-1 px-4 text-[#141C3A] cursor-pointer hover:text-[#6E07F3] transition-colors duration-200 ease-in-out'>About</li>
        <li className='py-1 px-4 text-[#141C3A] cursor-pointer hover:text-[#6E07F3] transition-colors duration-200 ease-in-out'>Projects</li>
        <li className='py-1 px-4 text-[#6E07F3] border-2 border-[#6E07F3] rounded-2xl cursor-pointer bg-white hover:bg-[#6E07F3] hover:text-white transition-colors duration-200 ease-in-out'>Contact</li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-300 bg-white ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#6E07F3] cursor-pointer m-6'>YC.</h1>
        <ul className='py-20 p4 uppercase'>
          <li className='py-1 px-5 text-[#141C3A] cursor-pointer border-b border-[#6E07F3]'>About</li>
          <li className='py-1 px-5 text-[#141C3A] cursor-pointer border-b border-[#6E07F3]'>Projects</li>
          <li className='py-1 px-5 text-[#141C3A] cursor-pointer border-b border-[#6E07F3]'>Contact</li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar