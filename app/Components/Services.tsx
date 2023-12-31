import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <section className="bg-beige flex flex-col justify-center items-center pt-10 pb-16 w-[100vw]">
        <h3 className=" text-5xl text-green-dark font-bold px-10 xl:py-10 ">Meditación, mindfullness y bienestar holístico.</h3>
        <div className="  flex flex-col m-auto w-full sm:container 2xl:max-w-screen-xl xl:flex xl:flex-row">
           <article className="flex flex-col justify-center items-center">
              <Image src="/servicio_un.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-lg xl:text-2xl font-light text-green-dark px-4 ">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
           <article className="flex flex-col justify-center items-center">
              <Image src="/service_do.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-lg xl:text-2xl font-light text-green-dark px-4 ">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
           <article className="flex flex-col justify-center items-center">
              <Image src="/service_tre.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-lg xl:text-2xl font-light text-green-dark px-4 ">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
        </div>
    </section>
  )
}

export default Services