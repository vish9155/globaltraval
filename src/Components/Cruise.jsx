import { CalendarDays, Home, MapPin, Ship } from 'lucide-react'
import React from 'react'
import PopularCruiseLine from './PopularCruiseLine'
import Testimonials from './Testimonials'
import CruiseDestination from './CruiseDestination'

export default function Cruise() {
  return (
    <>
      <section className='w-full relative h-[70vh] md:h-[85vh]'>


        <img
          src="https://images.unsplash.com/photo-1675684319073-dd1a1c3587b8?auto=format&fit=crop&fm=jpg&q=60&w=3000"
          className='w-full h-[600px]  object-cover'
          alt=""
        />


        <div className='absolute bottom-6 sm:bottom-10 md:bottom-16 w-full px-3 sm:px-4'>

          <div className='max-w-7xl mx-auto p-4 sm:p-6 md:p-8 opacity-90 bg-white rounded-xl sm:rounded-2xl shadow-2xl shadow-amber-100'>


            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4'>

              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder='Departure Port'
                    name='from'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <MapPin size={18} />
                  <input
                    type="text"
                    placeholder='Destination Port'
                    name='to'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>

              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <CalendarDays size={18} />
                  <input
                    type="month"
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <Home size={18} />
                  <select
                    name='date'
                    className='outline-0 w-full text-sm sm:text-base'
                  >
                    <option value="select length">Select Length</option>
                    <option value="3-5 Nights">3-5 Nights</option>
                    <option value="6-9 Nights">6-9 Nights</option>
                    <option value="10-14 Nights">10-14 Nights</option>
                    <option value="15+ Nights">15+ Nights</option>
                  </select>
                </div>
              </div>


              <div className='group'>
                <div className='flex border p-2.5 sm:p-3 rounded-lg gap-3 sm:gap-4 items-center'>
                  <Ship size={18} />
                  <input
                    type="text"
                    placeholder='All Cruise Line'
                    name='cruise'
                    className='outline-0 w-full text-sm sm:text-base'
                  />
                </div>
              </div>

            </div>


            <div className='mx-auto text-center pt-4 sm:pt-5'>
              <button className='w-full sm:w-auto p-2.5 sm:p-3 px-6 sm:px-8 rounded-lg bg-amber-500 hover:bg-amber-600 transition cursor-pointer text-sm sm:text-base'>
                Search
              </button>
            </div>

          </div>
        </div>

      </section>
      <PopularCruiseLine />
      <Testimonials />
      <CruiseDestination />
    </>
  )
}