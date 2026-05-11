import React, { useEffect, useState } from 'react'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'

const Navber = () => {
    const [Menu, setMenu] = useState(false);

    const [ Scroll, setScroll] = useState(false);

    useEffect(()=>{

        const hendeler = () =>{
            setScroll( window.scrollY > 40);
        }
        window.addEventListener( 'scroll', hendeler)

        return ()=>{
            window.removeEventListener( 'scroll', hendeler)
        }
    }, []);
    const navlink = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ]
    return (
    <>
      <nav className={` fixed top-0 left-0 w-full transition-all duration-500 z-50 px-2 md:px-0 ${ Scroll ? ' bg-background md:bg-white/5 md:backdrop-blur-xl py-4': 'bg-transparent py-6'}`}>
        <div className=" container flex items-center justify-between">
            <a href="#">
                <h2 className=' font-Poppons font-bold text-2xl text-transparent bg-linear-to-r from-primary via-accent to-secondary bg-clip-text'>S.Samiya</h2>
            </a>
            {/* large screen */}
            <ul className='hidden md:flex gap-16'>
                { navlink.map((link)=> (

                    <li key={link.name}>
                        <a href={link.href} className='nav-hover text-base font-Inter font-medium text-white'>
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>
            {/* mobile screen */}
            <div className="md:hidden">
                <button onClick={ ()=>setMenu(!Menu)} className=''>
                    { Menu ? 
                        (<RxCross2 className='text-secondary text-2xl'/>):
                        (<RxHamburgerMenu className='text-white text-2xl'/> )
                        
                    }
                    
                </button>
                { Menu && (
                    <div className=" absolute pb-4 top-15 -left-1 w-full text-center bg-white/5 backdrop-blur-xl z-30">
                        <ul className=''>
                            { navlink.map((link)=> (
                                <li key={link.name} className='pt-4'>
                                    <a href={link.href} onClick={()=>setMenu(false)} className=' text-base font-Inter font-medium text-white'>
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                
            </div>
            
        </div>

      </nav>
    </>
  )
}

export default Navber
