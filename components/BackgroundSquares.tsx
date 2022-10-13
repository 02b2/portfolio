import React from 'react'
import { motion } from 'framer-motion';

type Props = {}

function BackgroundSquares({}: Props) {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition= {{
            duration: 2.5,
        }}
    className='relative flex justify-center items-center' >
        <div className='absolute border border-[#969393] square rounded-md h-[100px] w-[100px] mt-52 animate-ping ' />
        <div className='absolute border opacity-0 border-[#333333] square rounded-md h-[300px] w-[300px] mt-52 animate-pulse' />
        <div className='absolute border opacity-0 border-[#333333] square rounded-md h-[400px] w-[400px] mt-52 animate-pulse' />
        <div className='absolute border opacity-5 border-[#f7ab0a] square rounded-md h-[500px] w-[500px] mt-52 animate-pulse ' />
    </motion.div>
  )
}

export default BackgroundSquares