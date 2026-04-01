import React, { lazy, Suspense, useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import HomePage from './Pages/HomePage'
import Loader from './Components/Loader'


export default function App() {
  let [loading, setLoading] = useState(true)
  let About = lazy(() => import('./Pages/AboutPage'))
  let PrivacyPolicy = lazy(() => import('./Pages/policies/Privacy_Policy'))
  let TermCondition = lazy(() => import('./Pages/policies/Terms_Conditions'))
  let RefundPolicy = lazy(() => import('./Pages/policies/Refund_Policy'))
  let Disclaimers = lazy(() => import('./Pages/policies/Disclaimers'))
  let Contact = lazy(() => import('./Components/ContactUs'))
  let Faq = lazy(() => import('./Components/Faq'))
  let Package=lazy(() => import('./Components/Packages'))
  let Services = lazy(() => import('./Components/OurServices'))
  useEffect(() => {
    // AOS.init({ duration: 1000, once: true });
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
            <Route path='/faq' element={<Faq />} />
            <Route path='/packages' element={<Package />} />
            <Route path='/services' element={<Services />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}
