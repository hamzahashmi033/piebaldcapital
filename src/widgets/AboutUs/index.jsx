'use client'
import React from 'react'
import { BadgeCheck, ShieldCheck, Zap, Target, Globe } from 'lucide-react';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const About = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();
        
        mm.add("(min-width: 800px)", () => {
            // Split text for more advanced animations
            const splitTitle = new SplitText(".about-text", { 
                type: "chars,words",
                wordsClass: "word",
                charsClass: "char"
            });
            
            // Main timeline for the about section
            const aboutTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-bg",
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none none",
                }
            });

            // Title animation with character splitting
            aboutTimeline.from(splitTitle.chars, {
                duration: 0.8,
                y: 50,
                opacity: 0,
                rotateX: -90,
                transformOrigin: "50% 100%",
                ease: "back.out(2)",
                stagger: 0.03
            });

            // Content boxes animation
            aboutTimeline.from([".about-1", ".about-2"], {
                duration: 1,
                y: 100,
                opacity: 0,
                scale: 0.9,
                ease: "power3.out",
                stagger: 0.2
            }, "-=0.5");

            // Tag animations on the boxes
            gsap.from(".about-tag", {
                scrollTrigger: {
                    trigger: ".about-1",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.6,
                y: -30,
                opacity: 0,
                ease: "elastic.out(1, 0.5)",
                stagger: 0.1
            });

            // Values section timeline
            const valuesTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: ".value-box",
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none none",
                }
            });

            // Values title animation
            valuesTimeline.from(".values-text", {
                duration: 0.8,
                y: 50,
                opacity: 0,
                scale: 0.8,
                ease: "back.out(2)",
            });

            // Values items animation
            valuesTimeline.from(".values-child > div", {
                duration: 1,
                y: 80,
                opacity: 0,
                scale: 0.8,
                ease: "power3.out",
                stagger: 0.15
            }, "-=0.3");

            // Icon animations
            gsap.from(".value-icon", {
                scrollTrigger: {
                    trigger: ".values-child",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                scale: 0,
                rotate: 180,
                opacity: 0,
                ease: "elastic.out(1, 0.8)",
                stagger: 0.1
            });

            // Hover effects for value cards
            const valueItems = gsap.utils.toArray(".values-child > div");
            valueItems.forEach(item => {
                const icon = item.querySelector(".value-icon");
                
                item.addEventListener("mouseenter", () => {
                    gsap.to(icon, {
                        duration: 0.5,
                        scale: 1.2,
                        y: -5,
                        ease: "power2.out"
                    });
                });
                
                item.addEventListener("mouseleave", () => {
                    gsap.to(icon, {
                        duration: 0.5,
                        scale: 1,
                        y: 0,
                        ease: "power2.out"
                    });
                });
            });
        });
    });

    return (
        <section className="relative bg-[#f0eee8] pb-5 about-bg">
            <div className='absolute top-0 w-full opacity-11 h-full'>
                <img src="/images/about-us/about-main.jpg" className='w-full h-full' alt="" />
            </div>

            <div className='w-[90%] m-auto pt-26 flex flex-col gap-20 lg:gap-0 lg:flex-row justify-around p-10'>
                <div className="w-[100%] lg:w-[25%]">
                    <h2 className='text-[#c86e3b] text-6xl text-center lg:text-left font-bold about-text'>About Us</h2>
                </div>

                <div className="about-1 relative w-[100%] lg:w-[33%] border border-r-3 border-l-0 border-t-6 border-b-0 border-[#c86e3b] p-6 rounded-lg">
                    <div className="about-tag absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest rounded-bl-lg rounded-br-lg">
                        <h2 className='text-lg'>Our Story</h2>
                    </div>
                    <div className="relative z-10 mt-10 space-y-2">
                        <p className="text-md lg:text-lg text-black leading-tight">
                            Founded with the vision of being the preferred strategic partner for growing companies and real estate developers, Piebald Capital has evolved into a comprehensive consultancy with presence in three key markets: United States, Spain, and Mexico.
                        </p>
                    </div>
                </div>

                <div className="about-2 relative w-[100%] lg:w-[33%] border border-r-3 border-l-0 border-t-6 border-b-0 border-[#c86e3b] p-6 rounded-lg">
                    <div className="about-tag absolute top-0 left-0 bg-[#c86e3b] text-black font-bold text-xs px-6 py-3 tracking-widest rounded-bl-lg rounded-br-lg">
                        <h2 className='text-lg'>Our Team</h2>
                    </div>
                    <div className="relative z-10 mt-10 space-y-2">
                        <p className="text-md lg:text-lg text-black leading-tight">
                            We have a multidisciplinary team of experts in corporate finance, real estate development, and digital transformation, with international certifications and proven experience in complex markets.
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full text-center mt-12 value-box">
                <h2 className='text-[#c86e3b] text-6xl font-bold values-text'>Our Values</h2>
            </div>

            <div className='values-child w-[90%] m-auto mt-5 flex justify-between p-10'>
                <div className="relative w-[100%] flex flex-col lg:flex-row gap-3 lg:gap-12 border border-r-3 border-l-0 border-t-6 border-b-0 border-[#c86e3b] p-6 rounded-lg">
                    <div className="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <BadgeCheck className="value-icon text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Service excellence</h3>
                        <p className="text-[12px] text-black leading-tight">
                            Rigorous processes and commitment to exceed client expectations.
                        </p>
                    </div>
                    <div className="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <ShieldCheck className="value-icon text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Trustworthiness</h3>
                        <p className="text-[12px] text-black leading-tight">
                            Building trust through honest and clear communication.
                        </p>
                    </div>
                    <div className="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <Globe className="value-icon text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Social responsibility</h3>
                        <p className="text-[12px] text-black leading-tight">
                            Acting with awareness of our economic and human impact.
                        </p>
                    </div>
                    <div className="relative text-center w-[100%] lg:w-[32%] z-10 mt-10 space-y-2">
                        <Target className="value-icon text-black h-8 w-8 m-auto" />
                        <h3 className='text-[16px] font-bold nav-links'>Accountability</h3>
                        <p className="text-[12px] text-black leading-tight">
                            Focused on measurable and sustainable success.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About