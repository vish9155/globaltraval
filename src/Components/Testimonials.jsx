import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { Quote } from 'lucide-react';

export default function Testimonials() {
 let testimonials = [
  {
    name: "Ram Sankar",
    date: "November, 2025",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Our trip with Global Travel was absolutely amazing and perfectly organized from start to finish. The itinerary was well-planned, accommodations were comfortable, and every detail was taken care of. The team provided excellent support throughout the journey, making our experience smooth, stress-free, and truly unforgettable. Highly recommended for every traveler."
  },
  {
    name: "Swadhinta Raj",
    date: "February, 2026",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "I had a wonderful experience booking my vacation through Global Travel. From flight bookings to hotel arrangements, everything was handled professionally. The customer support team was always available and helpful. This trip became one of my most memorable journeys, and I look forward to planning more adventures with them in the future."
  },
  {
    name: "Shreya Ghoshrawat",
    date: "January, 2026",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "Global Travel made our family holiday incredibly special with their flawless planning and execution. Every destination was thoughtfully selected, and the entire journey felt comfortable and enjoyable. Their attention to detail and customer care truly stood out, making our trip stress-free and filled with beautiful memories we will cherish forever."
  },
  {
    name: "Rohit Sharma",
    date: "March, 2026",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    message: "Booking with Global Travel was the best decision we made for our vacation. The services were reliable, the prices were reasonable, and the overall experience exceeded our expectations. From start to end, everything was smooth, and we never faced any issues during the trip, which made it truly enjoyable."
  },
  {
    name: "Anjali Verma",
    date: "December, 2025",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    message: "Thanks to Global Travel, our trip was perfectly organized and full of wonderful experiences. The team ensured everything was seamless, from bookings to local support. We truly enjoyed every moment and would definitely choose them again for future travel plans because of their excellent service."
  }
];
  return (
   <>
   <section className='bg-gradient-to-r from-blue-50 via-sky-100 to-blue-50 backdrop-blur-md py-5'>
    <div className='max-w-8xl mx-auto px-3 py-14'>
       <div>
        <h2 className='text-3xl font-bold text-center text-yellow-800 '>Why Customers Love Global Traval</h2>
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
                                testimonials.map((item, id) => (
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




      