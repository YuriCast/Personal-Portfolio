import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
      <h1 className='w-full text-3xl font-bold text-[#6E07F3] cursor-pointer'>YC.</h1>
      <ul className='flex'>
        <li className='py-1 px-4 text-[#141C3A] cursor-pointer hover:text-[#6E07F3] transition-colors duration-200 ease-in-out'>About</li>
        <li className='py-1 px-4 text-[#141C3A] cursor-pointer hover:text-[#6E07F3] transition-colors duration-200 ease-in-out'>Projects</li>
        <li className='py-1 px-4 text-[#6E07F3] border-2 border-[#6E07F3] rounded-2xl cursor-pointer bg-white hover:bg-[#6E07F3] hover:text-white transition-colors duration-200 ease-in-out'>Contact</li>
      </ul>
    </header>
  )
}

export default Header