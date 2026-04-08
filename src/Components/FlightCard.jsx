
import React from "react";

export default function FlightCard({ item }) {
  let segments = item.itineraries[0].segments;

  let first = segments[0];
  let last = segments[segments.length - 1];

  let depTime = new Date(first.departure.at);
  let arrTime = new Date(last.arrival.at);

  let price = item?.price?.total;

  let stopsCount = segments.length - 1;

  let layovers = [];
  for (let i = 0; i < segments.length - 1; i++) {
    let arr = new Date(segments[i].arrival.at);
    let nextDep = new Date(segments[i + 1].departure.at);

    let diff = (nextDep - arr) / (1000 * 60); // minutes
    let hours = Math.floor(diff / 60);
    let mins = diff % 60;

    layovers.push({
      airport: segments[i].arrival.iataCode,
      time: `${hours}h ${mins}m`,
    });
  }

  let totalDuration = item.itineraries[0].duration;

  return (
    <div className="max-w-5xl mx-auto bg-white rounded-2xl border p-5 shadow-sm hover:shadow-md transition flex justify-between">

      <div className="flex-1">

        <p className="text-gray-500 font-semibold mb-3">Departure</p>

        <div className="flex items-center justify-between">

  
          <div className="w-1/5">
            <p className="font-semibold">
               {item.validatingAirlineCodes[0]}
            </p>
            <p className="text-sm text-gray-500">
              {stopsCount === 0
                ? "Non-stop"
                : `${stopsCount} Stop`}
            </p>
          </div>

      
          <div className="text-center">
            <p className="font-bold text-lg">
              {depTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{first.departure.iataCode}</p>
          </div>

         
          <div className="flex-1 px-6">

       
            <div className="relative flex items-center">

          
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>

              <div className="flex-1 h-[2px] bg-gray-300 relative">

             
                {layovers.map((lay, i) => (
                  <div
                    key={i}
                    className="absolute top-1/2 -translate-y-1/2"
                    style={{
                      left: `${((i + 1) / segments.length) * 100}%`,
                    }}
                  >
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>

                    <div className="absolute top-5 left-1/2 -translate-x-1/2 text-xs text-gray-600 whitespace-nowrap flex gap-6">
                      {lay.airport} ({lay.time})
                    </div>
                  </div>
                ))}
              </div>

              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
            </div>

        
            <p className="text-center text-xs text-gray-500 mt-9">
              {totalDuration}
            </p>
          </div>

       
          <div className="text-center">
            <p className="font-bold text-lg">
              {arrTime.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
            <p>{last.arrival.iataCode}</p>
          </div>
        </div>
      </div>

      <div className="w-56 ml-6 border rounded-xl p-4 text-center bg-blue-50">
        <p className="text-sm text-gray-600">Basic Economy</p>

        <p className="text-2xl font-bold text-green-600">
          $ {price}
        </p>

        <p className="text-xs text-gray-500 mb-3">
          per adult
        </p>

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
          Select
        </button>
      </div>

    </div>
  );
}