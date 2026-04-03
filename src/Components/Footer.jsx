import { Copyright, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import { FaEnvelope, FaWhatsapp } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-r from-yellow-700 via-yellow-600 to-yellow-800 text-white">

            {/* Top Section */}
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                {/* Brand */}
                <div>
                    <NavLink
                        to="/"
                        className="text-2xl font-bold tracking-wide hover:scale-105 transition text-center"
                    >
                        Global Travel
                    </NavLink>

                    <p className="mt-4 text-sm leading-relaxed text-white/90">
                        <b>Global Travel</b> ek trusted aur modern travel platform hai jo
                        aapke safar ko easy, smooth aur memorable banata hai. Flights,
                        hotels, cruise aur holiday packages sab ek jagah.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">
                        Quick Links
                    </h2>
                    <div className="space-y-2 text-sm">
                        {["Home", "Blogs", "Flights", "Cars", "Hotels", "Cruise", "Packages"].map((item, i) => (
                            <NavLink key={i} className="block hover:text-black transition">
                                {item}
                            </NavLink>
                        ))}
                    </div>
                </div>

                {/* Support */}
                <div>
                    <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-3">
                        Supports
                    </h2>
                    <div className="space-y-2 text-sm">
                        <NavLink to="/about-us" className="block hover:text-black">About</NavLink>
                        <NavLink to="/privacy-policy" className="block hover:text-black">Privacy Policy</NavLink>
                        <NavLink to="/terms-conditions" className="block hover:text-black">Terms & Conditions</NavLink>
                        <NavLink to="/refund-policy" className="block hover:text-black">Refund Policy</NavLink>
                        <NavLink to="/contact-us" className="block hover:text-black">Contact Us</NavLink>
                        <NavLink to="/disclaimer" className="block hover:text-black">Disclaimer</NavLink>
                        <NavLink to="/services" className="block hover:text-black">Services</NavLink>
                    </div>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-lg font-semibold border-b border-white/30 pb-2 mb-4">
                        Contact Us
                    </h2>

                    <div className="space-y-4 text-sm">

                        <div className="flex gap-3 items-start">
                            <MapPin size={20} />
                            <p className="text-white/90">
                                A-16 17662 Irvine Blvd, Suite 9, Tustin, CA 92780
                            </p>
                        </div>

                        <div className="flex gap-3 items-center">
                            <FaEnvelope size={16} />
                            <NavLink to="mailto:support@gmail.com" className="hover:text-black">
                                support@gmail.com
                            </NavLink>
                        </div>

                        <div className="flex gap-3 items-center">
                            <PhoneCall size={18} />
                            <NavLink to="tel:9155014125" className="hover:text-black">
                                +91 91550 14125
                            </NavLink>
                        </div>

                    </div>
                </div>

            </div>

            {/* Bottom Section */}
            <div className="border-t border-white/20">
                <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">

                    {/* Links */}
                    <div className="flex flex-wrap justify-center gap-4">
                        <NavLink to={'/terms-conditions'} className="hover:text-black">Terms</NavLink>
                        <NavLink to={'/privacy-policy'} className="hover:text-black">Privacy</NavLink>
                        <NavLink to={'/refund-policy'} className="hover:text-black">Refund</NavLink>
                        <NavLink to={'/disclaimer'} className="hover:text-black">Disclaimer</NavLink>
                    </div>

                    {/* Copyright */}
                    <div className="flex items-center gap-2">
                        <Copyright size={16} />
                        <span>2026 Global Travel LLC. All Rights Reserved</span>
                    </div>

                </div>
            </div>
            <div className="fixed bottom-6 right-6 z-50">

                <div className="relative flex items-center justify-center">

                    <span className="absolute w-14 h-14 rounded-full bg-green-500/40 animate-ping"></span>


                    <NavLink
                        to="https://wa.me/9155014125"
                        target="_blank"
                        className="relative z-10 w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg hover:scale-110 transition"
                    >
                        <FaWhatsapp className="text-3xl text-white" />
                    </NavLink>

                </div>

            </div>
        </footer>

    );
}