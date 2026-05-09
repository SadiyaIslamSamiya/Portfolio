import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'

const Contact = () => {
  return (
    <>
      <section id='contect' className='container px-2 md:px-0 pt-20 md:pt-24'>
        <div className="flex flex-col items-center">
          <div className=" flex items-center gap-2 text-center">
            <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
            <CommonSubhead main={"Contact"}/>
            <div className='w-9 h-0.5 rounded-full bg-linear-to-l from-primary via-accent to-secondary'></div>
          </div>
          <CommonHead sub={"Let's Build Something "} main={"Amazing"} />
        </div>
      </section>
    </>
  )
}

export default Contact
