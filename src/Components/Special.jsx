import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination'
import { Autoplay, Pagination } from "swiper/modules";

export default function PremiumSpecials() {
  return (
    <section className="relative max-w-7xl mx-auto px-4 py-14">
      
      <h2 className="text-2xl font-semibold py-6">
        Global Traval  Specials
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">

        {/* LEFT SMALL CARD */}
        <div className="relative rounded-2xl overflow-hidden group border">
          <img src=""
            // src="https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800"
            className="w-[403px] h-[300px]  group-hover:scale-110 transition duration-500"
          />
          <div className="absolute inset-0 "></div>

          <div className="absolute inset-0 p-4 flex flex-col justify-between text-white  bg-white/10">
            <div>
              <h3 className="font-semibold text-lg">
                Your Spiritual Journey Starts Here
              </h3>
              <p className="text-sm opacity-90">
                Explore divine destinations in India
              </p>
            </div>

            <button className="bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm hover:bg-yellow-400 hover:text-black transition">
              View More →
            </button>
          </div>
        </div>

        {/* BIG SWIPER CARD */}
        <div className="relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
          <Swiper
            autoplay={{ delay: 3000 }}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            className="mySwiper1 h-full"
          >
            {[
              "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200",
              "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=1200",
            ].map((img, i) => (
              <SwiperSlide key={i}>
                <div className="relative h-full group border">
                  <img
                    src={img}
                    className="w-[828px] h-[300px] border-red-600 object-cover group-hover:scale-105 transition duration-500"
                  />

                  Gradient Overlay
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>

                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center text-white">
                    <h3 className="text-xl md:text-2xl font-bold">
                      Your Singapore Adventure Awaits
                    </h3>
                    <p className="text-sm mt-2">
                      From Marina Bay to Universal Studios
                    </p>

                    <button className="mt-4 w-fit bg-white text-black px-4 py-2 rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
                      View More →
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* BOTTOM BIG CARD */}
        <div className="relative col-span-1 md:col-span-2 rounded-2xl overflow-hidden border group">
          <img
            src= "https://images.unsplash.com/photo-1508964942454-1a56651d54ac?w=1200"            className="w-[828px] h-[300px]  object-cover group-hover:scale-110 transition duration-500"
          />

          <div className="absolute inset-0 "></div>

          <div className="absolute inset-0 p-4 flex flex-col justify-between text-white  bg-white/10">
            <div>
              <h3 className="text-lg font-semibold">
               Tour Packages
              </h3>
              
            </div>

            <button className="bg-white/20 px-4 py-1 rounded-full hover:bg-yellow-400 hover:text-black transition">
              View More →
            </button>
          </div>
        </div>

        {/* SMALL CARDS */}
        {[
          {
            title: "Build Your Own Itinerary",
            img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800",
          },
          {
            title: "Looking for Hotels?",
            img: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=800",
          },
          {
            title: "Looking for Flights?",
            img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
          },
          {
            title: "Looking for Cars?",
            img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
          },
          
        ].map((item, i) => (
          <div key={i} className="relative rounded-2xl overflow-hidden group">
            <img
              src={item.img}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />

            <div className="absolute inset-0 "></div>

            <div className="absolute inset-0 p-4 flex items-end text-white  bg-white/10">
              <h3 className="text-sm font-semibold">
                {item.title}
              </h3>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}