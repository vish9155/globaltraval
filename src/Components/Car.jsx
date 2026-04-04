import { CalendarDays, MapPin } from 'lucide-react'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

export default function Car() {

  const [pickupDate, setpickupDate] = useState(new Date())
  const [dropDate, setdropDate] = useState(new Date())

  return (
    <section className='relative w-full h-[70vh] md:h-[85vh]'>

   
      <img 
        src="https://dmlib.airindia.com/adobe/assets/urn%3Aaaid%3Aaem%3Aee95dbb0-8f2a-496d-90b1-b6caafc9a86c/as/banner-hero-web.webp"
        className='h-[500px] md:h-[600px] w-full object-cover brightness-75'
        alt=""
      />

    
      <div className='absolute inset-0 bg-black/20'></div>

    
      <div className='absolute bottom-10 w-full px-4 flex justify-center'>

        <div className='w-full max-w-7xl bg-white rounded-2xl shadow-2xl p-4 md:p-6'>

      
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 items-center'>

            
            <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
              <MapPin size={18} className='text-gray-500' />
              <input 
                type="text" 
                placeholder='Pick-up location' 
                className='w-full outline-none text-sm'
              />
            </div>

        
            <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
              <MapPin size={18} className='text-gray-500' />
              <input 
                type="text" 
                placeholder='Drop-off location' 
                className='w-full outline-none text-sm'
              />
            </div>

            <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
              <CalendarDays size={18} className='text-gray-500' />
              <DatePicker 
                selected={pickupDate} 
                onChange={(date)=>setpickupDate(date)} 
                className='w-full outline-none text-sm'
              />
            </div>

            <div className='border rounded-lg px-3 py-2'>
              <input 
                type="time" 
                className='w-full outline-none text-sm'
              />
            </div>

     
            <div className='flex items-center gap-2 border rounded-lg px-3 py-2'>
              <CalendarDays size={18} className='text-gray-500' />
              <DatePicker 
                selected={dropDate} 
                minDate={pickupDate}
                onChange={(date)=>setdropDate(date)} 
                className='w-full outline-none text-sm'
              />
            </div>

      
            <div className='border rounded-lg px-3 py-2'>
              <input 
                type="time" 
                className='w-full outline-none text-sm'
              />
            </div>

            {/* Button */}
            <div>
              <button className='w-full bg-yellow-400 hover:bg-yellow-500 transition rounded-lg py-3 font-semibold text-sm'>
                Search
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}