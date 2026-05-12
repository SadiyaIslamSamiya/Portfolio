import React from 'react'
import heroimg from '../assets/banner.png'
import { FaArrowRightLong } from 'react-icons/fa6'
import CommonSubhead from '../common/CommonSubhead'
import CommonPara from '../common/CommonPara'
const Hero = () => {
  return (
    <>
      <section id='home' className='pt-20 md:pt-24 md:pb-15 relative mx-2 md:mx-0'>
        {/* ----design element---- */}
        <div className=" absolute top-12.5 md:top-12.5 right-[16%] md:right-[25%] w-40 md:w-100 h-40 md:h-100 bg-accent/80 md:bg-accent/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-25 md:bottom-12.5 left-[20%] md:left-[30%] w-40 md:w-100 h-40 md:h-100 bg-secondary/60 md:bg-secondary/20 rounded-full blur-[120px]"></div>
        
        <div className=" container grid md:grid-cols-2 items-center z-50">
          {/* ----left side---- */}
          <div className=" text-center md:text-left">
            <CommonSubhead main={"Welcome to my portfolio"}></CommonSubhead>

            <h1 className=" py-4 text-[45px] md:text-[98px]/30 font-Poppons font-bold text-transparent bg-linear-to-r from-primary via-accent to-secondary bg-clip-text"> <span className='text-white'>I'm</span><br/> Sadiya Islam Samiya</h1>

            <h2 className="font-bold font-Poppons text-2xl md:text-3xl text-gray-400">Front-End Developer</h2>
            
            <CommonPara main={"Building clean, modern, and user-friendly web experiences. I specialize in creating responsive interfaces that blend high performance with stunning aesthetics."}/>

            <div className="w-[60%] md:w-full font-Inter flex flex-col mx-auto md:items-center md:flex-row pt-10 gap-6">
              <a href="#projects" className=' px-6 md:px-8 py-2 md:py-4 bg-primary hover:bg-primary/80 text-white rounded-full text-[12px] md:text-base font-semibold transition-all duration-400 flex items-center gap-8 '>
                View Projects <FaArrowRightLong  className='text-base md:text-xl'/>
              </a>
              <a href="#contact" className='px-6 md:px-8 py-2 md:py-4 bg-gray-400/10 text-white rounded-full text-[12px] md:text-base font-semibold transition-all duration-400 flex items-center gap-8 '>
                Contact Me
              </a>

            </div>
          </div>
          {/* ----right side---- */}
          <div className="hidden md:flex text-left justify-end ">
            <img src={heroimg} alt="hero image" className='w-[80%]'/>
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Hero
