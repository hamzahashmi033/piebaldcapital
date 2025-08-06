'use client'
import React from 'react'
import Button from '../Button'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const ContactUs = () => {
    useGSAP(() => {
        // Animation timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".contact-container",
                start: "top 70%",
                end: "bottom 30%",
                toggleActions: "play none none none",
            }
        });

        // Left section animations
        tl.from(".contact-left", {
            duration: 1,
            x: -100,
            opacity: 0,
            ease: "power3.out"
        });

        // Right section animations
        tl.from(".contact-right", {
            duration: 1,
            x: 100,
            opacity: 0,
            ease: "power3.out"
        }, "-=0.7");

        // Wave animation
        gsap.from(".contact-wave", {
            scrollTrigger: {
                trigger: ".contact-wave",
                start: "top bottom",
                toggleActions: "play none none none"
            },
            duration: 1.5,
            y: 100,
            opacity: 0,
            ease: "power2.out"
        });

        // Address info animation
        gsap.from(".address-info", {
            scrollTrigger: {
                trigger: ".address-info",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out(1.5)"
        });

        // Form elements animation
        gsap.from(".form-element", {
            scrollTrigger: {
                trigger: ".contact-form",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out(1.5)"
        });

        // Success text animation
        gsap.from(".success-text", {
            scrollTrigger: {
                trigger: ".success-text",
                start: "top 80%",
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 50,
            opacity: 0,
            ease: "power3.out"
        });
    });

    return (
        <div className='contact-container rounded-xl bg-[#f0eee8] w-[100%] flex lg:flex-row flex-col m-auto mt-26'>
            <div className='contact-left relative w-full lg:w-[50%] flex flex-col justify-between rounded-xl bg-[#f0eee8]'>
                <div className='address-info absolute top-0 w-[100%] z-100 flex justify-between items-center'>
                    <div className='w-full lg:w-[50%] p-4 lg:p-12'>
                        <h1 className='text-white lg:text-2xl font-bold nav-links'>ADDRESS</h1>
                        <p className='text-white text-sm lg:text-lg'>Valenkinca</p>
                        <p className='text-white text-sm lg:text-lg'>G-600, Gjilan, Kosovo</p>
                        <p className='text-white text-sm lg:text-lg'>info@piebaldcapital.com</p>
                    </div>
                    <div className='w-full lg:w-[50%] p-4 lg:p-12'>
                        <h1 className='text-white lg:text-2xl font-bold nav-links whitespace-nowrap'>Additional Information</h1>
                        <p className='text-white text-sm lg:text-lg'>+1 (786) 612-6784</p>
                        <p className='text-white text-sm lg:text-lg'>G-600, Gjilan, Kosovo</p>
                        <p className='text-white text-sm lg:text-lg'>info@piebaldcapital.com</p>
                    </div>
                </div>
                <svg height="475" className="contact-wave relative -mt-20 lg:mt-0 h-wave h-wave--outer-bottom rounded-xl w-full" viewBox="0 0 1058 52" fill="none" aria-hidden="true" >
                    <path d="M87 52.01H0V-329.99C0.418369 -330.678 0.754026 -331.413 1 -332.18C5.42 -354.26 19.64 -368.48 41.81 -373C42.5753 -373.25 43.3099 -373.585 44 -374H1015C1017.52 -373.29 1020 -372.54 1022.56 -371.86C1043.67 -366.21 1058.08 -344.52 1057.98 -326.41C1057.39 -215.11 1057.62 -103.8 1057.58 7.51001V13.11C1049.01 13.11 1041.07 13.24 1033.13 13.11C984.47 12.24 935.86 12.4 887.4 17.75C852.63 21.58 817.99 26.26 784.31 35.9C744.37 47.33 704.37 49.7 664.12 38.58C601.44 21.25 537.39 14.35 472.63 12.96C410.28 11.62 348.04 13.96 286.15 21.88C253.67 26.01 221.28 31.14 189 36.81C160.33 41.81 131.88 48.08 102.76 50.21C97.5 50.59 92.26 51.4 87 52.01Z" fill="#c86e3b"></path>
                </svg>
                <div className='success-text hidden lg:block w-[90%] m-auto'>
                    <h2 className='text-5xl text text-black'>EVERY SUCCESS AFTER SACRIFICE WORTH IT</h2>
                </div>
            </div>

            <div className='contact-right w-full lg:w-[50%] bg-[#f0eee8] rounded-4xl pb-6'>
                <div className='w-[90%] m-auto mt-2'>
                    <h2 className='text-5xl text-black mt-9 lg:text-left text-center'>Contact Us</h2>
                </div>

                <div className="contact-form w-[90%] m-auto mt-4 rounded-xl p-2 bg-[#fe00086]">
                    <form className="space-y-7">
                        <div className="form-element">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>
                        <div className="form-element">
                            <input
                                type="email"
                                placeholder="Email"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>
                        <div className="form-element">
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                            />
                        </div>

                        <div className="form-element">
                            <select
                                name="consultationType"
                                id="consultationType"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                                required
                                defaultValue=""
                            >
                                <option value="" disabled hidden>
                                    Select Consultation Type
                                </option>
                                <option value="buying">Financial Services</option>
                                <option value="selling">Real Estate Development</option>
                                <option value="rental">Digital Transformation</option>
                                <option value="valuation">General Inquiry</option>
                            </select>
                        </div>

                        <div className="form-element">
                            <textarea
                                placeholder="Message"
                                className="w-full border-b border-gray-400 focus:outline-none bg-transparent text-gray-700 placeholder-gray-400 py-2"
                                rows="4"
                            ></textarea>
                        </div>
                        <div className="form-element">
                            <Button text='Get in Touch' href="/contact" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactUs