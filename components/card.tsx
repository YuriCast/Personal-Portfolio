import React from 'react'

const Card = () => {
  return (
    <div className="mx-auto mt-16 flex h-[600px] w-[1300px] justify-between rounded-2xl border border-[#E6ECF8] bg-white shadow-sm">
      <div className="grid w-full grid-cols-2 grid-rows-3 text-center text-black">
        <div className="border-r border-[#E6ECF8] p-4">
          <h1 className="mt-32 text-2xl font-bold">Designer</h1>
        </div>
        <div className="p-4">
          <h1 className="mt-32 text-2xl font-bold">Frontend Developer</h1>
        </div>
        <div className="border-r border-[#E6ECF8] p-4">
          <h3 className="text-lg font-medium text-[#6E07F3]">
            Designs dos quais gosto de fazer:
          </h3>
          <p className="mt-2 text-lg">UX, UI, Apps, Web</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium  text-[#6E07F3]">
            Linguagens que utilizo:
          </h3>
          <p className="mt-2 text-lg">
            HTML, CSS, Tailwind, Styled-Components, <br /> JavaScript,
            TypeScript, React, React Native
          </p>
        </div>
        <div className="border-r border-[#E6ECF8] p-4">
          <h3 className="text-lg font-medium text-[#6E07F3]">
            Ferramentas de Design:
          </h3>
          <p className="mt-2 text-lg">Figma</p>
          <p className="text-lg">Font Awesome</p>
          <p className="text-lg">Canva</p>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-[#6E07F3]">
            Ferramentas de Desenvolvimento:
          </h3>
          <p className="mt-2 text-lg">VSCode</p>
          <p className="text-lg">Git</p>
          <p className="text-lg">Github</p>
          <p className="text-lg">Terminal</p>
        </div>
      </div>
    </div>
  )
}

export default Card

// <div className="mx-auto flex h-[760px] w-[900px] justify-between rounded-2xl bg-white">
//   <div className="w-1/2 items-center justify-center text-center">
//     <h1 className="mt-16 text-3xl font-bold text-black">Designer</h1>
//     <p className="mt-8 text-[#6E07F3]">Designs dos quais gosto de fazer:</p>
//     <p className="mt-1 text-black">UX, UI, Apps, Web</p>
//     <p className="mt-24 text-[#6E07F3]">Ferramentas de Design:</p>
//     <p className="mt-1 text-black">Figma, Font Awesome</p>
//   </div>

//   <div className="w-1/2 items-center justify-center text-center">
//     <h1 className="mt-16 text-3xl font-bold text-black">
//       Frontend Developer
//     </h1>
//     <p className="mt-8 text-[#6E07F3]">Linguagens que utilizo:</p>
//     <p className="mt-1 text-black">
//       HTML, CSS, Tailwind, Styled-Components, <br /> JavaScript, TypeScript,
//       React, React Native
//     </p>
//   </div>
// </div>
