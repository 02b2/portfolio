import React from 'react'
import { motion } from "framer-motion"


type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5];
  return <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 1.5}}
  className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full
  justify-evenly mx-auto items-center z-0' >
      <h3 className='absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl' >
          Projects
          </h3>

          <div className='relative w-full flex top-36 overflow-x-scroll overflow-y-hidden snap-x
          snap-mandatory z-20 scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#cc33ff]' >
             {projects.map((project, i) => (
                 <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 snap-x snap-mandatory items-center' >
                     <motion.img 
                         initial={{ y: -300, opacity: 0 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         transition={{ duration: 1.5}}
                         viewport={{ once: true }}
                        className="flex-shrink-0 max-w-200px" src='me.png' />

                 <div className='space-y-10 px-0 md:px-10 max-w-6xl' >
                     <h4 className='text-4xl font-semibold text-center' >
                         <span className='underline decoration-[#000fff]/50' >Case Study {i+1} of {projects.length}:
                         </span> DERO Bridge
                     </h4>
                     <p className='text-lg text-center md:text-left' >Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt 
              ut labore et dolore magna aliqua.</p>
                     </div>
                 </div>
             ) )}
          </div>

  <div className='w-full absolute top-[30%] bg-[#0000ff]/10 left-0 h-[500px] -skew-y-12' >
      <section className='w-full absolute top-[30%] bg-[#cc33ff]/10 left-0 h-[500px]' ></section>

  </div>
  </motion.div>
}

export default Projects