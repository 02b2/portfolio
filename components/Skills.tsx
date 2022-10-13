import React from 'react'
import { motion } from "framer-motion"
import Skill from './Skill'

type Props = {};

export default function Skills({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex relative flex-col text-center md:text-left xl:flex-row 
     xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center' >
        <h3  className='absolute top-24 uppercase tracking-[20px] text-white-500 text-2xl' >
            Skills
        </h3>

        <h3  className='absolute top-36 uppercase tracking-[3px] text-white-500 text-sm'>
            Hover over a skill for proficiency
            </h3>
        <div className="grid grid-cols-4 z-20 gap-5" >
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
             <Skill />
        </div>
        <div className='w-full absolute top-[30%] bg-[#0000ff]/10 left-0 h-[500px] -skew-y-12' >
      <section className='w-full absolute top-[30%] bg-[#cc33ff]/10 left-0 h-[500px]' ></section>
      </div>


    </motion.div>
  );
}