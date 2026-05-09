import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'
import CommonPara from '../common/CommonPara'

const Projects = () => {
  return (
    <>
      <section id='projects' className='container px-2 md:px-0 pt-20 md:pt-24'>
        <div className="">
          <div className=" flex items-center gap-2">
            <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
            <CommonSubhead main={"Projects"}/>
          </div>
          <CommonHead sub={'Showcasing '} main={"My Works"} />
        </div>
      </section>
    </>
  )
}

export default Projects
