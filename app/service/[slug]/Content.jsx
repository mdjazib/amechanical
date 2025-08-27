"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useStore } from '@/useStore'
import Image from 'next/image'
import Services from '@/components/Services'
const Content = () => {
    const { data: servicesData } = useStore();
    const { slug } = useParams();
    const [data, setData] = useState(servicesData);
    const [service, setService] = useState({ title: "", description: "" });
    useEffect(() => {
        setData(servicesData);
    }, [servicesData])
    useEffect(() => {
        setService(...data.filter(e => e.slug === slug));
    }, [data]);
    return (
        <>
            <div className='service-details'>
                <div className="xflow">
                    {
                        data.map((e, i) => (
                            <Link key={i} href={`/service/${e.slug}`} className={slug === e.slug ? "active" : "inactive"}>{e.title}</Link>
                        ))
                    }
                </div>
                <div className="gap">
                    <div className="details">
                        <Image src={`/${service?.slug}.jpeg`} width={1000} height={600} alt={service?.slug} />
                        <div className="content">
                            <h1>{service?.title}</h1>
                            <p dangerouslySetInnerHTML={{ __html: service?.description }} />
                        </div>
                    </div>
                </div>
            </div >
            <Services slug={slug} />
        </>
    )
}

export default Content