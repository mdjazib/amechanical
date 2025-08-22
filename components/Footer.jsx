"use client"
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Socials from './Socials'
import { usePathname } from 'next/navigation'
import servicesData from "@/app/data.json"
import { useStore } from '@/useStore'

const Footer = () => {
    const pathname = usePathname();
    const { setData } = useStore();
    const data = servicesData.map(e => { return { title: e.title, slug: e.slug } }).slice(0, 4);
    useEffect(() => { setData(servicesData) }, []);
    return (
        <footer>
            <div className="grid">
                <div className="col">
                    <h2>Address</h2>
                    <ul>
                        <li><MapPin /> <a href="#">47, Wodonga Street, Beverly, SA 5009</a></li>
                        <li><Phone /> <a href="#">+61 406 257932</a><a href="#">+61 469 867126</a></li>
                        <li><Mail /> <a href="#">a.mechanicrepair@gmail.com</a></li>
                        <li><Socials /></li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Opening Hours</h2>
                    <ul>
                        <li className="y"><b>Monday - Friday:</b> <span>09.00 AM - 09.00 PM</span></li>
                        <li className="y"><b>Saturday - Sunday:</b> <span>09.00 AM - 12.00 PM</span></li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Services</h2>
                    <ul>
                        {
                            data.map((e, i) => (
                                <li key={i}><ChevronRight /> <Link href={`/service/${e.slug}`} className={pathname === `/service/${e.slug}` ? "active" : "inactive"}>{e.title}</Link></li>
                            ))
                        }
                        <li><ChevronRight /> <Link href="/services">More Services</Link></li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Pages</h2>
                    <ul>
                        <li><ChevronRight /> <Link href="/" className={pathname === "/" ? "active" : "inactive"}>Home</Link></li>
                        <li><ChevronRight /> <Link href="/about" className={pathname === "/about" ? "active" : "inactive"}>About</Link></li>
                        <li><ChevronRight /> <Link href="/services" className={pathname === "/services" ? "active" : "inactive"}>Services</Link></li>
                        <li><ChevronRight /> <Link href="/contact" className={pathname === "/contact" ? "active" : "inactive"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer