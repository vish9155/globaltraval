import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { Quote } from 'lucide-react';
import { clientReviews } from '../data/testimonials';

export default function Testimonials() {
  let [tabs,setTabs]=useState([{title:"Flights",val:"flights"},{title:"Hotels",val:"hotels"},{title:"Cruise",val:"cruise"},{title:"Packages",val:"packages"},{title:"Cars",val:"cars"}])
  let [selected,setSelected]=useState("flights") 
 
  let filterdData=clientReviews[selected] || []

  console.log(filterdData)

  return (
   <>
   <section className='bg-gradient-to-r from-blue-50 via-sky-100 to-blue-50 backdrop-blur-md py-5'>
    <div className='text-center m-auto'>
            {
              tabs.map((item, id) => (
                <button key={id} onClick={() => setSelected(item.val)} className={`cursor-pointer  text-center p-1 sm:p-2 md:p-3 text-white rounded gap-10 ms-5 mt-3 ${item.val === selected ?"bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-lg scale-105"
                  : "bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#020617] text-white hover:bg-white/20"}`}>
                  {item.title}
                </button>
              ))
            }
          </div>
    <div className='max-w-8xl mx-auto px-3 py-14'>
       <div>
        <h2 className='text-3xl font-bold text-center text-yellow-800 '>Why Customers Love Global Traval "{selected}"</h2>
        <div className='max-w-xl mx-auto grid grid-cols-4 gap-2 text-center py-6'>
           <div className='border-r-1'> 
              <h2 className='text-center text-2xl text-yellow-800'>140+</h2>
              <h4 className='text-xs'>Years of lagacy</h4>
           </div>
           <div className='border-r-1'>
            <h2 className='text-center text-2xl text-yellow-800'> 4,000+</h2>
              <h4 className='text-xs'>Tours</h4>
           </div>
           <div className='border-r-1'>
            <h2 className='text-center text-2xl text-yellow-800'>1M+</h2>
              <h4 className='text-xs'>Happy Travelers</h4>
           </div>
           <div >
            <h2 className='text-center text-2xl text-yellow-800'> 50+
</h2>
              <h4 className='text-xs'>Awards</h4>
           </div>
        </div>
       </div>
    </div>
    <div className='max-w-7xl sm:w-full md:w-full'>
    <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
         autoplay={{ delay: 5500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 12 },
                                640: { slidesPerView: 2, spaceBetween: 16 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                              
                            }}
        modules={[Autoplay,Pagination]}
        className="mySwiper"
      >
         {
                                filterdData.map((item, id) => (
                                    <SwiperSlide key={id}  className="relative overflow-hidden group shadow-2xl shadow-amber-300 bg-white rounded-xl py-5 ">
                                      
                                       <div className='overflow-y-scroll  h-50'>
                                        <Quote size={24} className="text-yellow-500 scale-x-[-1] " />
                                         <p className=' px-4 py-4 text-sm'>
                                            {item.message}
                                        </p>
                                       </div>
                                       <div className='py-2 flex gap-2 items-center justify-center'>
                                          <img src={item.image} className='h-18 rounded-full' alt="" />
                                          <div className=''>
                                           <h2>{item.name}</h2>
                                           <p>{item.date}</p>
                                          </div>
                                       </div>

                                    

                                    </SwiperSlide>
                                ))
                            }
      </Swiper>
 
    </div>
   </section>
   </>
  )
}




      