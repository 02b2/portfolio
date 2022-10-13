import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export function About({}: Props) {
  return <motion.div className="h-screen flex flex-col relative text-center md:text-left
  md:flex-row px-10 justify-evenly mx-auto items-center">
       <div className='w-full absolute top-[30%] bg-[#0000ff]/10 left-0 h-[500px] -skew-y-12' >
      <section className='w-full absolute top-[30%] bg-[#cc33ff]/10 left-0 h-[500px]' ></section>
      </div>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl' >
          About
      </h3>

      <motion.img
      initial={{
          x: -200,
      }}
      transition={{ duration: 1.2, }}
      whileInView={{
          opacity: 1,
        x: 0
      }}
      viewport={{ once: true }}
      
      src="me.png"
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 z-20 rounded-full object-cover md:rounded-lg
      md:w-64 md:h-95 xl:w-500px] hl:h-[700px]'
      />
      <div className='space-y-10 md:px-10' >
          <h4 className='text-4xl justify-center font-semibold' >Who <span className='underline decoration-[#f7ab0a]'>
              Am</span>{" "} I?</h4>
              <p>"Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip 
              ex ea commodo consequat. Duis aute irure dolor 
              in reprehenderit in voluptate velit esse cillum 
              dolore eu fugiat nulla pariatur. Excepteur sint 
              occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum."</p>
      </div>
      
  </motion.div>;
  
  
}

export default About

{/* <img
className='relative rounded-full h-32 w-32 mx-auto object-cover'
src="me.png"
alt=''
/> */}