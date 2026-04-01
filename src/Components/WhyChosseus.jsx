import React from 'react'
import { NavLink } from 'react-router-dom'

export default function WhyChosseus() {
  return (
    <>
     <section className='max-w-7xl mx-auto px-3 py-14'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        <div className='order-1 md:order-1'>
                            <h2 className='text-lg sm:text-xl font-semibold text-center'>Why Choose Global Travel</h2>
                            <div className='p-3'>
                                <p className='text-sm sm:text-base text-justify p-2'>Global Travel is the perfect choice for travelers who want a seamless and premium experience from start to finish. With a strong global network and industry expertise, it offers access to top destinations, carefully selected hotels, and smooth flight bookings. Every trip is planned with attention to detail, ensuring comfort, convenience, and a hassle-free journey.</p>
                                <p className='text-sm sm:text-base text-justify p-2'>What truly sets Global Travel apart is its focus on personalization and luxury. Whether you’re traveling for business or leisure, the services are tailored to your needs—offering curated itineraries, premium accommodations, and exclusive deals. The intuitive booking system makes planning quick and easy, while maintaining a high-end feel throughout the process..</p>
                                <p className='text-sm sm:text-base text-justify p-2'>In addition, Global Travel provides reliable 24/7 customer support, so you’re always backed up no matter where you are. From last-minute changes to travel assistance, their team ensures peace of mind at every step. Combining affordability with quality, Global Travel delivers exceptional value, making it a trusted choice for modern travelers.</p>
                            </div>
                           <div className='mx-auto py-5'>
                             <NavLink className={'p-4  px-8 text-white bg-yellow-600 rounded-full '}>Search flights</NavLink>
                           </div>
                        </div>
                        <div className='order-2 md:order-2 relative group overflow-hidden border border-amber-300'>
                 <img src="/images/Why chose global travel.jpg.jpeg" className='h-full w-full group-hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer' alt="" />
                        </div>
                    </div>
                </section>
    </>
  )
}
