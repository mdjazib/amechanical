"use client"
import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Image from 'next/image'
import Link from 'next/link'
import About from '@/components/About'

const page = () => {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false
  };
  return (
    <div>
      <Slider {...settings}>
        <div>
          <div className="overlay">
            <p>Trusted Car Experts</p>
            <h2>Reliable Mechanical Repairs You Can Count On</h2>
            <p>From logbook servicing to complex mechanical issues, we provide expert care to keep your car running smoothly and safely.</p>
            <Link href="/contact">Book Appointment</Link>
          </div>
          <Image src="/slider (1).jpeg" alt="Car repair service" width={1200} height={600} />
        </div>
        <div>
          <div className="overlay">
            <p>Best Services</p>
            <h2>Quality Repairs with Honest Pricing</h2>
            <p>No hidden costs, no shortcuts. Just professional repairs, fair pricing, and peace of mind every time you visit.</p>
            <Link href="/contact">Book Appointment</Link>
          </div>
          <Image src="/slider (2).jpeg" alt="Workshop service" width={1200} height={600} />
        </div>
        <div>
          <div className="overlay">
            <p>Fast & Reliable</p>
            <h2>Get Back on the Road — Same Day Service</h2>
            <p>Our skilled team ensures efficient diagnostics and repairs so you spend less time waiting and more time driving.</p>
            <Link href="/contact">Book Appointment</Link>
          </div>
          <Image src="/slider (3).jpeg" alt="Car maintenance" width={1200} height={600} />
        </div>
      </Slider>
      <About />
    </div>
  )
}

export default page