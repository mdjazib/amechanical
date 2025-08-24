"use client"
import { useStore } from '@/useStore'
import { Asterisk, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt'

const Services = ({ slug = "", title = "Our Services" }) => {
    const { data: servicesData } = useStore();
    const [data, setData] = useState(servicesData);
    useEffect(() => {
        setData(slug === "" ? servicesData : servicesData.filter(e => e.slug !== slug));
    }, [servicesData, slug]);
    return (
        <div className="our-services">
            <div className="header">
                <p><Asterisk /><span>Quality & Affordable</span><Asterisk /></p>
                <h1>{title}</h1>
                <p>Your car deserves the best care — and that’s exactly what we deliver.</p>
            </div>
            <div className="services">
                {
                    data.map((e, i) => (
                        <Link href={`/service/${e.slug}`} key={i} className="service">
                            <Tilt
                                glareEnable={true}
                                glareMaxOpacity={0.4}
                                transitionSpeed={2500}
                                tiltMaxAngleX={6}
                                tiltMaxAngleY={6}
                                perspective={500}
                            >
                                <Image src={`/${e.slug}.jpeg`} width={300} height={300} alt={e.slug} />
                                <h3>{e.title}</h3>
                                <p>{e.description.slice(0, 80)}...</p>
                                <div className="more"><span>Read more</span><ChevronRight /></div>
                            </Tilt>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default Services