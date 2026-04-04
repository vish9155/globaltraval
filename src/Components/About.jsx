import React from 'react'
import { NavLink } from 'react-router-dom'
import Testimonials from './Testimonials'
import Faq from './Faq'
import OurServices from './OurServices'
import WhyChosseus from './WhyChosseus'
import ExperienceWithExpert from './ExperienceWithExpert'
import MissionVision from './OurMission'

export default function About() {
  return (
   <>
    <section className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">

               
            <img src="/images/banner/About us banner.jpg.jpeg" className='absolute inset-0 h-full w-full object-cover' alt="" />



                <div className="relative z-10  h-full px-4 text-center">
                   <div className='flex items-center justify-center h-80 '> 
                     <h1 className="text-white font-bold text-xl sm:text-2xl md:text-4xl lg:text-5xl max-w-4xl leading-snug">
                        Premium Business Class Flights at Exclusive Fares
                    </h1>
                   </div>
                   
                </div>
    
            </section>
            <section className='max-w-7xl mx-auto px-3 py-14'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                    <div className='order-1 md:order-1'>
                        <h2 className='text-lg sm:text-xl font-semibold text-center'>Explore the World with Global Trave</h2>
                        <div className='p-3'>
                            <p className='text-sm sm:text-base text-justify p-2'>Global Travel is a modern and trusted platform designed to make your travel experience smooth and enjoyable. We provide easy booking for flights, hotels, cruises, and packages, ensuring every journey is comfortable, affordable, and filled with unforgettable memories.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>Our mission is to simplify travel for everyone by offering reliable services, secure bookings, and the best deals worldwide. We believe travel should be stress-free, allowing you to explore new destinations with confidence, excitement, and complete peace of mind.</p>
                            <p className='text-sm sm:text-base text-justify p-2'>At Global Travel, we focus on delivering personalized experiences for every traveler. Whether it’s a luxury vacation or an adventurous trip, our dedicated support and wide range of options help turn your travel dreams into reality.</p>
                        </div>
                       <div className='mx-auto py-5'>
                         <NavLink className={'p-4  px-8 text-white bg-yellow-600 rounded-full '}>Search flights</NavLink>
                       </div>
                    </div>
                    <div className='order-2 md:order-2 relative group overflow-hidden rounded-xl bg-white/5 border-white/5 backdrop-blur-md'>
             <img src="/images/About us Intro.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                    </div>
                </div>
            </section>
            
            <ExperienceWithExpert />
               <MissionVision />
             <WhyChosseus />
            <Faq />
            <Testimonials />
        
            <OurServices />
   </>
  )
}
