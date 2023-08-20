import Image from 'next/image'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import AboutTwo from './Components/AboutTwo'
import Footer from './Components/Footer'

export default function Home() {
  return (
    <main className="flex-1 flex-col">
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Contact/>
      <AboutTwo/>
      <Footer/>
    </main>
  )
}
