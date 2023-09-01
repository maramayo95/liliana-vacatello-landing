import React from 'react'
import Image from 'next/image'
const AboutTwo = () => {
  return (
    <section className="px-4 py-10">
        <h3 className="py-6 text-center text-4xl text-green-dark font-bold">¿Querés conocer más sobre mi? </h3>

        <section className="flex justify-center py-6">
            <Image className="mx-2" src="/instagram.svg" alt="Instagram" width={50} height={50}/>
            <Image className="mx-2" src="/linkedin.svg" alt="Instagram" width={50} height={50}/>
            <Image className="mx-2" src="/instagram.svg" alt="Instagram" width={50} height={50}/>
        </section>
    </section>
  )
}

export default AboutTwo