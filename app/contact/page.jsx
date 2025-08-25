import Contact from '@/components/Contact'
import Packages from '@/components/Packages'
import React from 'react'

export const metadata = {
    title: 'Contact • A Mechanical Repairs',
    description:
        'Get in touch with A Mechanical Repairs today. Call, email, or visit us for expert car repair, servicing, and maintenance. Our team is ready to answer your queries.',
}

const page = () => {
    return (
        <>
            <Contact />
            <Packages />
        </>
    )
}

export default page