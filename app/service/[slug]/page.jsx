import React from 'react'
import Content from './Content'
import servicesData from "@/app/data.json"

export async function generateMetadata({ params }) {
    const { slug } = await params
    const data = servicesData.find(e => e.slug === slug)

    if (!data) {
        return {
            title: 'A Mechanical Repairs',
            description: 'Trusted automotive services and roadside assistance.',
        }
    }

    return {
        title: `${data.title} • A Mechanical Repairs`,
        description: `${data.description.slice(0, 200)}...`,
        openGraph: {
            title: `${data.title} • A Mechanical Repairs`,
            description: data.description,
            images: [
                {
                    url: `https://amechanical.vercel.app/${data.slug}.jpeg`,
                    width: 1200,
                    height: 630,
                    alt: data.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${data.title} • A Mechanical Repairs`,
            description: data.description,
            images: [`https://amechanical.vercel.app/${data.slug}.jpeg`],
        },
    }
}

const page = () => {
    return <Content />
}

export default page