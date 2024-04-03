'use client'
import React,{ useEffect } from 'react'
import AOS from 'aos';
import '@/app/page.module.css'
import '@/app/booking.css'
import '@/app/embala.css'
import 'aos/dist/aos.css';
import '@/app/globals.css'
import '@/app/IdealBankSectionStyles.css'
import '@/app/responsive.css'
import '@/app/styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import MainMenu from '../header/MainMenu'
const Heder = ({title,image}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <header id="header" className="vh-80">
      <MainMenu isSlider={ true } />
      <div id={`${image || "aboutHeader"}`} className="d-flex vh-80">
        <div className="m-auto text-white text-center">
          <h1 className="font-weight-600 h1 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700" data-aos-duration="750"  >{ title || "About Us" }</h1>
        </div>
      </div>
    </header>
  )
}

export default Heder