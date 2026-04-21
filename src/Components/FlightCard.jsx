// import React from "react";

// export default function FlightCard({ item }) {
//   let segments = item.itineraries[0].segments;

//   let first = segments[0];
//   let last = segments[segments.length - 1];

//   let depTime = new Date(first.departure.at);
//   let arrTime = new Date(last.arrival.at);

//   let price = item?.price?.total;

//   let stopsCount = segments.length - 1;

//   let layovers = [];
//   for (let i = 0; i < segments.length - 1; i++) {
//     let arr = new Date(segments[i].arrival.at);
//     let nextDep = new Date(segments[i + 1].departure.at);

//     let diff = (nextDep - arr) / (1000 * 60);
//     let hours = Math.floor(diff / 60);
//     let mins = diff % 60;

//     layovers.push({
//       airport: segments[i].arrival.iataCode,
//       time: `${hours}h ${mins}m`,
//     });
//   }

//   let totalDuration = item.itineraries[0].duration;

//   let airlineCode = item.validatingAirlineCodes[0];

//   return (
//     <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-6">

 
//       <div className="flex-1">


//         <div className="flex items-center gap-3 mb-4">
          // <img
          //   src={`https://images.kiwi.com/airlines/64/${airlineCode}.png`}
          //   alt={airlineCode}
          //   className="w-14 h-14 object-contain rounded-full  bg-white"
          // />
//           <div>
//             <p className="font-semibold text-gray-800">{airlineCode}</p>
//             <p className="text-xs text-gray-500">
//               {stopsCount === 0 ? "Non-stop" : `${stopsCount} Stop`}
//             </p>
//           </div>
//         </div>

   
//         <div className="flex items-center justify-between">

   
//           <div className="text-center">
//             <p className="font-bold text-lg md:text-xl">
//               {depTime.toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </p>
//             <p className="text-sm text-gray-500">
//               {first.departure.iataCode}
//             </p>
//           </div>

         
//           <div className="flex-1 px-3 md:px-6">

//             <div className="relative flex items-center">

//               <div className="w-3 h-3 bg-gray-400 rounded-full"></div>

             
//               <div className="flex-1 h-[2px] bg-gradient-to-r from-gray-300 to-gray-400 relative">

            
//                 {layovers.map((lay, i) => (
//                   <div
//                     key={i}
//                     className="absolute top-1/2 -translate-y-1/2"
//                     style={{
//                       left: `${((i + 1) / segments.length) * 100}%`,
//                     }}
//                   >
//                     <div className="w-3 h-3 bg-yellow-400 rounded-full shadow"></div>

//                     <div className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-gray-600 whitespace-nowrap bg-white px-2 py-1 rounded shadow">
//                       {lay.airport} ({lay.time})
//                     </div>
//                   </div>
//                 ))}
//               </div>

      
//               <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
//             </div>

 
//             <p className="text-center text-xs text-gray-500 mt-7 md:mt-9 font-medium">
//               {totalDuration}
//             </p>
//           </div>

//           <div className="text-center">
//             <p className="font-bold text-lg md:text-xl">
//               {arrTime.toLocaleTimeString([], {
//                 hour: "2-digit",
//                 minute: "2-digit",
//               })}
//             </p>
//             <p className="text-sm text-gray-500">
//               {last.arrival.iataCode}
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="w-full md:w-56 border rounded-2xl p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">

//         <p className="text-sm text-gray-600">Basic Economy</p>

//         <p className="text-2xl md:text-3xl font-bold text-green-600 my-1">
//           $ {price}
//         </p>

//         <p className="text-xs text-gray-500 mb-3">
//           per adult
//         </p>

//         <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition text-white py-2 rounded-lg font-semibold shadow">
//           Select
//         </button>
//       </div>
//     </div>
//   );
// }

import React from "react";

export default function FlightCard({ item }) {

  let depTime = item.departure_time;
  let arrTime = item.arrival_time;
  let flight_no=item.flight_no
  let price = item.price;

  let airline = item.airline;

  return (
    <div className="bg-white rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-6">

      {/* LEFT SIDE */}
      <div className="flex-1">

        {/* Airline */}
        <div className="flex items-center gap-3 mb-4">
         <img
            src={`https://images.kiwi.com/airlines/64/${flight_no}.png`}
            alt={flight_no}
            className="w-14 h-14 object-contain rounded-full  bg-white"
          />
          <div>
            <p className="font-semibold text-gray-800">{airline}</p>
            <p className="text-xs text-gray-500">
              {flight_no}
            </p>
          </div>
        </div>

        {/* Timing */}
        <div className="flex items-center justify-between">

          {/* Departure */}
          <div className="text-center">
            <p className="font-bold text-lg md:text-xl">
              {depTime}
            </p>
            <p className="text-sm text-gray-500">
              {item.source}
            </p>
          </div>

          {/* Middle */}
          <div className="flex-1 px-4">

            <div className="flex items-center justify-center">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <div className="flex-1 h-[2px] bg-gray-400"></div>
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>

            <p className="text-center text-xs text-gray-500 mt-2">
              {item.duration}
            </p>
          </div>

          {/* Arrival */}
          <div className="text-center">
            <p className="font-bold text-lg md:text-xl">
              {arrTime}
            </p>
            <p className="text-sm text-gray-500">
              {item.destination}
            </p>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-56 border rounded-2xl p-4 text-center bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col justify-center">

        <p className="text-sm text-gray-600">Economy</p>

        <p className="text-2xl md:text-3xl font-bold text-green-600 my-1">
          ₹ {price}
        </p>

        <p className="text-xs text-gray-500 mb-3">
          per adult
        </p>

        <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:scale-105 transition text-white py-2 rounded-lg font-semibold shadow">
          Select
        </button>
      </div>

    </div>
  );
}