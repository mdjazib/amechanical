import Services from '@/components/Services'
import { ChevronsRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const metadata = {
    title: 'Road Side Assistance • A Mechanical Repairs',
    description:
        'Stuck on the road? A Mechanical Repairs provides fast and reliable roadside assistance services to get you moving again with peace of mind.',
}

const page = () => {
    return (
        <>
            <div className="road-side-assitance">
                <div className="banner">
                    <div className="overlay">
                        <div className="breadcrumb">
                            <Link href="/">Home</Link><ChevronsRight /><div className="active">Road Side Assitance</div>
                        </div>
                    </div>
                    <Image src="/road.jpg" width={1800} height={800} alt='road-side-assitance' />
                </div>
                <div className="content">
                    <div className="center">
                        <h2>Road Side Assistance</h2>
                        <p>
                            Getting stuck on the road is never planned — but with <strong>A Mechanical Repair</strong>, help is always just a call away.
                            Whether it’s a flat tire, dead battery, or engine trouble, our dedicated roadside assistance team is ready to get you back on
                            the move quickly and safely. We operate with speed, care, and professionalism so you can have peace of mind no matter where
                            the road takes you.
                        </p>

                        <p>
                            Our roadside service isn’t just about towing — it’s about solving your problem on the spot whenever possible.
                            We bring the right tools, knowledge, and commitment to keep you going without unnecessary delays.
                        </p>

                        <h3>Our Roadside Assistance Covers:</h3>
                        <ol>
                            <li>🔧 Flat tire change & tire replacement support</li>
                            <li>🔋 Jump-start service for dead batteries</li>
                            <li>⛽ Emergency fuel delivery</li>
                            <li>🔑 Lockout assistance (car door unlocking)</li>
                            <li>🚗 On-the-spot minor mechanical repairs</li>
                            <li>🛠️ Towing to our workshop if repair is not possible on-site</li>
                            <li>📞 7 days a week, customer support for immediate help</li>
                        </ol>

                        <p>
                            No matter the time, no matter the place — <strong>A Mechanical Repair</strong> has your back.
                            Drive with confidence knowing our expert team is just a call away to provide fast, affordable, and
                            dependable roadside assistance.
                        </p>

                        <h3>Contact us:</h3>
                        <ul>
                            <li>Malik: <a href="tel:+61406257932" target='_blank'>0406 257 932</a></li>
                            <li>Raza: <a href="tel:+61421640653" target='_blank'>0421 640 653</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page