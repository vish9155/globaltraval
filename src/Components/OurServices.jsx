import { icons } from 'lucide-react';
import React from 'react';

export default function OurServices() {

 let services = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights easily with best fares, flexible options, instant confirmations, and smooth booking experience designed for comfort, convenience, and stress-free travel planning.",
    icon: "Plane",
    color: "text-sky-500",
    bg: "bg-sky-500/10",
    border: "from-sky-500 to-blue-600"
  },
  {
    title: "Hotel Reservation",
    description: "Discover and book top-rated hotels worldwide with affordable pricing, premium comfort, flexible options, and seamless booking experience ensuring relaxing stays for every type of traveler.",
    icon: "Hotel",
    color: "text-rose-500",
    bg: "bg-rose-500/10",
    border: "from-rose-500 to-pink-600"
  },
  {
    title: "Holiday Packages",
    description: "Choose customized holiday packages designed for families, couples, and solo travelers including stays, transport, activities, and guided experiences for memorable and stress-free travel journeys.",
    icon: "Package",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
    border: "from-amber-500 to-orange-600"
  },
  {
    title: "Cruise Booking",
    description: "Enjoy luxury cruise experiences with world-class facilities, fine dining, entertainment, and breathtaking ocean views, offering unforgettable journeys across beautiful destinations with premium comfort and service.",
    icon: "Ship",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10",
    border: "from-cyan-500 to-blue-600"
  },
  {
    title: "Tour Guide",
    description: "Explore destinations with experienced local guides who provide cultural insights, historical knowledge, and personalized tours, making your journey more engaging, informative, and truly unforgettable.",
    icon: "Map",
    color: "text-green-500",
    bg: "bg-green-500/10",
    border: "from-green-500 to-emerald-600"
  },
  {
    title: "Visa Assistance",
    description: "Get reliable visa assistance with complete guidance on documentation, application process, and approvals, ensuring a hassle-free and smooth experience for your international travel requirements.",
    icon: "FileText",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10",
    border: "from-indigo-500 to-purple-600"
  },
  {
    title: "Travel Insurance",
    description: "Secure your trips with comprehensive travel insurance covering medical emergencies, cancellations, delays, and unexpected issues, ensuring complete safety, protection, and peace of mind throughout your journey.",
    icon: "ShieldCheck",
    color: "text-teal-500",
    bg: "bg-teal-500/10",
    border: "from-teal-500 to-green-600"
  },
  {
    title: "Car Rentals",
    description: "Rent affordable and reliable cars at your destination with flexible options, easy booking, and comfortable travel experience, allowing you to explore cities conveniently at your own pace.",
    icon: "Car",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "from-yellow-500 to-orange-500"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available 24/7 to assist with bookings, queries, and emergencies, ensuring a smooth, reliable, and worry-free travel experience anytime and anywhere.",
    icon: "Headphones",
    color: "text-red-500",
    bg: "bg-red-500/10",
    border: "from-red-500 to-pink-600"
  }
];

  return (
    <section className='max-w-7xl mx-auto px-4 py-16'>

      <h2 className='text-center text-3xl md:text-4xl font-bold mb-12'>
         Our Services
      </h2>

  
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>

        {services.map((item, id) => {
          let Icon = icons[item.icon];

          return (
            <div
              key={id}
              className="group relative p-[1px] rounded-2xl bg-gradient-to-br hover:scale-105 transition duration-300"
              style={{
                backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
              }}
            >

           
              <div className="bg-white rounded-2xl p-6 h-full text-center shadow-md hover:shadow-xl transition duration-300">

              
                <div className={`mx-auto flex items-center justify-center w-16 h-16 rounded-full ${item.bg} mb-4 group-hover:scale-110 transition`}>
                  <Icon className={`${item.color}`} size={26} />
                </div>

              
                <h3 className='text-lg font-semibold mb-2 text-gray-800'>
                  {item.title}
                </h3>

                <p className='text-sm text-gray-500 leading-relaxed'>
                  {item.description}
                </p>

              
                <div className={`mt-4 h-[3px] w-0 group-hover:w-full bg-gradient-to-r ${item.border} transition-all duration-500 rounded-full`}></div>

              </div>
            </div>
          );
        })}

      </div>

    </section>
  );
}