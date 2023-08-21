import React from "react";
import send from '../assets/send.svg'
import Image from "next/image";
const Contact = () => {
  return (
    <section className="bg-beige px-6 py-4 flex flex-col m-auto w-full sm:container 2xl:max-w-screen-xl xl:mx-8 xl:rounded-3xl ">
      <h3 className="py-5 text-6xl text-green-light font-bold">Contacto</h3>

      <form className="flex flex-col justify-center " action="">
        <div className="xl:flex xl:flex-row gap-4">
          <div className="flex flex-col  xl:w-2/5 justify-around">
            <input
              className="px-4 py-3 rounded-lg shadow-lg"
              type="text"
              placeholder="Escribí acá tu nombre y apellido"
            />
            <input
              className="mt-4 px-4 py-3 rounded-lg shadow-lg"
              type="text"
              placeholder="Escribí acá tu nombre y apellido"
            />
            <input
              className="mt-4 px-4 py-3 rounded-lg shadow-lg"
              type="text"
              placeholder="Escribí acá tu nombre y apellido"
            />
          </div>

          <div className=" xl:w-3/5">
            <textarea 
              className="mt-4 px-3 py-4 rounded-lg shadow-lg w-full"
              name=""
              id=""
              cols={30}
              rows={8}
              placeholder="Escribí acá tu nombre y apellido"
            ></textarea>
          </div>
        </div>
        <div className="xl:flex  xl:justify-end ">
        <button
          className=" bg-green-light hover:bg-green-dark rounded-lg  px-6 py-2 text-white font-semibold text-2xl my-6 flex items-center gap-3 "
          type="submit"
        > <Image src={send} width={30} height={30} alt="Enviar"/>Enviar </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
