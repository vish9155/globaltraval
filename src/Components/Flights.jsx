import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { MapPin, Calendar, Users, ChevronDown, Plus, Minus } from 'lucide-react';
import TrainRoutes from './TrainRoutes';
import { useDispatch } from 'react-redux';
import { fetchFlights } from '../redux/FlightSlice';

export default function Flights() {

    let [fromSearch, setFromSearch] = useState([])
    let [toSearch, setToSearch] = useState([])

    let [trip, setTrip] = useState("oneway")
    let [departDate, setDepartDate] = useState(new Date());
    let [returnDate, setReturnDate] = useState(null);
    let [open, setOpen] = useState(false)

    let [adult, setAdult] = useState(1)
    let [children, setChildren] = useState(0)
    let [infant, setInfant] = useState(0)
    let [classe, setClass] = useState('Economy')

    let navigate = useNavigate()

    let [form, setForm] = useState({
        from: "",
        to: "",
        departDate,
        returnDate,
        adult,
        children,
        infant,
        classe
    })


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

    useEffect(() => {
        setForm((prev) => ({
            ...prev,
            adult,
            children,
            infant,
            classe
        }));
    }, [adult, children, infant, classe]);

    let searchLocation = async (value, type) => {
        console.log(value)
        let resp = await fetch(`http://localhost:5000/api/flight/location?keyword=${value}`)
        let data = await resp.json()
        console.log(data)
        if (type == 'from') {
            setFromSearch(data.data[0].data || [])
        }
        else {
            if (type == 'to') {
                setToSearch(data.data[0].data || [])
            }
        }
        console.log(data)
    }
    let dispatch = useDispatch()
    let handleSubmit = async (e) => {
        e.preventDefault()
        let payload = {
            ...form,
            departDate: departDate.toISOString().split("T")[0],
            returnDate: returnDate
                ? returnDate.toISOString().split("T")[0]
                : null,

            classe: classe.toUpperCase()
        };

        let result = await dispatch(fetchFlights(payload))
        if (result.payload) {
            localStorage.setItem(
                "flightsData",
                JSON.stringify(result.payload)
            );
            navigate(`/flight-results`);
        }
        console.log(result)
    }

    return (
        <>
            <section className='w-full relative h-[70vh] md:h-[85vh]  '>

                <img
                    src="/images/banner/flights.jpg.jpeg"
                    className='absolute inset-0 w-full h-full  '
                    alt=""
                />

                <div className='absolute bottom-2 w-full  px-4 '>
                    <div className='bg-white rounded-2xl shadow-xl p-5 max-w-5xl mx-auto '>


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


                            <div className='relative z-50 flex items-center gap-2 border p-3 rounded-xl'>
                                <MapPin size={18} />
                                <input onChange={(e) => {
                                    setForm({ ...form, from: e.target.value })
                                    searchLocation(e.target.value, "from")
                                }} type="text" value={form.from} placeholder='From' name='from' className='outline-none w-full' />
                                {fromSearch.length > 0 && (
                                    <div className='absolute top-14 left-0 w-80 bg-white shadow-xl rounded-lg z-[999] h-auto overflow-y-auto'>
                                        {fromSearch.slice(0, 20).map((item, i) => (
                                            <div
                                                key={i}
                                                className='p-2 hover:bg-gray-100 cursor-pointer'
                                                onClick={() => {
                                                    setForm({ ...form, from: item.iataCode })
                                                    setFromSearch([])
                                                }}
                                            >
                                                {item.iataCode} - {item.name || item.detailedName}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>


                            <div className='relative flex items-center gap-2 border p-3 rounded-xl'>
                                <MapPin size={18} />
                                <input onChange={(e) => {
                                    setForm({ ...form, to: e.target.value })
                                    searchLocation(e.target.value, "to")
                                }} type="text" placeholder='To' name='to' value={form.to} className='outline-none w-full' />
                                {toSearch.length > 0 && (
                                    <div className='absolute top-14 left-0 w-80 bg-white shadow-xl rounded-lg z-[999] h-80 overflow-y-auto'>
                                        {toSearch.slice(0, 20).map((item, i) => (
                                            <div
                                                key={i}
                                                className='p-2 hover:bg-gray-100 cursor-pointer'
                                                onClick={() => {
                                                    setForm({ ...form, to: item.iataCode })
                                                    setToSearch([])
                                                }}
                                            >
                                                {item.iataCode} - {item.name}
                                            </div>
                                        ))}
                                    </div>
                                )}

                            </div>


                            <div className='flex items-center gap-2 border p-3 rounded-xl'>
                                <Calendar size={18} />
                                <DatePicker
                                    selected={departDate}
                                    onChange={(date) => setDepartDate(date)}
                                    value={form.departDate}
                                    className="outline-none w-full"
                                    popperClassName="z-50"
                                    name='departDate'
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
                                        name='returnDate'
                                        value={form.returnDate}
                                    />
                                </div>
                            )}


                            <div className='relative'>
                                <div
                                    onClick={() => setOpen(!open)}
                                    className='flex items-center justify-between border p-3 rounded-xl cursor-pointer'
                                >
                                    <div className='flex items-center gap-2' >
                                        <Users size={18} />
                                        {total} T
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