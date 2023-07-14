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
      <div className="mx-auto mt-24 grid h-[600px] w-[1100px] grid-cols-2 grid-rows-2 items-center justify-between gap-2 bg-slate-300">
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
        <div>item 1</div>
      </div>
    </div>
  )
}

export default Projects
