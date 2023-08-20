'use client'
import { useState } from "react";
import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
      const [navbar, setNavbar] = useState(false);
    
    return (
      <div className="mb-4">
        <nav className="w-full  top-0 left-0 right-0 z-10 md:pt-4">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/">
                  <Image src="/logo2.svg" width={200} height={200} alt="Logo de Liliana Vacatello"/>
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src="/close.svg" width={30} height={30} alt="logo" />
                    ) : (
                      <Image
                        src="/hamburger.svg"
                        width={30}
                        height={30}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                  <li className="pb-6 text-xl text-font-navbar py-2 md:px-6 text-center border-b-2 md:border-b-0 md:pb-0  hover:bg-green-intermediate border-green-intermediate  md:hover:text-green-intermediate md:hover:bg-transparent">
                    <Link href="#about" onClick={() => setNavbar(!navbar)}>
                      Home
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-font-navbar py-2 px-6 text-center  border-b-2 md:border-b-0 md:pb-0  hover:bg-green-intermediate border-green-intermediate  md:hover:text-green-intermediate md:hover:bg-transparent">
                    <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                      Sobre Mi
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-font-navbar py-2 px-6 text-center  border-b-2 md:border-b-0 md:pb-0  hover:bg-green-intermediate border-green-intermediate  md:hover:text-green-intermediate md:hover:bg-transparent">
                    <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                      Servicios
                    </Link>
                  </li>
                  <li className="pb-6 text-xl text-font-navbar py-2 px-6 text-center text-white bg-brown-light rounded-full border-b-2 md:border-b-0 md:pb-2  ">
                    <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                      Contacto
                    </Link>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
  )
}

export default Navbar