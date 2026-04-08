import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import FlightCard from "./FlightCard";

import { useSearchParams } from "react-router-dom";

// export default function FlightResult() {

//   let reduxData = useSelector(s => s.flights.data);
//   let [data, setData] = useState(null);

//   let [params, setParams] = useSearchParams();

//   useEffect(() => {
//     let saved = localStorage.getItem("flightsData");
//     if (saved) setData(JSON.parse(saved));
//   }, []);

//   let finalData = reduxData?.data?.length ? reduxData : data;
//   let allFlights = finalData?.data || [];

//   // 🔥 FILTER STATE
//   let [filters, setFilters] = useState({
//     airlines: [],
//     stops: [],
//     layovers: [],
//     time: [],
//     price: [0, 200000],
//     sort: ""
//   });

//   // 🔥 URL SYNC
//   useEffect(() => {
//     setParams(filters);
//   }, [filters]);

//   // 🔥 DYNAMIC DATA
//   let airlines = [...new Set(allFlights.map(f => f.validatingAirlineCodes[0]))];



//   // 🔥 FILTER + SORT
//   let filteredData = allFlights
//     .filter(item => {
//       let segments = item.itineraries[0].segments;
//       let first = segments[0];
//       let airline = item.validatingAirlineCodes[0];
//       let stops = segments.length - 1;
//       let price = Number(item.price.total);

//       let depHour = new Date(first.departure.at).getHours();

      // let timeMatch =
      //   filters.time.length === 0 ||
      //   filters.time.some(t =>
      //     (t === "morning" && depHour >= 5 && depHour < 12) ||
      //     (t === "afternoon" && depHour >= 12 && depHour < 17) ||
      //     (t === "evening" && depHour >= 17 && depHour < 21) ||
      //     (t === "night" && (depHour >= 21 || depHour < 5))
      //   );

//       let airlineMatch =
//         filters.airlines.length === 0 ||
//         filters.airlines.includes(airline);

//       let stopMatch =
//         filters.stops.length === 0 ||
//         filters.stops.some(s =>
//           (s === "non-stop" && stops === 0) ||
//           (s === "1" && stops === 1) ||
//           (s === "2+" && stops >= 2)
//         );

// let layoverCodes = segments.slice(1).map(s => s.departure.iataCode);

// let layoverMatch =
//   filters.layovers.length === 0 ||
//   layoverCodes.some(code => filters.layovers.includes(code));

//       let priceMatch =
//         price >= filters.price[0] &&
//         price <= filters.price[1];

//       return airlineMatch && stopMatch && layoverMatch && timeMatch && priceMatch;
//     })
//     .sort((a, b) => {
//       if (filters.sort === "cheap") {
//         return a.price.total - b.price.total;
//       }
//       if (filters.sort === "fast") {
//         return a.itineraries[0].duration.localeCompare(b.itineraries[0].duration);
//       }
//       return 0;
//     });

//   return (
//     <div className="min-h-screen bg-gray-100 flex">

//       {/* 🔥 SIDEBAR */}
//       <div className="w-72 bg-white p-4 shadow-lg space-y-6">

//         <h2 className="font-bold text-lg">Filters</h2>

//         {/* PRICE */}
//         <div>
//           <p className="font-semibold">Price</p>
//           <input
//             type="range"
//             min="0"
//             max="200000"
//             onChange={(e) =>
//               setFilters({ ...filters, price: [0, e.target.value] })
//             }
//           />
//         </div>

//         {/* AIRLINES */}
//         <div>
//           <p className="font-semibold">Airlines</p>
//           {airlines.map(a => (
//             <label key={a} className="block">
//               <input
//                 type="checkbox"
//                 onChange={(e) => {
//                   let updated = e.target.checked
//                     ? [...filters.airlines, a]
//                     : filters.airlines.filter(x => x !== a);

//                   setFilters({ ...filters, airlines: updated });
//                 }}
//               /> {a}
//             </label>
//           ))}
//         </div>

//         {/* STOPS */}
//         <div>
//           <p className="font-semibold">Stops</p>
//           {["non-stop", "1", "2+"].map(s => (
//             <label key={s} className="block">
//               <input
//                 type="checkbox"
//                 onChange={(e) => {
//                   let updated = e.target.checked
//                     ? [...filters.stops, s]
//                     : filters.stops.filter(x => x !== s);

//                   setFilters({ ...filters, stops: updated });
//                 }}
//               /> {s}
//             </label>
//           ))}
//         </div>

//         {/* TIME */}
//         <div>
//           <p className="font-semibold">Time</p>
//           {["morning", "afternoon", "evening", "night"].map(t => (
//             <label key={t} className="block">
//               <input
//                 type="checkbox"
//                 onChange={(e) => {
//                   let updated = e.target.checked
//                     ? [...filters.time, t]
//                     : filters.time.filter(x => x !== t);

//                   setFilters({ ...filters, time: updated });
//                 }}
//               /> {t}
//             </label>
//           ))}
//         </div>

//       </div>

    //   {/* 🔥 RIGHT SIDE */}
    //   <div className="flex-1 p-4">

    //     {/* SORT */}
    //     <div className="flex justify-end mb-4">
    //       <select
    //         className="border p-2 rounded"
    //         onChange={(e) =>
    //           setFilters({ ...filters, sort: e.target.value })
    //         }
    //       >
    //         <option value="">Sort</option>
    //         <option value="cheap">Cheapest</option>
    //         <option value="fast">Fastest</option>
    //       </select>
    //     </div>

    //     {/* RESULTS */}
    //     <div className="space-y-4">
    //       {filteredData.map((item, i) => (
    //         <div
    //           key={i}

    //         >
    //           <FlightCard item={item} />
    //         </div>
    //       ))}
    //     </div>

    //   </div>

    // </div>
//   );
// }


export default function FlightResult() {

  let reduxData = useSelector(s => s.flights.data);
  let [data, setData] = useState(null);

  let [params, setParams] = useSearchParams();

  useEffect(() => {
    let saved = localStorage.getItem("flightsData");
    if (saved) setData(JSON.parse(saved));
  }, []);

  let finalData = reduxData?.data?.length ? reduxData : data;
  let allFlights = finalData?.data || [];

  let [filters, setFilters] = useState({
    airlines: [],
    layovers: [],
    stops: [],
    time: [],
    sort: "",
    price: []
  })

  useEffect(() => {
    setParams(filters)
  }, [filters])

  let airlines =[...new Set(allFlights.map(i => i.validatingAirlineCodes[0]))]
 let layovers = [
    ...new Set(
      allFlights.flatMap(f =>
        f.itineraries[0].segments.slice(1).map(s => s.departure.iataCode)
      )
    )
  ];

  let filterData = allFlights
    .filter(item => {
      let segments = item.itineraries[0].segments;
      let first = segments[0];
      let airlines = item.validatingAirlineCodes[0];
      let stops = segments.length - 1;
      let depHour = new Date(first.departure.at).getHours()

      let timeMatch = 
      filters.time.length === 0 || 
      filters.time.some(t =>
        (t === "morning" && depHour >= 5 && depHour < 12) ||
        (t === "afternoon" && depHour >= 12 && depHour < 17) ||
        (t === "evening" && depHour >= 17 && depHour < 21) ||
        (t === "night" && (depHour >= 21 || depHour < 5))
      )
      let airlinesMatch = filters.airlines.length === 0 || filters.airlines.includes(airlines)
      let stopMatch = filters.stops.length == 0 || filters.stops.some(s =>
        (s === "non-stop" && stops === 0) ||
        (s === "1" && stops === 1) ||
        (s === "2+" && stops >= 2)
      )
      let layoverCodes = segments.slice(1).map(s => s.departure.iataCode);

      let layoverMatch =
        filters.layovers.length === 0 ||
        layoverCodes.some(code => filters.layovers.includes(code));

      return airlinesMatch && timeMatch && stopMatch && layoverMatch
    })
    .sort((a, b) => {
      if (filters.sort === "cheap") {
        a.price - b.price
      }
      else if (filters.sort === "fast") {
        return a.itineraries[0].duration.localeCompare(b.itineraries[0].duration);
      }
      return 0;
    })

console.log(filterData)
  return (
    <>
   <div className="flex gap-5 ">
     <div className="max-w-4xl p-4 py-10">
      <div className="py-5 ">
        {
          airlines.map((item,i)=>(
            <>
             <label htmlFor={item} key={i} className="block gap-2 space-y-3 mt-3 ">
              <input type="checkbox" className="px-3 ms-3 space-x-1" onChange={(e)=>{
                let update=e.target.checked?[...filters.airlines,item]:filters.airlines.filter(x=>x!=item);
                setFilters({...filters,airlines:update})
              }} />
              {item}
             </label>
            </>
          ))
        }
      </div>
      <div>
        {
          ["non-stop", "1", "2+"].map((item,i)=>(
            <>
             <label htmlFor={item} key={i} className="block gap-2 space-y-3 mt-3 ">
              <input type="checkbox" className="px-3" onChange={(e)=>{
                let update=e.target.checked?[...filters.stops,item]:filters.stops.filter(x=>x!=item);
                setFilters({...filters,stops:update})
              }} />
              {item}
             </label>
            </>
          ))
        }
      </div>
      <div>
        {
          ["morning", "afternoon", "evening","night"].map((item,i)=>(
            <>
             <label htmlFor={item} key={i} className="block gap-2 space-y-3 mt-3 ">
              <input type="checkbox" className="px-3" onChange={(e)=>{
                let update=e.target.checked?[...filters.time,item]:filters.time.filter(x=>x!=item);
                setFilters({...filters,time:update})
              }} />
              {item}
             </label>
            </>
          ))
        }
      </div>
      <div>
        {
          layovers.map((item,i)=>(
            <>
             <label htmlFor={item} key={i} className="block gap-2 space-y-3 mt-3 ">
              <input type="checkbox" className="px-3" onChange={(e)=>{
                let update=e.target.checked?[...filters.layovers,item]:filters.layovers.filter(x=>x!=item);
                setFilters({...filters,layovers:update})
              }} />
              {item}
             </label>
            </>
          ))
        }
      </div>

    </div>
   
      <div className="flex-1 p-4">

        <div className="space-y-4">
          {filterData.map((item, i) => (
            <div
              key={i}

            >
              <FlightCard item={item} />
            </div>
          ))}
        </div>

      </div>

   </div>
   
    </>
  )
}
