import React from 'react'
import { useLocation } from 'react-router-dom'

export default function FlightResult() {
  let location = useLocation()
  let data = location.state || []
  console.log(data)

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">

      <h1 className="text-2xl font-bold mb-6">
        ✈️ Flight Results
      </h1>

      <div className="space-y-4">
        {data && data.data.map((item, index) => {

          let segment = item.itineraries[0].segments[0]
          let airline = item.validatingAirlineCodes[0]

          let depTime = new Date(segment.departure.at)
          let arrTime = new Date(segment.arrival.at)

          let price = Math.round(item.price.total * 90)

          return (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition duration-300"
            >

              {/* Top Section */}
              <div className="flex justify-between items-center">

                {/* Airline */}
                <div>
                  <p className="font-semibold text-lg">{airline}</p>
                  <p className="text-sm text-gray-500">
                    Seats left: {item.numberOfBookableSeats}
                  </p>
                </div>

                {/* Price */}
                <div className="text-right">
                  <p className="text-xl font-bold text-green-600">
                    ₹ {price}
                  </p>
                  <p className="text-xs text-gray-400">per person</p>
                </div>

              </div>

              {/* Middle Section */}
              <div className="flex justify-between items-center mt-4">

                {/* Departure */}
                <div>
                  <p className="text-lg font-bold">
                    {segment.departure.iataCode}
                  </p>
                  <p className="text-sm">
                    {depTime.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                {/* Flight Path */}
                <div className="flex flex-col items-center text-gray-500">
                  <span>✈️</span>
                  <span className="text-xs">
                    {item.itineraries[0].duration}
                  </span>
                  <span className="text-xs">
                    {item.itineraries[0].segments.length - 1} Stops
                  </span>
                </div>

                {/* Arrival */}
                <div className="text-right">
                  <p className="text-lg font-bold">
                    {segment.arrival.iataCode}
                  </p>
                  <p className="text-sm">
                    {arrTime.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

              </div>

              {/* Bottom Section */}
              <div className="mt-5 flex justify-between items-center">

                <p className="text-sm text-gray-500">
                  Last Ticket Date: {item.lastTicketingDate}
                </p>

                <button className="bg-amber-400 hover:bg-amber-500 px-5 py-2 rounded-lg font-semibold transition">
                  Book Now
                </button>

              </div>

            </div>
          )
        })}
      </div>

    </div>
  )
}