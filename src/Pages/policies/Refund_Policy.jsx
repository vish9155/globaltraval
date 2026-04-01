import React from "react";

export default function RefundPolicy() {
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
              Refund Policy
            </h1>

            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7">
              At Global Travel, we strive to provide a smooth and transparent booking experience. This Refund Policy outlines how cancellations and refunds are handled across flights, hotels, car rentals, and cruise bookings made through our platform.
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
              <h2 className="text-xl font-bold">1. Cancellation Policy</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                All bookings made through Global Travel are subject to cancellation policies of the respective service providers including airlines, hotels, car rental companies, and cruise operators. Cancellation eligibility, fees, and timelines vary depending on the selected service and fare type at the time of booking.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">2. Refund Eligibility</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Refund eligibility depends on the provider’s terms and conditions. Some bookings may be non-refundable, while others may allow partial or full refunds based on cancellation timing. Users are advised to review cancellation rules before confirming any booking.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">3. Refund Processing Time</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Once a refund request is approved, the processing time typically ranges from 5 to 10 business days. However, the final timeline may vary depending on banks, payment gateways, and service providers involved in the transaction.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">4. Non-Refundable Charges</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Certain charges such as convenience fees, service fees, and transaction charges are generally non-refundable. These charges may be deducted from the refund amount even if the booking is eligible for cancellation.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">5. Provider-Based Policies</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                Since Global Travel acts as an intermediary, refund decisions are governed by third-party providers. In case of flight cancellations by airlines or service disruptions, customers may be eligible for full refunds or rebooking options as per provider rules.
              </p>
            </div>

            <div className="bg-white border rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-bold">6. Special Cases</h2>
              <p className="mt-3 text-gray-600 text-sm leading-7">
                In exceptional situations such as natural disasters, medical emergencies, or government restrictions, refund decisions may be handled differently depending on service providers. We recommend contacting our support team for assistance in such cases.
              </p>
            </div>

          </div>

          {/* Right */}
          <div className="space-y-6">

            <div className="bg-white border border-yellow-200 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Contact Support</h3>
              <p className="text-sm text-gray-600 mt-2">
                For refund requests or queries, contact our support team:
              </p>

              <div className="mt-4 space-y-3 text-sm">
                <p><b>Email:</b> support@globaltravel.com</p>
                <p><b>Phone:</b> +91 98765 43210</p>
                <p><b>Address:</b> Connaught Place, New Delhi, India</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-500 to-amber-500 text-white rounded-2xl p-6 shadow-lg">
              <h3 className="font-bold text-lg">Important Note</h3>
              <p className="mt-2 text-sm">
                Refund policies may vary depending on the service provider. Always review terms before booking to avoid unexpected charges.
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}