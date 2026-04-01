import { icons } from 'lucide-react';
import React from 'react'

export default function OurServices() {
    let services = [
  {
    title: "Flight Booking",
    description: "Book domestic and international flights with ease using our seamless platform. We provide the best deals, flexible options, and instant confirmations, ensuring a smooth and stress-free booking experience for every traveler.",
    icon: "Plane"
  },
  {
    title: "Hotel Reservation",
    description: "Discover and reserve top-rated hotels across the globe. From budget-friendly stays to luxury accommodations, we ensure comfort, convenience, and the best pricing for a relaxing travel experience.",
    icon: "Hotel"
  },
  {
    title: "Holiday Packages",
    description: "Choose from a wide range of customized holiday packages designed for families, couples, and solo travelers. Enjoy complete travel solutions including stays, transport, and guided experiences.",
    icon: "Package"
  },
  {
    title: "Cruise Booking",
    description: "Experience the joy of luxury cruising with world-class facilities, fine dining, and breathtaking ocean views. Our cruise packages are designed to provide unforgettable journeys across stunning destinations.",
    icon: "Ship"
  },
  {
    title: "Tour Guide",
    description: "Enhance your journey with experienced local tour guides who provide deep insights into culture, history, and attractions, helping you explore destinations in a more meaningful and engaging way.",
    icon: "Map"
  },
  {
    title: "Visa Assistance",
    description: "Simplify your international travel with our reliable visa assistance services. We guide you through documentation, application processes, and approvals to ensure a hassle-free experience.",
    icon: "FileText"
  },
  {
    title: "Travel Insurance",
    description: "Protect your travel plans with comprehensive insurance coverage. From medical emergencies to trip cancellations, our plans ensure safety and peace of mind throughout your journey.",
    icon: "ShieldCheck"
  },
  {
    title: "Car Rentals",
    description: "Enjoy convenient and affordable car rental services at your destination. Choose from a variety of vehicles to explore cities comfortably and at your own pace.",
    icon: "Car"
  },
  {
    title: "Adventure Trips",
    description: "Get ready for thrilling adventures including trekking, safaris, scuba diving, and more. Our adventure packages are designed for those who seek excitement and unforgettable experiences.",
    icon: "Mountain"
  },
  {
    title: "Luxury Travel",
    description: "Indulge in premium travel experiences with luxury accommodations, exclusive services, and personalized itineraries crafted to deliver comfort, elegance, and unforgettable moments.",
    icon: "Crown"
  },
  {
    title: "Group Tours",
    description: "Travel with groups and enjoy well-organized tours that bring people together. Perfect for friends, families, or corporate trips with guided experiences and shared memories.",
    icon: "Users"
  },
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available round the clock to assist you with bookings, queries, and emergencies, ensuring a smooth and worry-free travel experience anytime, anywhere.",
    icon: "Headphones"
  }
];
  return (
   <>
   <section className='max-w-7xl mx-auto px-3 py-3'>
    <h2 className='text-center text-2xl font-semibold py-7'>Our Services</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 '>
             {
               services.map((item,id)=>{
                let Icon=icons[item.icon]
                return(
                    <div className=' rounded-xl shadow-2xl z-3 shadow-amber-300 hover:translate-2 transition-all  duration-300 ease-in-out cursor-pointer'>
                        <div className='text-center flex items-center justify-center py-5'><Icon className={'text-yellow-300 text-center'} size={33} /></div>
                        <h2 className='text-center text-xl'>{item.title}</h2>
                        <div className='p-2 sm:p-3 md:p-4'>
                            <p className='text-justify text-sm text-gray-600'>{item.description}</p>
                        </div>

                    </div>
                )
               })
             }
        </div>
   </section>
   </>
  )
}
