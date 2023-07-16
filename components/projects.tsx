import React from 'react'

const Projects = () => {
  return (
    <div className="mt-[600px] h-[900px] items-center justify-center text-center">
      <div className="">
        <h1 className="font-semibold  md:text-3xl">Meus Projetos</h1>
        <p className="mt-4 text-lg">
          Aqui estão alguns trabalhos dos quais desenvolvi. Espero que goste!
        </p>
      </div>
      <div className="mx-auto mt-20 grid w-[1300px] grid-cols-3 grid-rows-2 items-center justify-between gap-6 bg-white">
        <div className="h-[270px] rounded-xl bg-gray-100 p-4">Item 1</div>
        <div className="h-[270px] rounded-xl bg-gray-200 p-4">Item 2</div>
        <div className="h-[270px] rounded-xl bg-gray-300 p-4">Item 3</div>
        <div className="h-[270px] rounded-xl bg-gray-400 p-4">Item 4</div>
        <div className="h-[270px] rounded-xl bg-gray-500 p-4">Item 5</div>
        <div className="h-[270px] rounded-xl bg-gray-600 p-4">Item 6</div>
      </div>
      <div>
        <div className="mt-12">
          <a
            className='className="cursor-pointer rounded-3xl border-2 border-[#6E07F3] bg-white px-12 py-3 font-medium text-[#6E07F3] transition-colors duration-200 ease-in-out hover:bg-[#6E07F3] hover:text-white'
            href=""
          >
            Veja mais aqui!
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
