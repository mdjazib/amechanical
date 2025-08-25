import { Asterisk, Check } from 'lucide-react'
import React from 'react'

const Packages = () => {
    return (
        <div className='our-packages'>
            <div className="header">
                <p><Asterisk /><span>Service & Care</span><Asterisk /></p>
                <h1>Our Packages</h1>
                <p>From routine checkups to complete care — choose the right package to keep your car in top shape.</p>
            </div>
            <div className="packages">
                <div className="center">
                    <div className="package">
                        <div className="header">
                            <h1>01</h1>
                            <p>Standard</p>
                        </div>
                        <ul>
                            <li><Check /><span>Engine oil & filter change</span></li>
                            <li><Check /><span>Air filter cleaning</span></li>
                            <li><Check /><span>Basic brake inspection</span></li>
                            <li><Check /><span>Battery health check</span></li>
                            <li><Check /><span>Fluid top-up (coolant, washer, brake)</span></li>
                            <li><Check /><span>Tire pressure & tread depth check</span></li>
                            <li><Check /><span>Exterior lights inspection</span></li>
                            <li><Check /><span>Wiper blade condition check</span></li>
                        </ul>
                    </div>
                    <div className="package">
                        <div className="header">
                            <h1>02</h1>
                            <p>VIP</p>
                        </div>
                        <ul>
                            <li><Check /><span>Includes all Advanced services</span></li>
                            <li><Check /><span>Full brake service (pads, rotors, fluid)</span></li>
                            <li><Check /><span>Wheel alignment & balancing</span></li>
                            <li><Check /><span>Transmission fluid service</span></li>
                            <li><Check /><span>Detailed engine diagnostic & tune-up</span></li>
                            <li><Check /><span>Throttle body cleaning</span></li>
                            <li><Check /><span>Spark plugs check & replacement</span></li>
                            <li><Check /><span>Differential & driveline inspection</span></li>
                            <li><Check /><span>Suspension lubrication service</span></li>
                            <li><Check /><span>Complete underbody inspection</span></li>
                            <li><Check /><span>Air conditioning regas (if required)</span></li>
                            <li><Check /><span>Fuel injector cleaning</span></li>
                            <li><Check /><span>Detail wash & interior vacuum</span></li>
                            <li><Check /><span>Rust prevention spray</span></li>
                            <li><Check /><span>Priority same-day service</span></li>
                            <li><Check /><span>Free roadside assistance (3 months)</span></li>
                            <li><Check /><span>Complimentary pick-up & drop-off</span></li>
                        </ul>
                    </div>
                    <div className="package">
                        <div className="header">
                            <h1>03</h1>
                            <p>Advanced</p>
                        </div>
                        <ul>
                            <li><Check /><span>Includes all Standard services</span></li>
                            <li><Check /><span>Comprehensive brake check & adjustment</span></li>
                            <li><Check /><span>Suspension & steering system inspection</span></li>
                            <li><Check /><span>Cabin/air filter replacement</span></li>
                            <li><Check /><span>Computerized diagnostic scan</span></li>
                            <li><Check /><span>Exhaust system inspection</span></li>
                            <li><Check /><span>Cooling system pressure test</span></li>
                            <li><Check /><span>Belts & hoses check</span></li>
                            <li><Check /><span>Fuel system cleaning</span></li>
                            <li><Check /><span>AC system performance check</span></li>
                            <li><Check /><span>Battery terminals cleaning</span></li>
                            <li><Check /><span>Road test & performance feedback</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Packages
