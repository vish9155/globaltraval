import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [mobile, setMobile] = useState(false);

  let navbar = [
    { title: "Home", path: "/" },
    { title: "Flights", path: "/flights" },
    { title: "Hotels", path: "/hotels" },
    { title: "Cruise", path: "/cruise" },
    { title: "Packages", path: "/packages" },
    { title: "About Us", path: "/about-us" },
  ];

  return (
    <section className="w-full  z-50 backdrop-blur-md bg-yellow-300 text-white shadow-lg">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 h-20">
        
        <NavLink
          to="/"
          className="text-2xl font-bold tracking-wide hover:scale-105 transition"
        >
           Global Travel
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          {navbar.map((item, id) => (
            <NavLink
              key={id}
              to={item.path}
              className={({ isActive }) =>
                `relative font-medium transition duration-300 ${
                  isActive ? "text-black" : "text-white"
                } hover:text-black`
              }
            >
              {item.title}

              
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}

         
          <NavLink
            to="/booking"
            className="bg-yellow-600 hover:bg-yellow-700 px-6 py-2 rounded-full font-semibold transition duration-300 shadow-md hover:scale-105"
          >
            Book Now
          </NavLink>
        </div>

      
        <button
          className="md:hidden"
          onClick={() => setMobile(!mobile)}
        >
          {mobile ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

     
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          mobile ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-5 px-6 py-5 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black">
          
          {navbar.map((item, id) => (
            <NavLink
              key={id}
              to={item.path}
              onClick={() => setMobile(false)}
              className="text-lg font-medium hover:translate-x-2 transition duration-300"
            >
              {item.title}
            </NavLink>
          ))}

          <NavLink
            to="/"
            className="bg-yellow-600 text-white text-center py-2 rounded-full font-semibold mt-2"
          >
            Book Now
          </NavLink>
        </div>
      </div>
    </section>
  );
}