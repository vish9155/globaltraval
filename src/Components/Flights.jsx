import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MapPin, Calendar, Users, ChevronDown, Plus, Minus } from 'lucide-react';
import TrainRoutes from './TrainRoutes';

export default function Flights() {

    let [trip, setTrip] = useState("oneway")
    let [departDate, setDepartDate] = useState(new Date());
    let [returnDate, setReturnDate] = useState(null);
    let [open, setOpen] = useState(false)

    let [adult, setAdult] = useState(1)
    let [children, setChildren] = useState(0)
    let [infant, setInfant] = useState(0)
    let [classe, setClass] = useState('Economy')

    let increase = (type) => {
        if (type === "adult") return setAdult(adult + 1)
        if (type === "children") return setChildren(children + 1)
        if (type === "infant") return setInfant(infant + 1)
    }

    let decrease = (type) => {
        if (type === "adult" && adult > 1) return setAdult(adult - 1)
        if (type === "children" && children > 0) return setChildren(children - 1)
        if (type === "infant" && infant > 0) return setInfant(infant - 1)
    }

    let total = adult + children + infant

    let handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <>
        <section className='w-full relative h-[90vh] overflow-hidden '>

            <img
                src="https://dmlib.airindia.com/adobe/assets/urn%3Aaaid%3Aaem%3Aee95dbb0-8f2a-496d-90b1-b6caafc9a86c/as/banner-hero-web.webp"
                className='absolute inset-0 w-full h-[600px] object-cover'
                alt=""
            />

            <div className='absolute bottom-2  px-4 '>
                <div className='bg-white rounded-2xl shadow-xl p-5 w-full '>

                   
                    <div className='flex ite gap-6 mb-4'>
                        <label className='flex items-center gap-2'>
                            <input type="radio" checked={trip === "roundtrip"} onChange={() => setTrip("roundtrip")} />
                            Round Trip
                        </label>
                        <label className='flex items-center gap-2'>
                            <input type="radio" checked={trip === "oneway"} onChange={() => setTrip("oneway")} />
                            One Way
                        </label>
                    </div>

                    
                    <form onSubmit={handleSubmit} className='grid grid-cols-1 md:grid-cols-7 gap-3 items-center'>

                        
                        <div className='flex items-center gap-2 border p-3 rounded-xl'>
                            <MapPin size={18} />
                            <input type="text" placeholder='From' className='outline-none w-full' />
                        </div>

                   
                        <div className='flex items-center gap-2 border p-3 rounded-xl'>
                            <MapPin size={18} />
                            <input type="text" placeholder='To' className='outline-none w-full' />
                        </div>

                      
                        <div className='flex items-center gap-2 border p-3 rounded-xl'>
                            <Calendar size={18} />
                            <DatePicker
                                selected={departDate}
                                onChange={(date) => setDepartDate(date)}
                                className="outline-none w-full"
                                popperClassName="z-50"
                            />
                        </div>

                     
                        {trip === "roundtrip" && (
                            <div className='flex items-center gap-2 border p-3 rounded-xl'>
                                <Calendar size={18} />
                                <DatePicker
                                    selected={returnDate}
                                    onChange={(date) => setReturnDate(date)}
                                    className="outline-none w-full"
                                    minDate={departDate}
                                    popperClassName="z-50"
                                />
                            </div>
                        )}

                       
                        <div className='relative'>
                            <div
                                onClick={() => setOpen(!open)}
                                className='flex items-center justify-between border p-3 rounded-xl cursor-pointer'
                            >
                                <div className='flex items-center gap-2'>
                                    <Users size={18} />
                                    {total} Traveller
                                </div>
                                <ChevronDown size={16} />
                            </div>

                            {open && (
                                <div className='absolute -top-53 left-0 w-64 bg-white shadow-xl rounded-xl p-4 z-50'>

                                    {[
                                        { label: "Adults", value: adult, type: "adult" },
                                        { label: "Children", value: children, type: "children" },
                                        { label: "Infants", value: infant, type: "infant" }
                                    ].map((item, i) => (
                                        <div key={i} className='flex justify-between items-center mb-3'>
                                            <span>{item.label}</span>

                                            <div className='flex items-center gap-3'>
                                                <button type="button" onClick={() => decrease(item.type)} className='w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center'>
                                                    <Minus size={14} />
                                                </button>

                                                <span>{item.value}</span>

                                                <button type="button" onClick={() => increase(item.type)} className='w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center'>
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                    ))}

                                    <button
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        className='w-full bg-amber-500 py-2 rounded-lg mt-2'
                                    >
                                        Done
                                    </button>
                                </div>
                            )}
                        </div>

                    
                        <select
                            className='border p-3 rounded-xl'
                            value={classe}
                            onChange={(e) => setClass(e.target.value)}
                        >
                            <option value="Economy">Economy</option>
                            <option value="Business">Business</option>
                            <option value="First">First</option>
                        </select>

                  
                        <button className='bg-amber-400 hover:bg-amber-500 rounded-xl p-3 font-semibold'>
                            Search
                        </button>

                    </form>
                </div>
            </div>
             
        </section>
         <TrainRoutes />
        </>
      
    )
}