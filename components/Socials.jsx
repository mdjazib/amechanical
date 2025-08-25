import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Socials = () => {
    return (
        <div className="social">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><Twitter /></a>
            <a href="mailto:a.mechanicrepair@gmail.com" target='_blank'><Mail /></a>
        </div>
    )
}

export default Socials