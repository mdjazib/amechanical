"use client"
import React, { useEffect, useState } from 'react'
import servicesData from "@/app/data.json"
import { useParams } from 'next/navigation'
import Link from 'next/link'
const Content = () => {
    const { slug } = useParams();
    const [data, setData] = useState(servicesData);
    const [service, setService] = useState({ title: "", description: "" });
    useEffect(() => {
        setService(...data.filter(e => e.slug === slug));
    }, []);
    return (
        <div>
            {
                data.map((e, i) => (
                    <Link key={i} href={`/service/${e.slug}`} className={slug === e.slug ? "active" : "inactive"}>{e.title}</Link>
                ))
            }
            <h1>{service.title}</h1>
            <p>{service.description}</p>
        </div>
    )
}

export default Content