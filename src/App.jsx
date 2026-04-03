import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import Loader from './Components/Loader'
import Marquee from './Components/Marquee'


export default function App() {
  let [loading, setLoading] = useState(true)
  let About = lazy(() => import('./Pages/AboutPage'))
  let PrivacyPolicy = lazy(() => import('./Pages/policies/Privacy_Policy'))
  let TermCondition = lazy(() => import('./Pages/policies/Terms_Conditions'))
  let RefundPolicy = lazy(() => import('./Pages/policies/Refund_Policy'))
  let Disclaimers = lazy(() => import('./Pages/policies/Disclaimers'))
  let Contact = lazy(() => import('./Components/ContactUs'))
 let Flights = lazy(() => import('./Components/Flights'))
 let Hotels = lazy(() => import('./Components/Hotels'))
  let Cars = lazy(() => import('./Components/Car'))
  let Package=lazy(() => import('./Components/Packages'))
  let Services = lazy(() => import('./Components/OurServices'))
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
    let timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  if (loading) return <Loader />

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={Loader}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='/about-us' element={<About />} />
            <Route path='/terms-conditions' element={<TermCondition />} />
            <Route path='/privacy-policy' element={<PrivacyPolicy />} />
            <Route path='/refund-policy' element={<RefundPolicy />} />
            <Route path='/disclaimer' element={<Disclaimers />} />
            <Route path='/flights' element={<Flights />} />
           <Route path='/hotels' element={<Hotels />} />
           <Route path='/cars' element={<Cars />} />
            <Route path='/packages' element={<Package />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </Suspense>
        {/* <Marquee /> */}
        <Footer />
      </BrowserRouter>
    </>
  )
}
