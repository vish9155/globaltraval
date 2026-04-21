
// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import FlightCard from "./FlightCard";

// import { useSearchParams } from "react-router-dom";
// import { FilterIcon, X } from "lucide-react";

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

//   let [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (finalData?.data?.length) {
//       setTimeout(() => setLoading(false), 800);
//     }
//   }, [finalData]);

//   let [filters, setFilters] = useState({
//     airlines: [],
//     layovers: [],
//     stops: [],
//     time: [],
//     sort: "",
//     maxPrice: 100000000,
//     minPrice: 0
//   })
// let [openFilter, setOpenFilter] = useState(false);
//   useEffect(() => {
//     setParams(filters)
//   }, [filters])

//   let airlines = [...new Set(allFlights.map(i => i.validatingAirlineCodes[0]))]
//   let layovers = [
//     ...new Set(
//       allFlights.flatMap(f =>
//         f.itineraries[0].segments.slice(1).map(s => s.departure.iataCode,s.departure.cityCode)
//       )
//     )
//   ];

//   let filterData = allFlights
//     .filter(item => {
//       let segments = item.itineraries[0].segments;
//       let first = segments[0];
//       let airlines = item.validatingAirlineCodes[0];
//       let stops = segments.length - 1;
//       let depHour = new Date(first.departure.at).getHours()

//       let timeMatch =
//         filters.time.length === 0 ||
//         filters.time.some(t =>
//           (t === "morning" && depHour >= 5 && depHour < 12) ||
//           (t === "afternoon" && depHour >= 12 && depHour < 17) ||
//           (t === "evening" && depHour >= 17 && depHour < 21) ||
//           (t === "night" && (depHour >= 21 || depHour < 5))
//         )

//       let price = Number(item.price.total);

//       let priceMatch =
//         price >= filters.minPrice &&
//         price <= filters.maxPrice;

//       let airlinesMatch = filters.airlines.length === 0 || filters.airlines.includes(airlines)
//       let stopMatch = filters.stops.length == 0 || filters.stops.some(s =>
//         (s === "non-stop" && stops === 0) ||
//         (s === "1" && stops === 1) ||
//         (s === "2+" && stops >= 2)
//       )
//       let layoverCodes = segments.slice(1).map(s => s.departure.iataCode);

//       let layoverMatch =
//         filters.layovers.length === 0 ||
//         layoverCodes.some(code => filters.layovers.includes(code));

//       return airlinesMatch && timeMatch && stopMatch && layoverMatch && priceMatch
//     })
//     .sort((a, b) => {
//       if (filters.sort === "cheap") {
//         return a.price.total - b.price.total
//       }
//       else if (filters.sort === "fast") {
//         return a.itineraries[0].duration.localeCompare(b.itineraries[0].duration);
//       }
//       else if (filters.sort === "expensive") {
//         return b.price.total - a.price.total
//       }
//       return 0;
//     })

//   console.log(filterData)
//  return (
//   <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 md:flex gap-6 px-3 md:px-6 py-4 md:py-6">

//     <div className="md:hidden sticky -top-2 z-50 bg-white shadow-md rounded-xl p-3 mb-4 flex items-center justify-between">

//       <button
//         onClick={() => setOpenFilter(true)}
//         className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black px-4 py-2 rounded-xl font-semibold shadow hover:scale-105 transition"
//       >
//         <FilterIcon size={24} /> Filters
//       </button>

//       <p className="text-sm font-medium text-gray-600">
//         {filterData.length} flights
//       </p>

//       <select
//         className="border rounded-lg px-2 py-1 text-xs outline-none focus:ring-2 focus:ring-yellow-400"
//         onChange={(e) =>
//           setFilters(prev => ({ ...prev, sort: e.target.value }))
//         }
//       >
//         <option value="">Sort</option>
//         <option value="cheap">Cheap</option>
//         <option value="expensive">Expensive</option>
//         <option value="fast">Fast</option>
//       </select>
//     </div>

   
//     <div className="hidden md:block w-80 bg-white rounded-2xl shadow-lg p-5 max-h-screen sticky top-4 overflow-auto">

//       <div className="flex justify-between items-center mb-4">
//         <h2 className="text-xl font-bold">Filters</h2>
//         <button
//           onClick={() =>
//             setFilters({
//               airlines: [],
//               layovers: [],
//               stops: [],
//               time: [],
//               sort: "",
//               maxPrice: [],
//               minPrice: []
//             })
//           }
//           className="text-sm text-blue-500 hover:underline"
//         >
//           Clear
//         </button>
//       </div>

//      <div className="mb-6">
//           <h3 className="font-semibold mb-3">Airlines</h3>
//           <div className="space-y-2 max-h-40 overflow-y-auto">
//             {airlines.map((item, i) => (
//               <label key={i} className="flex items-center gap-2 cursor-pointer text-sm">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.airlines, item]
//                       : filters.airlines.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, airlines: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Price Range</h3>

//           <div className="flex justify-between text-sm text-gray-500 mb-2">
//             <span>$ {filters.minPrice}</span>
//             <span>${filters.maxPrice}</span>
//           </div>

//           <div className="relative">
            
//             <input
//               type="range"
//               min="0"
//               max="200000"
//               value={filters.minPrice}
//               onChange={(e) =>
//                 setFilters(prev => ({
//                   ...prev,
//                   minPrice: Number(e.target.value)
//                 }))
//               }
//               className="w-full appearance-none z-[50] h-2 bg-yellow-400 rounded-lg"
//             />

            
//             <input
//               type="range"
//               min="0"
//               max="200000"
//               value={filters.maxPrice}
//               onChange={(e) =>
//                 setFilters(prev => ({
//                   ...prev,
//                   maxPrice: Number(e.target.value)
//                 }))
//               }
//               className=" w-full appearance-none z-[50] h-2 bg-yellow-400 rounded-lg"
//             />
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Stops</h3>
//           <div className="space-y-2">
//             {["non-stop", "1", "2+"].map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.stops, item]
//                       : filters.stops.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, stops: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Departure Time</h3>
//           <div className="space-y-2">
//             {["morning", "afternoon", "evening", "night"].map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.time, item]
//                       : filters.time.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, time: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Layover Airports</h3>
//           <div className="space-y-2 max-h-40 overflow-y-auto">
//             {layovers.map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.layovers, item]
//                       : filters.layovers.filter(x => x !== item);

//                      setFilters(prev => ({ ...prev, layovers: update }));
//                    }}
//                  />
//                  {item}
//                </label>
//              ))}
//            </div>
//          </div>

      
//     </div>

    
//     {openFilter && (
//       <div className="fixed inset-0 z-[9999] flex">

//         <div
//           className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//           onClick={() => setOpenFilter(false)}
//         />

//         <div className="relative w-[85%] max-w-sm bg-white h-full p-5 overflow-auto animate-slideIn shadow-2xl">

//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-xl font-bold">Filters</h2>
//             <button
//               onClick={() => setOpenFilter(false)}
//               className="text-lg"
//             >
//               <X size={28} />
//             </button>
//           </div>

        
//      <div className="mb-6">
//           <h3 className="font-semibold mb-3">Airlines</h3>
//           <div className="space-y-2 max-h-40 overflow-y-auto">
//             {airlines.map((item, i) => (
//               <label key={i} className="flex items-center gap-2 cursor-pointer text-sm">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.airlines, item]
//                       : filters.airlines.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, airlines: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>
//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Price Range</h3>

//           <div className="flex justify-between text-sm text-gray-500 mb-2">
//             <span>$ {filters.minPrice}</span>
//             <span>${filters.maxPrice}</span>
//           </div>

//           <div className="relative">
            
//             <input
//               type="range"
//               min="0"
//               max="200000"
//               value={filters.minPrice}
//               onChange={(e) =>
//                 setFilters(prev => ({
//                   ...prev,
//                   minPrice: Number(e.target.value)
//                 }))
//               }
//               className="w-full appearance-none z-[50] h-2 bg-yellow-400 rounded-lg"
//             />

            
//             <input
//               type="range"
//               min="0"
//               max="200000"
//               value={filters.maxPrice}
//               onChange={(e) =>
//                 setFilters(prev => ({
//                   ...prev,
//                   maxPrice: Number(e.target.value)
//                 }))
//               }
//               className=" w-full appearance-none z-[50] h-2 bg-yellow-400 rounded-lg"
//             />
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Stops</h3>
//           <div className="space-y-2">
//             {["non-stop", "1", "2+"].map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.stops, item]
//                       : filters.stops.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, stops: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Departure Time</h3>
//           <div className="space-y-2">
//             {["morning", "afternoon", "evening", "night"].map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.time, item]
//                       : filters.time.filter(x => x !== item);

//                     setFilters(prev => ({ ...prev, time: update }));
//                   }}
//                 />
//                 {item}
//               </label>
//             ))}
//           </div>
//         </div>


//         <div className="mb-6">
//           <h3 className="font-semibold mb-3">Layover Airports</h3>
//           <div className="space-y-2 max-h-40 overflow-y-auto">
//             {layovers.map((item, i) => (
//               <label key={i} className="flex items-center gap-2 text-sm cursor-pointer">
//                 <input
//                   type="checkbox"
//                   className="accent-yellow-400"
//                   onChange={(e) => {
//                     let update = e.target.checked
//                       ? [...filters.layovers, item]
//                       : filters.layovers.filter(x => x !== item);

//                      setFilters(prev => ({ ...prev, layovers: update }));
//                    }}
//                  />
//                  {item}
//                </label>
//              ))}
//            </div>
//          </div>

//           <button
//             onClick={() => setOpenFilter(false)}
//             className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 py-3 rounded-xl font-semibold mt-4 shadow"
//           >
//             Apply Filters
//           </button>

//         </div>
//       </div>
//     )}

   
//     <div className="flex-1">

//       <div className="hidden md:flex justify-between items-center bg-white p-4 rounded-xl shadow mb-5 sticky -top-1 z-40">

//         <p className="text-gray-600">
//           <span className="font-semibold text-black">
//             {filterData.length}
//           </span> Flights Found
//         </p>

//         <select
//           className="border rounded-lg px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-yellow-400"
//           onChange={(e) =>
//             setFilters(prev => ({ ...prev, sort: e.target.value }))
//           }
//         >
//           <option value="">Sort</option>
//           <option value="cheap"> Cheapest</option>
//           <option value="expensive"> Expensive</option>
//           <option value="fast"> Fastest</option>
//         </select>

//       </div>

    
//       {loading ? (
//         <div className="space-y-5">
//           {[1, 2, 3, 4].map(i => (
//             <div key={i} className="bg-white p-6 rounded-2xl shadow animate-pulse">
//               <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
//               <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
//               <div className="h-4 bg-gray-200 rounded w-1/2"></div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="space-y-4">
//           {filterData.map((item, i) => (
//             <div className="hover:scale-[1.01] transition">
//               <FlightCard key={i} item={item} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>

//   </div>
// );
// }

import React, { useEffect, useState } from "react";
import FlightCard from "./FlightCard";

export default function FlightResult() {

  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  let [filters, setFilters] = useState({
    airlines: [],
    time: [],
    sort: "",
    maxPrice: 100000,
    minPrice: 0
  });

  // 🔥 Load data from localStorage
  useEffect(() => {
    let saved = localStorage.getItem("flightsData");
    if (saved) {
      setData(JSON.parse(saved));
      setLoading(false);
    }
  }, []);

  // ✈️ Unique airlines
  let airlines = [...new Set(data.map(i => i.airline))];

  // 🔥 FILTER LOGIC
  let filterData = data
    .filter(item => {

      let depHour = Number(item.departure_time.split(":")[0]);
      let price = item.price;

      // ⏰ Time filter
      let timeMatch =
        filters.time.length === 0 ||
        filters.time.some(t =>
          (t === "morning" && depHour >= 5 && depHour < 12) ||
          (t === "afternoon" && depHour >= 12 && depHour < 17) ||
          (t === "evening" && depHour >= 17 && depHour < 21) ||
          (t === "night" && (depHour >= 21 || depHour < 5))
        );

      // 💰 Price filter
      let priceMatch =
        price >= filters.minPrice &&
        price <= filters.maxPrice;

      // ✈️ Airline filter
      let airlinesMatch =
        filters.airlines.length === 0 ||
        filters.airlines.includes(item.airline);

      return timeMatch && priceMatch && airlinesMatch;
    })
    .sort((a, b) => {
      if (filters.sort === "cheap") return a.price - b.price;
      if (filters.sort === "expensive") return b.price - a.price;
      return 0;
    });

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:flex gap-6">

      {/* 🔥 FILTER PANEL */}
      <div className="w-full md:w-72 bg-white p-4 rounded-xl shadow">

        <h2 className="font-bold text-lg mb-4">Filters</h2>

        {/* ✈️ Airlines */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Airlines</h3>
          {airlines.map((item, i) => (
            <label key={i} className="block text-sm">
              <input
                type="checkbox"
                onChange={(e) => {
                  let updated = e.target.checked
                    ? [...filters.airlines, item]
                    : filters.airlines.filter(x => x !== item);

                  setFilters(prev => ({ ...prev, airlines: updated }));
                }}
              />
              {" "}{item}
            </label>
          ))}
        </div>

        {/* 💰 Price */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Price</h3>

          <input
            type="range"
            min="0"
            max="100000"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters(prev => ({
                ...prev,
                maxPrice: Number(e.target.value)
              }))
            }
          />

          <p>Up to ₹{filters.maxPrice}</p>
        </div>

        {/* ⏰ Time */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Departure Time</h3>

          {["morning", "afternoon", "evening", "night"].map((t, i) => (
            <label key={i} className="block text-sm">
              <input
                type="checkbox"
                onChange={(e) => {
                  let updated = e.target.checked
                    ? [...filters.time, t]
                    : filters.time.filter(x => x !== t);

                  setFilters(prev => ({ ...prev, time: updated }));
                }}
              />
              {" "}{t}
            </label>
          ))}
        </div>

        {/* 🔄 Sort */}
        <div>
          <h3 className="font-semibold mb-2">Sort</h3>
          <select
            onChange={(e) =>
              setFilters(prev => ({ ...prev, sort: e.target.value }))
            }
            className="border p-2 w-full"
          >
            <option value="">None</option>
            <option value="cheap">Cheapest</option>
            <option value="expensive">Expensive</option>
          </select>
        </div>

      </div>

      {/* 🔥 RESULTS */}
      <div className="flex-1">

        <div className="bg-white p-4 rounded-xl shadow mb-4">
          <p>
            <b>{filterData.length}</b> Flights Found
          </p>
        </div>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="space-y-4">
            {filterData.map((item, i) => (
              <FlightCard key={i} item={item} />
            ))}
          </div>
        )}

      </div>

    </div>
  );
}