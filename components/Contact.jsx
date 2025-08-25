"use client"
import { Mailbox } from 'lucide-react'
import React, { useState } from 'react'

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        rego: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const phone = "+61406257932";
        const text = `Hello, my name is ${form.name}.
Email: ${form.email}
Rego: ${form.rego}
Message: ${form.message}`;
        const url = `https://wa.me/${phone.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");
    };

    return (
        <div className="contact-us">
            <div className="center">
                <div className="col">
                    <p className='heading' ><Mailbox /><span>Contact with us</span></p>
                    <h2>Have <span>Questions?</span> Get in Touch for Expert Advice here!</h2>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!4v1755866281216!6m8!1m7!1s67roZyQr1ukDC0RHjepzxw!2m2!1d-34.89428566977944!2d138.5425572326003!3f91.89065858179245!4f-3.9800837377332385!5f1.6909548670592196"
                        width="600"
                        height="370"
                        style={{ border: "0px" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                <div className="col">
                    <form onSubmit={handleSubmit}>
                        <div className="input">
                            <p>Name</p>
                            <input
                                type="text"
                                name="name"
                                placeholder='Enter Full Name'
                                value={form.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input">
                            <p>Email</p>
                            <input
                                type="email"
                                name="email"
                                placeholder='Enter Email Address'
                                value={form.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input">
                            <p>REGO</p>
                            <input
                                type="text"
                                name="rego"
                                placeholder='Enter REGO'
                                value={form.rego}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="input">
                            <p>Message</p>
                            <textarea
                                name="message"
                                placeholder='Type Here...'
                                value={form.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <input type="submit" value="Send via WhatsApp" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
