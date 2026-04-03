import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { CalendarDays, Dot, MapPin, Minus, Plus, User, Users } from 'lucide-react'
import HotelStay from './HotelStay';
import Property from './Property';

export default function Hotels() {
    let [checkin, setCheckIn] = useState(new Date())
    let [checkout, setCheckout] = useState(new Date())
    let [open, setopen] = useState(false)
    let [guest, setGuest] = useState({
        adult: 1,
        children: 0,
        rooms: 1
    })

    let updateGuest = (type, value) => {
        setGuest(prev => ({
            ...prev, [type]: Math.max(0, prev[type] + value)
        }))
    }

    return (
        <>
            <section className='w-full h-screen relative ' >
                <img src="/images/LondonHouse Chicago 828x300.jpg.jpeg" className='h-[600px] w-[1920px] object-cover brightness-75' alt="" />
                <div className='absolute inset-0 bg-black/5'></div>
                <div className='bg-white/80 absolute bottom-20 w-full py-10 flex flex-col md:flex-row items-center justify-center  gap-6 '>
                    <div className='border rounded-lg flex items-center justify-center px-3'>
                        <MapPin size={24} />
                        <input type="text" name="city" id="city" placeholder='where are going ?' className='rounded-lg p-4 outline-none ' />
                    </div>
                    <div className='border rounded-lg flex items-center justify-center px-3'>
                        <CalendarDays size={24} />
                        <DatePicker selected={checkin} minDate={checkin} onChange={(date) => setCheckIn(date)} name="checkin" id="city" placeholder='where are going ?' className='rounded-lg p-4 outline-none ' />
                    </div>
                    <div className='border rounded-lg flex items-center justify-center px-3'>
                        <CalendarDays size={24} />
                        <DatePicker selected={checkout} minDate={checkout} onChange={(date) => setCheckout(date)} name="checkout" id="city" placeholder='where are going ?' className='rounded-lg p-4 outline-none ' />
                    </div>
                    <div className='relative border rounded-lg  cursor-pointer' >
                        <div onClick={()=>setopen(!open)} className='flex items-center justify-center p-4 gap-5'>
                            <Users size={20} />
                        <div className='flex items-center justify-center'>
                            <span>{guest.adult}-Adults</span>
                          <Dot size={20} />
                            <span>{guest.children}-Children</span>
                           <Dot size={20} />
                            <span>{guest.rooms}-Rooms</span>
                        </div>
                        </div>
                        {
                            open && (
                                <div className='absolute top-15 left-0 w-full bg-white z-50 '>
                            <div className='px-5 py-4 '>
                                <div className='flex items-center justify-between'>
                                    <h2>Adults</h2>
                                <div className='flex items-center justify-between gap-5'>
                                    <Minus size={20} onClick={()=>updateGuest('adult',-1)}/>
                                    <span>{guest.adult}</span>
                                    <Plus size={20}onClick={()=>updateGuest('adult',1)} />
                                </div>
                                </div>
                                <div className='flex items-center justify-between py-4 z-[99px]'>
                                    <h2>Children</h2>
                                <div className='flex items-center justify-between gap-5'>
                                    <Minus size={20} onClick={()=>updateGuest('children',-1)} />
                                    <span>{guest.children}</span>
                                    <Plus size={20} onClick={()=>updateGuest('children',1)}/>
                                </div>
                                </div>
                               <div className='flex items-center justify-between'>
                                 <h2>Rooms</h2>
                                <div className='flex items-center justify-between gap-5'>
                                    <Minus size={20} onClick={()=>updateGuest('rooms',-1)} />
                                    <span>{guest.rooms}</span>
                                    <Plus size={20} onClick={()=>updateGuest('rooms',1)}/>
                                </div>
                               </div>
                            </div>
                            <div className='items-center mx-auto p-5 flex justify-center cursor-pointer' onClick={()=>setopen(!open)}>
                                <button className='p-2 rounded-lg px-8 text-center bg-amber-600' >Done</button>
                            </div>

                        </div>
                            )
                        }
                    </div>

                    <button className='p-4 px-8 bg-amber-500 rounded-lg'>Search</button>

                </div>

            </section>
            <HotelStay />
           <section className='max-w-7xl mx-auto px-3 py-10'>
  <h2 className='text-xl font-semibold'>Trending Destination</h2>
   <p className='text-gray-600 pb-6'>Most popular choices for travelers from Usa</p>
  <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>

   
    <div className='relative overflow-hidden rounded-xl'>
      <img 
        src="/images/hotels/New York.jpg.jpeg"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
      <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>New York</h2>

      </div>
    </div>


    <div className='relative overflow-hidden rounded-xl '>
      <img 
        src="/images/hotels/Grand Canyon.jpg.jpeg"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
       <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>Grand Canyon</h2>

      </div>
    </div>

  </div>


  <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
 
    <div className='relative overflow-hidden rounded-xl '>
      <img 
        src="/images/hotels/miami.jpg.jpeg"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
        <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl '>Miami</h2>

      </div>
    </div>

    <div className='relative overflow-hidden rounded-xl '>
      <img 
        src="/images/hotels/Las Vgas.jpg.jpeg"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
       <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>Las Vages</h2>

      </div>
    </div>

   
    <div className='relative overflow-hidden rounded-xl  md:col-span-1'>
      <img 
        src="/images/hotels/jackson whole.jpg.jpeg"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
       <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>Jackson Whole</h2>

      </div>
    </div>
     {/* <div className='overflow-hidden rounded-xl  md:col-span-3'>
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        className='w-full h-full object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
    </div> */}

  </div>

</section>
<Property />
        </>
    )
}
