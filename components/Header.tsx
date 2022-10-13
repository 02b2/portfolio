import React from 'react'
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion"
import Link from 'next/link';


type Props = {}

export default function Header({} : Props) {
  return (
    <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center p-5' >
        <motion.div
         initial={{
            x: -500,
            opacity: 0,
            scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
         className='social-links blue_neon flex flex-row items-center' >
            {/*Social Icons*/}
            <SocialIcon 
            url="https://www.twitter.com"
            className="fg-gradient-to-r from-indigo-500 to-blue-500"/>
            <SocialIcon 
            url="https://www.youtube.com"
            className="fg-gradient-to-r from-indigo-500 to-blue-500"/>
            <SocialIcon 
            url="https://www.instagram.com"
            className="fg-gradient-to-r from-indigo-500 to-blue-500"/>
            <SocialIcon 
            url="https://www.linkdin.com"
            className="fg-gradient-to-r from-indigo-500 to-blue-500"/>
        </motion.div>
            
            <Link href="#contact" >

        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1.5,
            }}
        className="fg-gradient-to-r from-indigo-500 to-blue-500 flex flex-row items-center cursor-pointer" >
        <SocialIcon
            network="email"/>
        <p className='uppercase hidden md:inline-flex text-sm text-gray-400' >Contact Me</p>
        </motion.div>
        </Link>
    </header>
  )
}
