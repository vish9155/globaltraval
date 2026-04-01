import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'


// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function TrendingDestination() {
  let trendingDestination = [
  {
    img: "/images/Australia.jpg.jpeg"
  },
  {
    img: "/images/Mexico.jpg.jpeg"
  },
  {
    img: "/images/Japan.jpg.jpeg"
  },
  {
    img: "/images/Germany.jpg.jpeg"
  },
  {
    img: "/images/France.jpg.jpeg"
  },
  {
    img: "/images/Brazil.jpg.jpeg"
  },
  {
    img: "/images/Canada.jpg.jpeg"
  },
  {
    img: "/images/United Kingdom.jpg.jpeg"
  },
  {
    img: "/images/United Arab Emirates.jpg.jpeg"
  }
];
    return (
        <>
            <section className='max-w-6xl mx-auto px-3 py-10'>
                <h2 className='p-3 text-lg sm:text-xl md:text-2xl'>Trending Destination</h2>
                <div className='p-3'>

                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        pagination={{
                            clickable: true,
                        }}

                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        breakpoints={{
                            0: { slidesPerView: 1, spaceBetween: 12 },
                            640: { slidesPerView: 2, spaceBetween: 16 },
                            768: { slidesPerView: 3, spaceBetween: 20 },

                        }}
                        modules={[Pagination, Autoplay]}
                        className="mySwiper"
                    >
                        {
                            trendingDestination.map((item, id) => (
                                <SwiperSlide className="relative overflow-hidden group rounded-t-full rounded-b-full border border-white/5 bg-white/5 backdrop-blur-md">

                                    {/* Image */}  
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full rounded-t-full rounded-b-full object-cover transition duration-500 group-hover:scale-110"
                                    />

                                    {/* Overlay (hidden by default) */}
                                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">

                                        <NavLink
                                            to="/"
                                            className="px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full flex items-center gap-2 transform translate-y-10 group-hover:translate-y-0 transition duration-300"
                                        >
                                            Explore More
                                            <ArrowRight size={20} />
                                        </NavLink>

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
