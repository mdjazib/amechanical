"use client"
import { AlignJustify, ArrowRight, Clock4, MapPin, Phone, X } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Marquee from "react-fast-marquee"
import Socials from './Socials'
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
          <div className="clg"><Phone /><a href="#" >+61 406 257932</a></div>
          <div className="clg"><Phone /><a href="#" >+61 469 867126</a></div>
          <Socials />
        </div>
      </div>
      <header>
        <div className="col">
          <Link href="/"><Logo /></Link>
        </div>
        <div className={`menu ${menu && "-mobile-open"}`}>
          <ul>
            <li onClick={() => { setMenu(false) }}><Link href="/" className={pathname === "/" ? "active" : "inactive"}>Home</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/about" className={pathname === "/about" ? "active" : "inactive"}>About</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/services" className={pathname === "/services" ? "active" : "inactive"}>Services</Link></li>
            <li onClick={() => { setMenu(false) }}><Link href="/contact" className={pathname === "/contact" ? "active" : "inactive"}>Contact</Link></li>
          </ul>
          <Link href="/contact" className="quote">
            <span>Get a quote</span>
            <ArrowRight />
          </Link>
        </div>
        <div className="mobmenu" onClick={() => { setMenu(!menu) }}>
          {menu ? <X /> : <AlignJustify />}
        </div>
      </header>
      <Marquee>
        🔧 A Mechanical Car Repair — fast, honest & reliable • ✉️ Email: a.mechanicrepair@gmail.com • 📞 Malik: +61 406 257 932 • 📞 Raza: +61 469 867 126 • 📍 47, Wodonga Street, Beverly, SA 5009 • 💬 “We fix it right — the first time.” • 🏁 Same-day service on most jobs
      </Marquee>
    </>
  )
}

export default Header