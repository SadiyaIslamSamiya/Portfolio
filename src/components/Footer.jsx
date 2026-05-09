import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navlink = [
        { name: 'Home', href: '#home' },
        { name: 'Projects', href: '#projects' },
        { name: 'Hire Me', href: '#contact' },
    ]

  return (
    <>
      <footer className="py-12 ">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <a href="#home" className="font-Poppons text-2xl font-bold text-transparent bg-linear-to-r from-primary via-accent to-secondary bg-clip-text">
                S.Samiya
              </a>
              <p className="font-Inter text-gray-400 text-sm mt-2 max-w-xs">
                Designing and developing premium digital experiences for the modern web.
              </p>
            </div>

            <div className="flex flex-col items-center md:items-end font-Inter">
              <div className="flex space-x-6 mb-4">
                { navlink.map((link)=>(
                  <a href={link.href} key={link.name} className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-primary">{link.name}</a>
                )) }
                
              </div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                &copy; {currentYear} Sadiya Islam Samiya. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
