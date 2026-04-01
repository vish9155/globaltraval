import React from "react";

export default function TermsConditions() {
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
              Terms & Conditions
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              Welcome to Global Travel. By accessing and using our platform, you agree to comply with the following terms and conditions. These terms govern your use of our services including flight bookings, hotel reservations, car rentals, and cruise bookings.
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
              <h2 className="text-xl font-bold">1. Acceptance of Terms</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                By using Global Travel, you confirm that you have read, understood, and agreed to these terms. If you do not agree, you should not use our services.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2. Booking and Payments</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                All bookings are subject to availability and confirmation from third-party providers. You agree to provide accurate details while booking and complete payment using secure methods. Prices may change based on availability and demand.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3. User Responsibilities</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Users are responsible for providing correct personal information, travel documents, and complying with visa, passport, and local travel regulations. Any errors may lead to booking issues or cancellations.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Changes and Cancellations</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Changes and cancellations are governed by the policies of airlines, hotels, and other service providers. Additional charges may apply based on fare rules and timing of the request.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5. Third-Party Services</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Global Travel acts as an intermediary between users and service providers. We are not responsible for delays, cancellations, or service changes made by third parties.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. Limitation of Liability</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Global Travel shall not be liable for any direct or indirect damages, losses, or inconveniences caused due to service disruptions, delays, or external factors beyond our control.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">7. Policy Updates</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                We reserve the right to update or modify these terms at any time. Continued use of our platform indicates acceptance of updated terms.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Information</h3>
              <p className="text-sm text-gray-600 mt-2">
                For any queries related to terms and conditions, contact us:
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
                By continuing to use our services, you agree to follow all applicable travel rules, regulations, and provider-specific policies.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}