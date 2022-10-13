import React from 'react'
import { motion } from "framer-motion"
import ExperienceCard from './ExperienceCard';

type Props = {}

function Experience({}: Props) {
  return <motion.div className='h-screen flex relative overflow-hidden flex-col text-left max-w-full
  px-10 justify-evenly mx-auto items-center ' >
    <div>
      
    </div>
      <h3 className='absolute z-20 justify-evenly top-24 uppercase tracking-[20px] text-white-500 text-2xl' >
      Experience
      </h3>

      <div className='w-full z-20 flex overflow-x-scroll p-10 snap-x snap-mandatory 
      scrollbar scrollbar-track-gray-500 scrollbar-thumb-[#cc33ff]' >
          {/*eCard*/}
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
          <ExperienceCard/>
      </div>
      <div className='w-full absolute top-[30%] bg-[#0000ff]/10 left-0 h-[500px] -skew-y-12' >
      <section className='w-full absolute top-[30%] bg-[#cc33ff]/10 left-0 h-[500px]' ></section>
      </div>
  </motion.div>;
}

export default Experience