import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'

const EduTrain = () => {
  return (
    <>
      <section id='projects' className='container px-2 md:px-0 pt-20 md:pt-24'>
        <div className="grid  md:grid-cols-2">
          {/* left side */}
          <div className="">
            <div className=" flex items-center gap-2">
              <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
              <CommonSubhead main={"Education"}/>
            </div>
            <CommonHead sub={'Academic '} main={"Background"} />
          </div>

          {/* right side */}
          <div className=" flex flex-col items-end">
            <div className=" flex items-center gap-2">
              
              <CommonSubhead main={"Training"}/>
              <div className='w-9 h-0.5 rounded-full bg-linear-to-l from-primary via-accent to-secondary'></div>
            </div>
            <CommonHead sub={'Certifications & '} main={"Training"} />
          </div>
        </div>
        
      </section>
    </>
  )
}

export default EduTrain
