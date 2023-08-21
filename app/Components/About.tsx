import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className=" flex flex-col mt-10 bg-green-dark xl:flex-row   w-[100vw]  ">
      <div className="flex flex-col xl:flex-row m-auto w-full sm:container 2xl:max-w-screen-xl py-4">
        <div className="mt-6 flex justify-center items-center">
            <Image className="py-5 w-full px-10 height-auto" src="/about.png" alt="Picture of the author"  width={300} height={300}
            />
        </div>

        <div className="px-10  xl:w-1/2  flex flex-col justify-center ">
            <h3 className="text-white font-semibold text-5xl xl:text-7xl">Liliana</h3>
            <h4 className="text-white font-semibold text-6xl xl:text-8xl">Vacatello</h4>
            <p className="mt-10 text-2xl font-light text-white">
                Es una apasionada profesional del coaching y bienestar, con especialización en meditación y mindfulness. Con amplia experiencia, guía a sus clientes hacia un equilibrio emocional y mayor conciencia del presente, combinando el coaching con prácticas de meditación.</p>
        </div>

      </div>
    </section>
  )
}

export default About