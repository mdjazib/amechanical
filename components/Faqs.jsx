"use client";
import { PlusCircle, MinusCircle } from "lucide-react";
import { useState } from "react";

const faqsData = [
    {
        question: "Do you provide mobile car repair services?",
        answer:
            "Yes, we offer mobile car and tow truck services. Whether you’re stuck on the road or at home, our team can come to you for assistance."
    },
    {
        question: "How often should I get my brakes checked?",
        answer:
            "It’s recommended to have your brakes inspected every 6 months or at least once a year, depending on how often you drive."
    },
    {
        question: "Do you offer car wash and detailing?",
        answer:
            "Yes, we provide professional car wash and detailing to keep your vehicle looking fresh inside and out."
    },
    {
        question: "Can I book an appointment for AC servicing?",
        answer:
            "Absolutely! We provide AC servicing to keep your car cool during hot days. You can book via phone or email."
    },
    {
        question: "What’s your workshop address?",
        answer:
            `Our workshop is located at 47, Wodonga Street, Beverly, SA 5009. You can also reach us at 0406 257 932 / 0421 640 653 or email us at a.mechanicrepair@gmail.com.`
    }
];

const Faqs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="faqs">
            <div className="header">
                <p>Have queries in mind?</p>
                <h2>FAQ's</h2>
            </div>

            {faqsData.map((faq, index) => (
                <div
                    key={index}
                    className={`question`}
                    onClick={() => toggleFAQ(index)}
                >
                    <div className="header">
                        <h3>{faq.question}</h3>
                        {openIndex === index ? <MinusCircle /> : <PlusCircle />}
                    </div>
                    {openIndex === index && (
                        <div className="answer">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Faqs;
