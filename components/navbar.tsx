'use client'

import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4">
      <h1 className="w-full cursor-pointer text-3xl font-bold text-[#6E07F3]">
        YC.
      </h1>
      <ul className="hidden md:flex">
        <li className="cursor-pointer px-4 py-1 text-[#141C3A] transition-colors duration-200 ease-in-out hover:text-[#6E07F3]">
          About
        </li>
        <li className="cursor-pointer px-4 py-1 text-[#141C3A] transition-colors duration-200 ease-in-out hover:text-[#6E07F3]">
          Projects
        </li>
        <li className="cursor-pointer rounded-2xl border-2 border-[#6E07F3] bg-white px-4 py-1 text-[#6E07F3] transition-colors duration-200 ease-in-out hover:bg-[#6E07F3] hover:text-white">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          !nav
            ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-300 bg-white duration-500 ease-in-out'
            : 'fixed left-[-100%]'
        }
      >
        <h1 className="m-6 w-full cursor-pointer text-3xl font-bold text-[#6E07F3]">
          YC.
        </h1>
        <ul className="p4 py-20 uppercase">
          <li className="cursor-pointer border-b border-[#6E07F3] px-5 py-1 text-[#141C3A]">
            About
          </li>
          <li className="cursor-pointer border-b border-[#6E07F3] px-5 py-1 text-[#141C3A]">
            Projects
          </li>
          <li className="cursor-pointer border-b border-[#6E07F3] px-5 py-1 text-[#141C3A]">
            Contact
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
