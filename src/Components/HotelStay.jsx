import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';



// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// import required modules

import { NavLink } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
export default function HotelStay() {
    let trendingDestination = [
        {
            img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",

        },
        {
            img: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80",

        },
        {
            img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
            title: "vishal"
        },
        {
            img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=800&q=80"
        }
    ];
    return (
        <>
            <section className=' bg-yellow-300/30 backdrop-blur-md'>
                <div className='max-w-6xl mx-auto px-3 py-10 '>
                    <h2 className='p-3 text-lg sm:text-xl md:text-2xl'>Explore Hotels Stay</h2>
                    <div className='p-3'>

                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            navigation={true}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            breakpoints={{
                                0: { slidesPerView: 1, spaceBetween: 12 },
                                640: { slidesPerView: 2, spaceBetween: 16 },
                                768: { slidesPerView: 3, spaceBetween: 20 },
                                1080: { slidesPerView: 4, spaceBetween: 24 },
                            }}
                            modules={[Navigation, Pagination, Autoplay]}
                            className="mySwiper"
                        >
                            {
                                trendingDestination.map((item, id) => (
                                    <SwiperSlide key={id} className="relative overflow-hidden group rounded border">

                                        {/* Image */}
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="h-[240px] w-[353px] object-cover transition duration-500 group-hover:scale-110"
                                        />
                                        <h2 className='absolute bottom-2 left-2 text-base text-white font-semibold'>{item.title}</h2>
                                        <NavLink
                                            to="/"
                                            className="absolute bottom-2 right-0 px-3 py-2  bg-yellow-500 text-black  rounded-full flex items-center gap-1 transform  text-xs"
                                        >

                                            <ArrowRight size={20} />
                                        </NavLink>
                                        {/* Overlay (hidden by default) */}
                                        <div className="absolute    bottom-2 right-0  opacity-0 group-hover:opacity-100 transition duration-300  ">

                                            <NavLink
                                                to="/"
                                                className=" px-3 py-2 bg-yellow-500 text-black  rounded-full flex items-center gap-1 transform translate-x-0 group-hover:translate-x-0 transition duration-300 text-xs"
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
                </div>
            </section>
        </>
    )
}
