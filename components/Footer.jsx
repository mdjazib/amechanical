"use client"
import { ChevronRight, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect } from 'react'
import Socials from './Socials'
import { usePathname } from 'next/navigation'
import servicesData from "@/app/data.json"
import { useStore } from '@/useStore'

const Footer = () => {
    const pathname = usePathname();
    const { setData } = useStore();
    const data = servicesData.map(e => { return { title: e.title, slug: e.slug } }).slice(0, 7);
    useEffect(() => { setData(servicesData) }, []);
    return (
        <footer>
            <div className="grid">
                <div className="col">
                    <h2>Address</h2>
                    <ul>
                        <li><MapPin /> <a href="https://www.google.com/maps/@-34.8942857,138.5425572,0a,49.8y,91.89h,86.02t/data=!3m4!1e1!3m2!1s67roZyQr1ukDC0RHjepzxw!2e0?source=apiv3" target='_blank'>47, Wodonga Street, Beverly, SA 5009</a></li>
                        <li><Phone /> <a href="https://wa.me/+61406257932" target='_blank'>0406 257 932</a><a href="https://wa.me/+61421640653" target='_blank'>0421 640 653</a></li>
                        <li><Mail /> <a href="mailto:a.mechanicrepair@gmail.com" target='_blank'>a.mechanicrepair@gmail.com</a></li>
                        <li><Socials /></li>
                    </ul>
                </div>
                <div className="col">
                    <h2>Working Hours</h2>
                    <ul>
                        <li className="y"><b>Monday - Friday:</b> <span>09.00 AM - 05.00 PM</span></li>
                        <li className="y"><b>Saturday:</b> <span>09.00 AM - 3.00 PM</span></li>
                        <li className="y"><b>Sunday:</b> <span>10.00 AM - 3.00 PM</span></li>
                        <li className="y"><b>Saturday and Sunday:</b> <span>Booking person only</span></li>
                        <li className="y"><span>Open on public holidays</span></li>
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
                        <li><ChevronRight /> <Link href="/road-side-assistance" className={pathname === "/road-side-assistance" ? "active" : "inactive"}>Road Side Assistance</Link></li>
                        <li><ChevronRight /> <Link href="/about" className={pathname === "/about" ? "active" : "inactive"}>About</Link></li>
                        <li><ChevronRight /> <Link href="/packages" className={pathname === "/packages" ? "active" : "inactive"}>Packages</Link></li>
                        <li><ChevronRight /> <Link href="/services" className={pathname === "/services" ? "active" : "inactive"}>Services</Link></li>
                        <li><ChevronRight /> <Link href="/contact" className={pathname === "/contact" ? "active" : "inactive"}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer