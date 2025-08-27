import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
    return (
        <div className="about-us">
            <div className="center">
                <div className="col">
                    <div className="img">
                        <div className="overlay"></div>
                        <div className="exp">
                            <h1>25 <sup>+</sup> <sub>Years</sub></h1>
                            <h2>Experience</h2>
                        </div>
                        <Image src="/about.jpeg" alt='About' width={500} height={500} />
                    </div>
                </div>
                <div className="col">
                    <p>// About Us //</p>
                    <h2>
                        <span>A Mechanical</span> Car Repair – caring for your car as if it were our own.
                    </h2>
                    <p>
                        At A Mechanical Car Repair, we believe your vehicle deserves expert attention and genuine care.
                        With years of hands-on experience, advanced tools, and a passion for automobiles,
                        we ensure every service is done with precision, honesty, and reliability.
                        From routine maintenance to complex repairs, our mission is to keep you safe and confident on the road.
                    </p>
                    <ul>
                        <li>
                            <div className="number">01</div>
                            <div className="col">
                                <b>Professional & Expert Team</b>
                                <p>
                                    Our certified mechanics bring skill and dedication to every repair,
                                    delivering quality service you can trust.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="number">02</div>
                            <div className="col">
                                <b>Trusted & Transparent Service</b>
                                <p>
                                    We explain the problem clearly, offer fair pricing, and keep you informed at every step
                                    — no hidden surprises.
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className="number">03</div>
                            <div className="col">
                                <b>Customer-Centered Approach</b>
                                <p>
                                    Your satisfaction is our priority. We treat every car with the same care and attention
                                    we would give to our own.
                                </p>
                            </div>
                        </li>
                    </ul>
                    <Link href="/about" className="button">
                        <span>Read more</span> <ArrowRight />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default About