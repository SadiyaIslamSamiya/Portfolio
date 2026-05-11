import React, { useRef } from 'react'
import CommonSubhead from '../common/CommonSubhead'
import CommonHead from '../common/CommonHead'
import { FiGithub, FiMail } from 'react-icons/fi'
import CommonPara from '../common/CommonPara'
import { LuSend } from 'react-icons/lu'
import { SlSocialLinkedin } from 'react-icons/sl'
import Emailjs from '@emailjs/browser'
import Swal from 'sweetalert2'

const Contact = () => {
//  emailjs

  const form = useRef();

  const sendEmail = (e)=> {
    e.preventDefault();

    Emailjs.sendForm('service_wxfs8yk', 'template_0vds70m', form.current, 'NE5pb-xc1QxMdBi4-')
      .then(
      () => {
        Swal.fire({
          icon: "success",
          title: "Thanks for reaching out! I'll get back to you soon.",
          width: 400,
          padding: "4px",
          color: "#2a9b0d",
          showConfirmButton: false,
          timer: 3000
        });
        e.target.reset();
      },
      (error) => {
        console.log('Failed to send message', error);
        Swal.fire({
          icon: "error",
          title: "Failed to send message",
          width: 300,
          padding: "4px",
          color: "#920f0f",
          showConfirmButton: false,
          timer: 3000
        });
      },
    );
  }


  return (
    <>
      <section id='contact' className='container px-2 md:px-0 pt-20 md:pt-24'>
        {/* -------------------top------------------- */}
        <div className="flex flex-col items-center">
          <div className=" flex items-center gap-2 text-center">
            <div className='w-9 h-0.5 rounded-full bg-linear-to-r from-primary via-accent to-secondary'></div>
            <CommonSubhead main={"Contact"}/>
            <div className='w-9 h-0.5 rounded-full bg-linear-to-l from-primary via-accent to-secondary'></div>
          </div>
          <div className="text-center">
            <CommonHead sub={"Let's Build Something "} main={"Amazing"} />
          </div>
          
        </div>
        {/* -------------------bottom------------------- */}
        <div className=" grid lg:grid-cols-2 gap-16 items-center mt-10">
          {/* -------------------left side------------------- */}
          <div className=" flex flex-col gap-6">

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=s.islam01122@gmail.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl group">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-full flex items-center justify-center text-2xl text-accent transition-all duration-300">
              <FiMail />
              </div>
              <div>
              <h4 className="text-xs md:text-sm font-Poppons font-bold text-gray-400 uppercase tracking-widest mb-1">Email Me</h4>
              <p className="text-white text-sm md:text-lg font-Inter font-medium group-hover:text-primary transition-all duration-300">s.islam01122@gmail.com</p>
              </div>
            </a>

            <a href="https://github.com/SadiyaIslamSamiya " target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl group">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-full flex items-center justify-center text-2xl text-accent transition-all duration-300">
              <FiGithub />
              </div>
              <div>
              <h4 className="text-xs md:text-sm font-Poppons font-bold text-gray-400 uppercase tracking-widest mb-1">github</h4>
              <p className="text-white text-sm md:text-lg font-Inter font-medium group-hover:text-primary transition-all duration-300">github.com/SadiyaIslamSamiya </p>
              </div>
            </a>

            <a href="https://www.linkedin.com/in/sadiya-samiya" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl group">
              <div className="w-14 h-14 bg-white/10 border border-white/15 rounded-full flex items-center justify-center text-2xl text-accent transition-all duration-300">
              <SlSocialLinkedin />
              </div>
              <div>
              <h4 className="text-xs md:text-sm font-Poppons font-bold text-gray-400 uppercase tracking-widest mb-1">LinkedIn</h4>
              <p className="text-white text-sm md:text-lg font-Inter font-medium group-hover:text-primary transition-all duration-300">linkedin.com/sadiya-samiya</p>
              </div>
            </a>
            <p className='p-4 md:p-6 text-white/50 text-sm md:text-lg font-Inter font-medium bg-white/5 border border-white/10 rounded-2xl'>"I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision."</p>
          </div>

          {/* ------------right side------------ */}
          <div className=" p-4 md:p-6 bg-white/5 border border-white/10 rounded-2xl">
          {/* form start */}
            <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className=" ">
                  <label className=" text-xs font-bold uppercase tracking-widest text-gray-400 ml-1 ">Full Name</label>
                  <input 
                    type="text" 
                    name='from_name'
                    required
                    placeholder="Your Name" 
                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
                <div className="">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name='from_email'
                    required
                    placeholder="Your Email" 
                    className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                  />
                </div>
              </div>
              <div className="">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <input 
                  type="text"
                  name='subject' 
                  required
                  placeholder="How can I help you?" 
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition-colors text-white"
                />
              </div>
              <div className="">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea 
                  rows="4"
                  required
                  name="message"
                  id="message" 
                  placeholder="Tell me about your project..." 
                  className="w-full mt-1 bg-white/5 border border-white/10 rounded-xl px-5 py-4 focus:outline-none focus:border-primary transition duration-300 text-white "
                ></textarea>
              </div>
              <button className="w-full py-4 bg-accent hover:bg-primary/80 hover:text-white rounded-xl font-bold duration-300 active:scale-1.1 flex items-center justify-center gap-2" type='submit'>
                Send Message <LuSend className='text-xl rotate-10'/>
              </button>
            </form>
          </div>
        </div>

      </section>
    </>
  )
}

export default Contact
