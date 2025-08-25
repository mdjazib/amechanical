import Packages from '@/components/Packages'
import Services from '@/components/Services'
import React from 'react'

export const metadata = {
    title: 'Our Services • A Mechanical Repairs',
    description:
        'Explore the wide range of car repair services offered by A Mechanical Repairs, including logbook servicing, brakes, suspensions, tyres, diagnostics, and more.',
}

const page = () => {
    return (
        <>
            <Services />
            <Packages />
        </>
    )
}

export default page