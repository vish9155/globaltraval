import React from "react";

export default function MissionVision() {
  return (
    <section className="bg-gradient-to-br from-yellow-700 via-yellow-900 to-yellow-800 text-white py-16 px-4">
      
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 tracking-wide">
          Our Mission & Vision
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Vision Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
               Our Vision
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              To become a globally trusted travel brand that transforms the way people 
              explore the world by delivering seamless, luxurious, and unforgettable 
              travel experiences. We envision a future where travel is not just a journey, 
              but a lifestyle—accessible, inspiring, and tailored to every individual.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-400">
               Our Mission
            </h3>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Our mission is to simplify travel while elevating every experience through 
              innovation, personalization, and exceptional service. We aim to provide our 
              customers with the best travel solutions—combining premium quality, 
              competitive pricing, and 24/7 support—so they can explore the world with 
              confidence, comfort, and peace of mind.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}