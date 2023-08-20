import React from 'react'

const Contact = () => {
  return (
    <section className="bg-beige px-6 py-4">
        <h3 className="py-5 text-6xl text-green-light font-bold">Contacto</h3>
        
        <form className="flex flex-col justify-center " action="">
            <input className="px-3 py-2 rounded-lg shadow-lg" type="text"  placeholder='Escribí acá tu nombre y apellido'/>
            <input className="mt-4 px-3 py-2 rounded-lg shadow-lg" type="text" placeholder='Escribí acá tu nombre y apellido' />
            <input className="mt-4 px-3 py-2 rounded-lg shadow-lg" type="text" placeholder='Escribí acá tu nombre y apellido' />
            <textarea className="mt-4 px-3 py-2 rounded-lg shadow-lg" name="" id="" cols={30} rows={10} placeholder='Escribí acá tu nombre y apellido'></textarea>
            <input  className=" bg-green-light hover:bg-green-dark rounded-lg  px-3 py-2 text-white font-semibold text-2xl my-6 " type="submit" value="Enviar" />
        </form>
    </section>
  )
}

export default Contact