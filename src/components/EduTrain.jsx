import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'
import { IoBookOutline } from 'react-icons/io5'
import CommonPara from '../common/CommonPara'
import { LuWrench } from 'react-icons/lu'

const EduTrain = () => {

  return (
    <>
      <section className='container px-2 md:px-0 pt-20 md:pt-24'>
        <div className="grid  md:grid-cols-2 gap-20">
          {/* left side */}
          <div className="">
            <div className=" flex items-center gap-2">
              <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
              <CommonSubhead main={"Education"}/>
            </div>
            <CommonHead sub={'Academic '} main={"Background"} />
              {/* ---------diploma info--------- */}
            <div className=" relative pl-12 pb-8 mt-10">
              {/* --------------rocked line-------------- */}
              <div className="absolute left-4.75 top-3 bottom-0 w-0.5 bg-linear-to-b from-primary via-accent to-secondary "></div>
             
              <div className="absolute left-0 -top-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-primary/30 z-10 group-hover:scale-110 transition-transform">
                <IoBookOutline className="text-primary text-lg" />
              </div>
              {/* -------info------- */}
              <div className=" p-4 md:p-8 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-101 hover:shadow-[0px_0px_40px] shadow-primary/30">

                <h5 className="text-secondary font-Poppons font-bold text-[12px] md;text-sm tracking-widest uppercase mb-2 block">2022 - 2025</h5>

                <h3 className="text:xl md:text-2xl font-Poppons font-bold mb-2 text-white">Diploma in Engineering</h3>

                <p className="text-gray-300 font-Inter text-sm md:text-[16px] font-medium mb-4">Computer Science & Technology (CST)</p>

                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg border border-primary/20 font-Inter text-sm md:text-[16px]">
                  <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mr-2">Result:</p>
                  <p className="text-primary font-bold text-lg">CGPA 3.54</p>
                </div>
              </div>
            </div>
              {/* ---------ssc info--------- */}
            <div className=" relative pl-12 mt-2 ">
              {/* --------------rocked line-------------- */}
              <div className="absolute left-4.75 top-3 bottom-0 w-0.5 bg-linear-to-t from-primary from-20% via-accent via-30% to-secondary to-50%"></div>
             
              <div className="absolute left-0 -top-1 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-secondary/30 z-10 group-hover:scale-110 transition-transform">
                <IoBookOutline className="text-secondary text-lg" />
              </div>
              {/* -------info------- */}
              <div className=" p-4 md:p-8 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-101 hover:shadow-[0px_0px_40px] shadow-primary/30">

                <h5 className="text-secondary font-Poppons font-bold text-[12px] md;text-sm tracking-widest uppercase mb-2 block">2021</h5>

                <h3 className="text:xl md:text-2xl font-Poppons font-bold mb-2 text-white"> Secondary School Certificate (SSC)</h3>

                <p className="text-gray-300 font-Inter text-sm md:text-[16px] font-medium mb-4">Business Studies Group</p>

                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-lg border border-primary/20 font-Inter text-sm md:text-[16px]">
                  <p className="text-sm font-semibold text-gray-300 uppercase tracking-wider mr-2">Result:</p>
                  <p className="text-primary font-bold text-lg">GPA 3.61</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="">

            <div className=" flex flex-col md:items-end">
              <div className=" flex items-center gap-2">

                <CommonSubhead main={"Training"}/>
                <div className='w-9 h-0.5 rounded-full bg-linear-to-l from-primary via-accent to-secondary'></div>

              </div>
              <CommonHead sub={'Certifications & '} main={"Training"} />
            </div>

            <div className="p-6 md:p-7 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-101 hover:shadow-[0px_0px_40px] shadow-primary/30 mt-10">
              <div className=''>
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <LuWrench className="text-secondary text-xl" />
                </div>
              </div>
              <CommonPara main={'jjd'}/>
            </div>
          </div>
          
        </div>
        
      </section>
    </>
  )
}

export default EduTrain
