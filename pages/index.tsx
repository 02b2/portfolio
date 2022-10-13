import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory scroll-smooth
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#cc33ff]' >
      <Head>
        <title>Pedr02b2 Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/** Header */}
      <Header/>

      {/** Hero */}
      <section id="hero" className='snap-start'>
      <Hero/>
      </section>

      {/** About */}
      <section id="about" className="snap-center" >
        <About/>
      </section>

      {/** Experience */}
      <section id="experience" className="snap-center" >
        <Experience/>
      </section>

      <section id='skills' className='snap-start' > 
        <Skills/>
      </section>

      {/** Projects */}
      <section id="projects" className='snap-center' >
        <Projects/>

      </section>
      {/** Contact Me */}
      <section id="contact" className="snap-start" >
        <Contact/>

      </section>

      <Link href="#hero" >
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center' >
            <img
            className='h-10 rounded-full filter greyscale hover:grayscale-0
            cursor-pointer'
            src="me.png"
            alt=""
            />
            

          </div>
        </footer>
      </Link>

    </div>
  )
}

export default Home
