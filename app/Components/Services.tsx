import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <section className="flex flex-col justify-center items-center py-10">
        <h3 className="px-10 text-5xl text-green-dark font-bold">Meditación, mindfullness y bienestar holístico.</h3>
           <article className="flex flex-col justify-center items-center">
              <Image src="/servicio_un.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-2xl font-light text-green-dark px-4">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
           <article className="flex flex-col justify-center items-center">
              <Image src="/service_do.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-2xl font-light text-green-dark px-4">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
           <article className="flex flex-col justify-center items-center">
              <Image src="/service_tre.png" width="300" height="300" alt="Servicio uno"/>
              <p className="text-center text-2xl font-light text-green-dark px-4">Meditación y mindfulness brindan calma y conciencia en el presente, favoreciendo una respuesta serena ante los desafíos de la vida y promoviendo el bienestar integral.</p>
           </article>
    </section>
  )
}

export default Services