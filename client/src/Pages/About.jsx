import Hero from '@/Components/About/Hero'
import Footer from '@/Components/Home/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const About = () => {
  return (
    <div className='w-full h-full pt-[130px] overflow-y-scroll'>
      <Hero/>
      <section className='w-full h-[150px] flex flex-col items-center justify-center'>
        <p className=' uppercase text-4xl font-montserrat font-semibold'>PawPal makes every tail wag and every journey count</p>
      </section>
      <section className='w-full h-[500px] flex justify-center items-center gap-[30px]'>
        <div className="w-[30%] h-[80%]">
        <blockquote className="text-sm md:text-base leading-relaxed italic space-y-4 font-semibold">
          <p>
           "At PawPal, we believe that every pet—no matter their size, story, or starting point—deserves a life filled with love, safety, and a forever home they can truly call their own.
          </p>
          <p>
            From helping hopeful adopters find their perfect furry companions to ensuring that pets travel safely across cities, states, or even countries, we’re more than just a platform—we're a movement of care, connection, and compassion.
          </p>
          <p>
            Every journey matters. Every tail wag counts. And at every step of the way, we’re there—bringing families together, one paw at a time."
          </p>
        </blockquote>
        </div>
        <div className="w-[30%] h-[80%] bg-red-800"></div>
      </section>
      <section className='w-full h-[100px] mt-[50px] flex flex-col items-center justify-center'>
        <p className=' uppercase text-4xl font-montserrat font-semibold mr-[10%]'>What we do!</p>
      </section>
      <section className='w-full h-[360px] flex justify-end pr-[5%] items-center gap-[30px]'>
        <div className="w-[30%] h-[80%] hover:border-[1px] border-blue-400 rounded-sm flex flex-col items-start gap-[20px] p-[10px]">
          <FontAwesomeIcon icon="fa-solid fa-paw" className='text-5xl' />
          <p className='text-2xl font-semibold font-montserrat'>Pet Adoption</p>
          <p>We help you find your new best friend from a network of verified shelters and individuals. Filter by breed, size, and location—and meet your new companion today.</p>
        </div>
        <div className="w-[30%] h-[80%] hover:border-[1px] border-blue-400 rounded-sm flex flex-col items-start gap-[20px] p-[10px]">
          <FontAwesomeIcon icon="fa-solid fa-train-tram" className='text-5xl' />          <p className='text-2xl font-semibold font-montserrat'>Pet Transport</p>
          <p>Whether you're relocating or adopting from afar, PawPal connects you with trusted transport agencies to move pets safely, humanely, and affordably.</p>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default About
