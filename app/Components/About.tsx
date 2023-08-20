import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section className=" flex flex-col mt-10 bg-green-dark">
        <div className="mt-6 flex justify-center items-center ">
            <Image className="py-5" src="/about.png" alt="Picture of the author"
            width={320} height={350}
            />
        </div>

        <div className="px-10 my-6">
            <h3 className="text-white font-semibold text-5xl">Liliana</h3>
            <h4 className="text-white font-semibold text-6xl">Vacatello</h4>
            <p className="mt-10 text-2xl font-light text-white">
                Es una apasionada profesional del coaching y bienestar, con especialización en meditación y mindfulness. Con amplia experiencia, guía a sus clientes hacia un equilibrio emocional y mayor conciencia del presente, combinando el coaching con prácticas de meditación.</p>
        </div>
    </section>
  )
}

export default About