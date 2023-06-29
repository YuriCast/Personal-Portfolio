import React from 'react'

const Card = () => {
  return (
    <div className="mx-auto flex h-[760px] w-[900px] justify-between rounded-2xl bg-white">
      <div className="w-1/2 items-center justify-center border-r-2 text-center">
        <h1 className="mt-16 text-3xl font-bold text-black">Design</h1>
        <p className="mt-6 text-black">
          Eu valorizo designs limpos e intuitivos, sempre utilizando de bons
          costumes de UI/UX
        </p>
      </div>
      <div className="w-1/2 items-center justify-center text-center ">
        <h1 className="mt-16 text-3xl font-bold text-black">Frontend</h1>
        <p className="mt-6 text-black">jnsadlkjabshjdblas;bj</p>
      </div>
    </div>
  )
}

export default Card
