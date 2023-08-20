import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="flex flex-col md:flex  mt-4 md:items-center text-green-intermediate font-bold px-10 md:px-8">
        <h1 className="mt-10 text-5xl md:text-5xl ">Terapias integrativas ¿Qué es el coaching?</h1>
        <p className="mt-10 text-2xl  font-light">Las terapias integrativas y el coaching se complementan para promover el bienestar holístico y el crecimiento personal. Mientras que las terapias integrativas buscan armonizar cuerpo y mente con prácticas como la meditación y el yoga, el coaching se enfoca en el desarrollo de habilidades y el logro de metas.</p>
        <div className="mt-10">

                    <Link className='text-xl text-font-navbar py-4 px-6 text-center text-white bg-brown-light rounded-full border-b-2 md:border-b-0   ' href="#projects">
                      Hace tu pedido
                    </Link>
        </div>
    </section>
  )
}

export default Hero