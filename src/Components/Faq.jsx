import React, { useState } from 'react'
import { faqdata } from '../data/faq'
import { Plus } from 'lucide-react';
import { FaPlus } from 'react-icons/fa';
export default function Faq() {

  let tabs = [
    { label: "Booking", key: "booking_services" },
    { label: "Payment", key: "payment_pricing" },
    { label: "Cancellation", key: "cancellation_refund" },
    { label: "Changes", key: "changes_rescheduling" },
    { label: "Flights", key: "flight_services" },
    { label: "Hotels", key: "hotel_services" },
    { label: "Car Rental", key: "car_rental" },
    { label: "Cruises", key: "cruise_services" },
    { label: "Delays", key: "delays_cancellations" },
    { label: "Support", key: "support_security" }
  ];

  let [tab, setTab] = useState("booking_services")
  let [open, setOpen] = useState(false)
  let [search,setSearch] = useState("")
  let Selectedfaqdata = faqdata[tab] || []
  let filterdata=Selectedfaqdata.filter((item)=>item.question.toLowerCase().includes(search.toLowerCase()))
  console.log(tab, Selectedfaqdata)
  return (
    <>
      <section className='w-full px-4 p mx-auto bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-800'>
        <header className="text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
          Help Center
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Find answers to your questions instantly
        </p>
         <div className='max-w-3xl mx-auto'>
          <input type="text" placeholder='ask your questions' onChange={(e)=>setSearch(e.target.value)} className='w-full outline-amber-300 border border-amber-300 items-center mx-auto p-4 rounded-full mt-5 ' />
        </div>
        </header>
       
        <div className='max-w-7xl mx-auto py-5 px-4'>
          <h1 className='text-center text-xl sm:text-2xl md:text-3xl p-3 sm:p-4 md:p-5 '>Frequntly Asked Questions</h1>
          <div className='text-center m-auto'>
            {
              tabs.map((item, id) => (
                <button key={id} onClick={() => setTab(item.key)} className={`cursor-pointer  text-center p-1 sm:p-2 md:p-3 text-white rounded gap-10 ms-5 mt-3 ${item.key === tab ? 'bg-yellow-400 transition duration-300 cursor-pointer' : 'bg-yellow-700/90'}`}>
                  {item.label}
                </button>
              ))
            }
          </div>
        </div>
        <section className='max-w-3xl px-4 py-3  mx-auto'>

        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className='grid grid-cols-1 gap-5 m-auto text-center'>
            {
              filterdata?.map((item, id) => {
                let openIndex = open === id
                return (
                  <div key={id} className='border border-amber-300 rounded-2xl overflow-hidden '>
                    <button className={`flex items-center justify-between p-4 md:p-5 text-left w-full ${openIndex ? "bg-yellow-600 text-white" : ""}`} onClick={() => setOpen(openIndex ? null : id)}>

                      <h3 className=''>{item.question}</h3>
                      <span className={`inline-block text-xl transition-transform duration-300 ${openIndex ? "rotate-45" : "rotate-0"}`}><FaPlus className='text-sm' /></span>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-in-out ${openIndex
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                        } overflow-hidden`}
                    >
                      <div className="px-5 pb-5 text-gray-600 bg-yellow-200 text-sm">
                        {item.answer}
                      </div>
                    </div>

                  </div>
                )
              })
            }
          </div>
        </div>

      </section>
      </section>
      
    </>
  )
}

