import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'
import CommonPara from '../common/CommonPara'
import myself from '../assets/me-2.png'
const About = () => {
  return (
    <>
      <section id='about' className=' container px-2 md:px-0 pt-20 md:pt-24'>
        <div className=" grid md:grid-cols-2 md:gap-20 place-items-center">
          {/* ---------left side--------- */}
          <div className=" hidden md:flex justify-center rounded-2xl border-10 border-gray-900 w-full h-full bg-linear-to-bl from-primary/30 via-accent/30 to-secondary/30">
            <img src={myself} alt="Samiya" className='h-150 mt-10'/>
          </div>
          {/* ---------right side--------- */}
          <div className="">
            <div className=" flex items-center gap-2">
              <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
              <CommonSubhead main={"About me"}/>
            </div>
            <CommonHead sub={'Crafting Digital Experiences with'} main={' Passion'}/>
            <CommonPara main={'I am a passionate Front-End Developer dedicated to building responsive, modern, and high-performance websites. My journey in web development is driven by a love for clean UI and exceptional user experiences.'} /><br/>
            <CommonPara main={'With expertise in React, Tailwind CSS, and WordPress, I bridge the gap between complex functionality and elegant design. I focus on real-world projects that solve problems and delight users.'}/>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
