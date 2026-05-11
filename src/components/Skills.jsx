import React from 'react'
import CommonHead from '../common/CommonHead'
import CommonSubhead from '../common/CommonSubhead'
import { FaCode } from 'react-icons/fa'
import { LuWrench } from 'react-icons/lu'
import { FiLayout } from 'react-icons/fi'

const Skills = () => {

const frontend =[{name:'HTML5'},{name:'CSS3'},{name:'JavaScript'},{name:'React'},{name:'Tailwind'},{name:'Bootstrap'}]

const tools = [{name:'Git'}, {name:'GitHub'}, {name:'VS Code'}, {name:'Figma'}, {name:'Canva'}]
const cms = [{name:'WordPress'}, {name:'Elementor'}]

  return (
    <>
      <section id='skills' className='container px-2 md:px-0 pt-20 md:pt-24'>

        {/* ---top content--- */}
        <div className=" flex flex-col items-center">

          <div className=" flex items-center gap-2 ">
            <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
            <CommonSubhead main={"Skills"}/>
            <div className='w-9 h-0.5 rounded-full bg-linear-to-l from-primary via-accent to-secondary'></div>
          </div>
          <div className="text-center">
            <CommonHead sub={'Tools of '} main={"My Craft"} />
          </div>
          

        </div>
        
        {/* ---bottom content--- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10">

          {/* ------------frontend------------ */}
          <div className="p-10 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-103 hover:shadow-[0px_0px_40px] shadow-primary/30">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <FaCode className="text-accent text-xl" />
              </div>
              <h3 className=" text-xl font-semibold text-white font-Poppons">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {frontend.map((link)=>(
                <span key={link.name} className="px-3 py-1.5 rounded-xl text-[14px] text-gray-300 bg-white/5 border border-white/10">{link.name}</span>
              ))}
              
            </div>
          </div>
          {/* ------------Tools------------ */}
          <div className="p-10 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-103 hover:shadow-[0px_0px_40px] shadow-primary/30">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <LuWrench className="text-secondary text-xl" />
              </div>
              <h3 className=" text-xl font-semibold text-white font-Poppons">Tools</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((link)=>(
                <span key={link.name} className="px-3 py-1.5 rounded-xl text-[14px] text-gray-300 bg-white/5 border border-white/10">{link.name}</span>
              ))}
              
            </div>
          </div>

          {/* ------------CMS------------ */}
          <div className="p-10 bg-white/5 border border-white/10 hover:border-primary/30 rounded-2xl hover:bg-white/10 transition-all duration-500 hover:scale-103 hover:shadow-[0px_0px_40px] shadow-primary/30">

            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <FiLayout className="text-accent text-2xl" />
              </div>
              <h3 className=" text-xl font-semibold text-white font-Poppons">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cms.map((link)=>(
                <span key={link.name} className="px-3 py-1.5 rounded-xl text-[14px] text-gray-300 bg-white/5 border border-white/10">{link.name}</span>
              ))}
              
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skills
