"use client"
import { AlignJustify, ArrowRight, Clock4, MapPin, Phone, Star, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Marquee from "react-fast-marquee"
import { usePathname } from 'next/navigation'
import Logo from '@/app/Logo'

const Header = () => {
  const pathname = usePathname();
  const [menu, setMenu] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="col">
          <div className="clg"><MapPin /> <span>47, Wodonga Street, Beverly, SA 5009</span></div>
          <div className="clg"><Clock4 /> <span>Mon - Fri : 09.00 AM - 05.00 PM</span></div>
        </div>
        <div className="col">
          <div className="clg"><Phone /><a href="https://wa.me/+61406257932" target='_blank'>0406 257 932</a></div>
          <div className="clg"><Phone /><a href="https://wa.me/+61421640653" target='_blank' >0421 640 653</a></div>
          <div className="stars">
            <div className="group">
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </div>
            <p>4.5+ Rating on google</p>
          </div>
        </div>
      </div>
      <header>
        <div className="col">
          <Link className='logo-link' href="/">
            <Logo />
            <div className="text">
              <h2>A Mechanical Repairs</h2>
              <p>Precision, Performance, Perfection.</p>
            </div>
          </Link>
        </div>
        <div className={`menu ${menu && "-mobile-open"}`}>
          <ul>
            <li onClick={() => { setMenu(false) }}><Link href="/" className={pathname === "/" ? "active" : "inactive"}>Home</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/road-side-assistance" className={pathname === "/road-side-assistance" ? "active" : "inactive"}>Road Side Assistance</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/about" className={pathname === "/about" ? "active" : "inactive"}>About</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/packages" className={pathname === "/packages" ? "active" : "inactive"}>Packages</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/services" className={pathname === "/services" ? "active" : "inactive"}>Services</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/contact" className={pathname === "/contact" ? "active" : "inactive"}>Contact</Link></li>
          </ul>
          <Link href="tel:+61406257932" target='_blank' className="quote">
            <span>Get a quote</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="mobmenu" onClick={() => { setMenu(!menu) }}>
          {menu ? <X /> : <AlignJustify />}
        </div>
      </header>
      <Marquee>
        🔧 A Mechanical Car Repair — fast, honest & reliable • ✉️ Email: a.mechanicrepair@gmail.com • <Phone className='svg' /> Malik: <b>0406 257 932</b> • <Phone className='svg' /> Raza: <b>0421 640 653</b> • 📍 47, Wodonga Street, Beverly, SA 5009 • 💬 “We fix it right — the first time.” • 🏁 Same-day service on most jobs
      </Marquee>
    </>
  )
}

export default Header