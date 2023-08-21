import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="flex flex-col mt-4 text-green-intermediate font-bold px-10  md:flex-row lg:flex-row md:items-center   m-auto w-full sm:container 2xl:max-w-screen-xl">
    
        <div className="xl:w-1/2">
          <h1 className="mt-10 text-5xl xl:text-6xl ">Terapias integrativas ¿Qué es el coaching?</h1>
          <p className="mt-10 text-2xl  font-light">Las terapias integrativas y el coaching se complementan para promover el bienestar holístico y el crecimiento personal. Mientras que las terapias integrativas buscan armonizar cuerpo y mente con prácticas como la meditación y el yoga, el coaching se enfoca en el desarrollo de habilidades y el logro de metas.</p>
            <div className="mt-10">
                        <Link className='text-xl text-font-navbar py-4 px-6 text-center text-white bg-brown-light rounded-full border-b-2 md:border-b-0   ' href="#projects">
                          Hace tu pedido
                        </Link>
            </div>
        </div>
      
        <div className="hidden xl:block xl:w-1/2">
         <Image className="w-full h-auto" src="/hero.png" height={500} width={500} alt="Imagen Hero" />        
        </div>
    
    </section>
  )
}

export default Hero