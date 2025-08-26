import { Facebook, Instagram, Mail, Twitter } from 'lucide-react'
import React from 'react'

const Socials = () => {
    return (
        <div className="social">
            <a href="#"><Instagram /></a>
            <a href="#"><Facebook /></a>
            <a href="#"><svg viewBox="0 0 256 256" fill="none" stroke="currentColor" strokeWidth="16"><path d="M168 40c0 26 21 48 48 48v32c-21 0-41-7-56-19v75c0 36-30 66-66 66s-66-30-66-66 30-66 66-66v32c-19 0-34 15-34 34s15 34 34 34 34-15 34-34V40h40z" /></svg></a>
            <a href="mailto:a.mechanicrepair@gmail.com" target='_blank'><Mail /></a>
        </div>
    )
}

export default Socials