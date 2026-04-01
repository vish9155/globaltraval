import React from "react";

export default function Disclaimer() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4">
        
        {/* Header */}
        <div className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-amber-500/10"></div>

          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <p className="inline-block bg-yellow-100 text-yellow-800 text-xs font-semibold px-4 py-1 rounded-full">
              Global Travel Legal
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-gray-900">
              Disclaimer
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              Global Travel provides travel-related services including flights, hotels, car rentals, and cruise bookings through trusted third-party partners. This disclaimer outlines the limitations of our responsibility and the scope of services provided through our platform.
            </p>

            <div className="mt-5 flex gap-3 flex-wrap text-sm">
              <span className="bg-gray-100 px-4 py-2 rounded-full">Effective Date: 31 March 2026</span>
              <span className="bg-gray-100 px-4 py-2 rounded-full">Last Updated: 31 March 2026</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid lg:grid-cols-3 gap-6">
          
          {/* Left */}
          <div className="lg:col-span-2 space-y-6">

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">1. General Information</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                All information provided on Global Travel is for general informational purposes only. While we strive to keep all details accurate and updated, we do not guarantee completeness, reliability, or accuracy of the information available on our platform.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2. Third-Party Services</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Global Travel acts as an intermediary between users and third-party service providers such as airlines, hotels, car rental companies, and cruise operators. We are not responsible for the quality, availability, or performance of services provided by these external partners.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3. Pricing and Availability</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Prices and availability of travel services are subject to change without prior notice. We do not guarantee that displayed prices will remain valid at the time of booking due to dynamic pricing by service providers.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Travel Risks</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Travel involves inherent risks including delays, cancellations, weather conditions, and other unforeseen events. Global Travel is not liable for any disruptions or losses caused by such factors beyond our control.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5. No Warranty</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                We do not provide any warranties regarding uninterrupted access, error-free services, or guaranteed outcomes. Users access and use our platform at their own risk.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Global Travel shall not be held liable for any direct, indirect, or incidental damages arising from the use of our services, including booking errors, cancellations, or service failures by third-party providers.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                If you have any questions regarding this disclaimer, please contact us:
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p><b>Email:</b> support@globaltravel.com</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Address:</b> Connaught Place, New Delhi, India</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg">Important Notice</h3>
              <p className="mt-2 text-sm">
                By using Global Travel, you acknowledge that you understand and agree to this disclaimer and accept all associated risks.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}