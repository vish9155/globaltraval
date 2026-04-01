import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="bg-gradient-to-b from-yellow-50 via-white to-yellow-50 min-h-screen py-10 sm:py-14">
      <div className="max-w-5xl mx-auto px-4">
        {/* Hero */}
        <div className="relative overflow-hidden rounded-3xl border border-yellow-200 bg-white shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-amber-500/10"></div>

          <div className="relative px-6 py-10 sm:px-10 sm:py-14">
            <p className="inline-block rounded-full bg-yellow-100 text-yellow-800 text-xs sm:text-sm font-semibold px-4 py-1">
              Global Travel Legal
            </p>

            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm sm:text-base text-gray-600 max-w-3xl leading-7">
              At Global Travel, we value your trust and are committed to
              protecting your personal information. This Privacy Policy explains
              how we collect, use, store, and protect your data when you use our
              website, services, and booking platform for flights, hotels, car
              rentals, and cruise reservations.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-700">
                Effective Date: 31 March 2026
              </span>
              <span className="rounded-full bg-gray-100 px-4 py-2 text-gray-700">
                Last Updated: 31 March 2026
              </span>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left content */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                1. Information We Collect
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                When you use Global Travel, we may collect personal information
                such as your full name, email address, phone number, billing
                address, travel preferences, passport details where required,
                and payment-related information. We may also collect technical
                information such as your IP address, browser type, device
                information, and browsing activity on our platform to improve
                your user experience and platform performance.
              </p>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                This information may be collected when you make a booking,
                create an account, contact support, subscribe to updates, or
                interact with our website in any way.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                2. How We Use Your Information
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                We use your information to process bookings, confirm payments,
                send travel updates, provide customer support, and improve our
                services. Your data also helps us personalize your booking
                experience, recommend relevant travel options, and maintain the
                security of our platform.
              </p>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                In some cases, we may use your email or phone number to send
                booking confirmations, cancellation notices, itinerary details,
                security alerts, service-related updates, or promotional offers.
                You may opt out of promotional messages at any time.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                3. Sharing of Information
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                Global Travel does not sell your personal information. However,
                we may share necessary data with trusted third-party travel
                partners such as airlines, hotels, car rental providers, cruise
                operators, payment gateways, and verification service providers
                only to complete your booking and provide requested services.
              </p>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                We may also disclose information when required by law, legal
                process, fraud prevention measures, or to protect the rights,
                property, and safety of our users and business.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                4. Data Security
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                We use reasonable technical and organizational safeguards to
                protect your data from unauthorized access, misuse, loss, or
                disclosure. This includes secure servers, encrypted payment
                handling, and restricted access to sensitive information.
                Although we take strong precautions, no online platform can
                guarantee absolute security, so users should also take
                appropriate steps to protect their login credentials and devices.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                5. Cookies and Tracking
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                Our website may use cookies and similar technologies to improve
                functionality, remember preferences, analyze traffic, and
                deliver a smoother browsing experience. By continuing to use our
                website, you agree to the use of such technologies unless you
                disable them through your browser settings.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                6. Your Rights
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                You may request access to the personal information we hold about
                you, ask for corrections, request deletion where legally
                permitted, or contact us about any concerns regarding your data.
                We will respond within a reasonable timeframe in accordance with
                applicable laws and internal policies.
              </p>
            </div>

            <div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                7. Policy Updates
              </h2>
              <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
                Global Travel may update this Privacy Policy from time to time
                to reflect legal, operational, or service-related changes. Any
                updates will be posted on this page with the revised effective
                date. Continued use of our services after such updates means you
                accept the updated policy.
              </p>
            </div>
          </div>

          {/* Right sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl bg-white border border-yellow-200 shadow-sm p-6">
              <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
              <p className="mt-3 text-sm text-gray-600 leading-6">
                For privacy-related questions, data requests, or support, please
                contact Global Travel using the details below.
              </p>

              <div className="mt-5 space-y-4">
                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-xs text-gray-500">Email</p>
                  <p className="text-sm sm:text-base font-medium text-gray-800 break-all">
                    support@globaltravel.com
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-sm sm:text-base font-medium text-gray-800">
                    +91 98765 43210
                  </p>
                </div>

                <div className="rounded-xl bg-gray-50 p-4 border border-gray-200">
                  <p className="text-xs text-gray-500">Office Address</p>
                  <p className="text-sm sm:text-base font-medium text-gray-800 leading-6">
                    Global Travel Pvt. Ltd.
                    <br />
                    2nd Floor, Business Tower,
                    <br />
                    Connaught Place, New Delhi,
                    <br />
                    India - 110001
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-yellow-500 to-amber-500 text-white shadow-lg p-6">
              <h3 className="text-lg font-bold">Why your privacy matters</h3>
              <p className="mt-3 text-sm leading-6 text-white/90">
                We believe trust is essential in travel. From booking details to
                payment information, we handle your data carefully so you can
                focus on your journey with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}