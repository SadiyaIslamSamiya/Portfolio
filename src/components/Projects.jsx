import React from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'
import CommonPara from '../common/CommonPara'
import medicine from '../assets/Farm_med.png'
import skill_shoot from '../assets/Skill_shoot.png'
import furniture from '../assets/furmiture.png'
import kids_school from '../assets/kids_school.png'
import kaffeine from '../assets/Kaffeine.png'
import { FiExternalLink, FiGithub} from 'react-icons/fi'

const Projects = () => {

  const projects = [
    {
      index:1,
      link:"https://farm-medicine.netlify.app/",
      img: medicine,
      git:"https://github.com/SadiyaIslamSamiya/FarmMed",
      title: "Medicine Inventory System",
      description: "A comprehensive inventory management system featuring a dashboard, secure routing, and a modern UI for tracking medical supplies.",
      tags: ["React", "Tailwind", "UI/UX"]
    },
    {
      index:2,
      link:"https://skill-shoot-s.netlify.app/",
      img: skill_shoot,
      git:"https://github.com/SadiyaIslamSamiya/Skill-Shoot",
      title: "Skill Shoot",
      description: "A fully responsive educational landing page built with modern web standards and high-performance styling.",
      tags: ["HTML5", "Tailwind CSS"]
    },
    {
      index:3,
      link:"https://dev-sam0303.pantheonsite.io/home-2/",
      img: furniture,
      title: "Furniture E-Commerce",
      description: "Dynamic WordPress website built using Elementor, featuring custom layouts and seamless user navigation.",
      tags: ["WordPress", "Elementor"]
    },
    {
      index:4,
      link:"https://sadiyaislamsamiya.github.io/kids-school/",
      img: kids_school,
      git:"https://github.com/SadiyaIslamSamiya/kids-school",
      title: "Kids School",
      description: "Colorful, playful, and user-friendly design specifically crafted for educational institutions for children.",
      tags: ["HTML", "CSS"]
    },
    {
      index:5,
      link:"https://www.figma.com/design/EAssJ3lXZoelRrjhMva7BD/Kaffeine?node-id=0-1&t=1L1nJYRw7pvUG1wD-1",
      img: kaffeine,
      title: "Kaffeine UI",
      description: "Premium coffee shop hero design focusing on bold typography, spacing, and luxurious layouts.",
      tags: ["Figma", "UI Design"]
    }
  ];

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

        {/* ---------------Projects--------------- */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {projects.map((project)=>(
            <div
            key={project.index}
            onClick={() => window.open(project.link)}
            className="group block ">
              <div className="rounded-2xl border border-white/10 hover:scale-101 transition-transform duration-300 overflow-hidden bg-white/10 md:h-135">

                <div className="overflow-hidden relative mb-1 bg-accent/10">

                  <div className=" relative">
                    <div className=" absolute top-0 w-0 group-hover:w-full h-full z-10 bg-linear-to-b from-black/50 to-transparent"></div>
                    <img src={project.img} alt={project.title} className="object-cover object-center aspect-video w-full" />
                  </div>
                  
                  {/* icons */}
                  <div className="absolute top-2 right-2 flex items-center gap-1.5 translate-y-5 scale-0 group-hover:translate-y-0 group-hover:scale-100 transition-all duration-600 z-10">
                    {project.git &&(
                      <div className="p-2 md:p-3 bg-primary/10 border border-primary/15 rounded-full flex items-center justify-center text-xl md:text-2xl text-primary">
                        <a href={project.git} target='_blank'><FiGithub /></a>
                      </div>
                    ) }
                    
                    <div className="p-2 md:p-3 bg-primary/10 border border-primary/15 rounded-full flex items-center justify-center text-xl md:text-2xl text-primary transition-all duration-300">
                      <a href={project.link} target='_blank'><FiExternalLink /> </a>
                      
                    </div>
                  </div>
                  
                </div>
                
                <div className="p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx)=>(
                      <span key={idx} className='py-1 px-3 text-secondary bg-secondary/20 rounded-lg'>{tag}</span>
                    ))}
                  </div>
                  <h3 className="text-2xl text-white font-Poppons font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className=" text-gray-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div className="font-Inter h-1 w-0 bg-primary group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects
