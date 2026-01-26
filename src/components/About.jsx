import React from 'react'
import {motion} from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'
const About = () => {
  return (
    <motion.div 
     initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.6, ease: 'easeOut'}}
    viewport={{once:true}}
    id='about'
    className='py-20 bg-dark-200'>
      <div className='container mx-0 px-6'>
        {/*HEADING */}
        <h2 className='text-3xl font-bold text-center mb-4 '>About <span className='text-purple '>Me</span></h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16 '>Get to know more about my background and passion</p>
   {/* image and my journey*/}
        <div className='flex flex-col md:flex-row items-center gap-12'>
          <div className="md:w-1/2 rounded-2xl overflow-hidden" >
          <motion.img
         initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease: 'easeOut'}}
    viewport={{once:false, amount:0.2}}
    className='w-full h-full object-cover'
    src={assets.profileImg}
    alt="profile" />
          </div>
          {/* TEXT CONTAINT */}
          <motion.div
            initial={{opacity:0, y:50}}
    whileInView={{opacity:1, y:0}}
    transition={{duration: 0.9, ease: 'easeOut'}}
    viewport={{once:false, amount:0.2}}
    className='md:w-1/2'
          >
            <div className="rounded-2xl p-8">
              <h3 className='text-2xl font-semibold mb-6'>My Journey</h3>
              <p className='text-gray-300 mb-6'>I am Dipak Patil, a motivated computer science student with a strong interest in full-stack web development. I enjoy creating responsive and user-friendly web applications using modern technologies like React, JavaScript, Node.js, and MongoDB.</p>

              <p className='text-gray-300 mb-12'>I am continuously improving my technical skills through hands-on projects and learning new tools. My goal is to start my career as a software developer, contribute to meaningful projects, and grow as a professional in the tech industry.</p>

              {/* CARDS  */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  aboutInfo.map((data, index)=>(
    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>
      <div className="text-purple text-4xl">
        <data.icon />
      </div>
      <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
      <p className='text-gray-400'>{data.description}</p>
       </div>
                  ))
                }
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
      </motion.div>
  )
}

export default About