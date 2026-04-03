// import React, { useState } from 'react'
// import DatePicker from 'react-datepicker'
// import "react-datepicker/dist/react-datepicker.css";
// import { MapPin, CalendarDays, Users } from 'lucide-react'
// import { motion } from 'framer-motion'

// export default function Hotels() {

//   // Date Range
//   const [dateRange, setDateRange] = useState([new Date(), null])
//   const [startDate, endDate] = dateRange

//   // Location
//   const [location, setLocation] = useState("")
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   const locations = ["Delhi", "Mumbai", "Goa", "Bangalore", "Jaipur", "Dubai", "London"]

//   const filteredLocations = locations.filter(item =>
//     item.toLowerCase().includes(location.toLowerCase())
//   )

//   // Guests
//   const [guestOpen, setGuestOpen] = useState(false)
//   const [guests, setGuests] = useState({
//     adults: 2,
//     children: 0,
//     rooms: 1
//   })

//   const updateGuest = (type, value) => {
//     setGuests(prev => ({
//       ...prev,
//       [type]: Math.max(0, prev[type] + value)
//     }))
//   }

//   return (
//     <section className='w-full min-h-screen relative'>

//       {/* Background */}
//       <img 
//         src="/images/LondonHouse Chicago 828x300.jpg.jpeg"
//         className='w-full h-[500px] object-cover brightness-75'
//         alt=""
//       />

//       <div className='absolute inset-0 bg-black/30'></div>

//       {/* Booking Card */}
//       <div className='absolute bottom-20 w-full flex justify-center px-4'>

//         <motion.div 
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className='w-full max-w-6xl backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-4 items-center'
//         >

//           {/* Location */}
//           <div className='relative w-full'>
//             <div className='flex items-center gap-2 bg-white rounded-xl px-4 py-3'>
//               <MapPin size={18} className='text-gray-500' />
//               <input
//                 value={location}
//                 onChange={(e) => {
//                   setLocation(e.target.value)
//                   setShowSuggestions(true)
//                 }}
//                 onFocus={() => setShowSuggestions(true)}
//                 placeholder='Where are you going?'
//                 className='w-full outline-none text-sm'
//               />
//             </div>

//             {showSuggestions && location && (
//               <div className='absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg z-50 max-h-40 overflow-y-auto'>
//                 {filteredLocations.map((item, i) => (
//                   <div
//                     key={i}
//                     onClick={() => {
//                       setLocation(item)
//                       setShowSuggestions(false)
//                     }}
//                     className='p-3 hover:bg-gray-100 cursor-pointer text-sm'
//                   >
//                     {item}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Date Range */}
//           <div className='flex items-center gap-2 bg-white rounded-xl px-4 py-3 w-full'>
//             <CalendarDays size={18} className='text-gray-500' />
//             <DatePicker
//               selectsRange={true}
//               startDate={startDate}
//               endDate={endDate}
//               onChange={(update) => setDateRange(update)}
//               minDate={new Date()}
//               placeholderText="Check-in — Check-out"
//               className='outline-none w-full text-sm'
//             />
//           </div>

//           {/* Guests */}
//           <div className='relative w-full'>
//             <div 
//               onClick={() => setGuestOpen(!guestOpen)}
//               className='flex items-center gap-2 bg-white rounded-xl px-4 py-3 cursor-pointer'
//             >
//               <Users size={18} className='text-gray-500' />
//               <span className='text-sm'>
//                 {guests.adults} Adults • {guests.children} Children • {guests.rooms} Rooms
//               </span>
//             </div>

//             {guestOpen && (
//               <div className='absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg p-4 z-50'>

//                 {["adults", "children", "rooms"].map((type) => (
//                   <div key={type} className='flex justify-between items-center mb-3'>
//                     <span className='capitalize text-sm'>{type}</span>
//                     <div className='flex items-center gap-3'>
//                       <button 
//                         onClick={() => updateGuest(type, -1)}
//                         className='px-3 py-1 bg-gray-200 rounded'
//                       >-</button>
//                       <span>{guests[type]}</span>
//                       <button 
//                         onClick={() => updateGuest(type, 1)}
//                         className='px-3 py-1 bg-gray-200 rounded'
//                       >+</button>
//                     </div>
//                   </div>
//                 ))}

//               </div>
//             )}
//           </div>

//           {/* Button */}
//           <motion.button 
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className='w-full md:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg'
//           >
//             Search
//           </motion.button>

//         </motion.div>

//       </div>

//     </section>
//   )
// }

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
                <div className='bg-sky-200/80 absolute bottom-20 w-full py-10 flex flex-col md:flex-row items-center justify-center  gap-6 '>
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
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
      <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>New York</h2>

      </div>
    </div>


    <div className='relative overflow-hidden rounded-xl '>
      <img 
        src="https://images.unsplash.com/photo-1566073771259-6a8506099945"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
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
        src="https://images.unsplash.com/photo-1582719508461-905c673771fd"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
        <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl '>Miami</h2>

      </div>
    </div>

    <div className='relative overflow-hidden rounded-xl '>
      <img 
        src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
       <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>Las Vages</h2>

      </div>
    </div>

    {/* Last Big Highlight */}
    <div className='relative overflow-hidden rounded-xl  md:col-span-1'>
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
       <div className='absolute left-5 top-5'>
        <h2 className='text-white font-semibold text-2xl'>Jackson Whole</h2>

      </div>
    </div>
     {/* <div className='overflow-hidden rounded-xl  md:col-span-3'>
      <img 
        src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
        className='w-full h-[300px] object-cover hover:scale-110 brightness-75 cursor-pointer transition duration-500'
        alt=""
      />
    </div> */}

  </div>

</section>
<Property />
        </>
    )
}
