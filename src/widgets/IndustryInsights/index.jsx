'use client'
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const IndustryInsights = () => {
    useGSAP(() => {
        let mm = gsap.matchMedia();

        // Main title animation
        mm.add("(min-width: 800px)", () => {
            gsap.set(".category-btn", { x: -20, opacity: 0 })
            // Split text for more advanced animations
            const splitTitle = new SplitText(".text-ind", {
                type: "chars,words",
                wordsClass: "word",
                charsClass: "char"
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".industry-container",
                    start: "top 70%",
                    end: "bottom 30%",
                    toggleActions: "play none none none",
                    markers: false,
                }
            });

            // Staggered character animation with more fluid motion
            tl.from(splitTitle.chars, {
                duration: 0.8,
                x: -50,
                opacity: 0,
                rotateY: 90,
                transformOrigin: "0% 50%",
                ease: "power3.out",
                stagger: 0.03
            });

            // Section fade-in animation
            gsap.from(".industry-section", {
                scrollTrigger: {
                    trigger: ".industry-section",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 1.2,
                y: 50,
                opacity: 0,
                ease: "power2.out",
                stagger: 0.1
            });

            // Category buttons animation
            gsap.to(".category-btn", {
                scrollTrigger: {
                    trigger: ".category-container",
                    start: "top 80%",
                    toggleActions: "play none none none"
                },
                duration: 0.8,
                x: 0,
                opacity: 1,
                ease: "elastic.out(1, 0.5)",
                stagger: 0.1
            });

            // Card animations
            const cards = gsap.utils.toArray(".industry-card");
            cards.forEach((card, i) => {
                const direction = i % 2 === 0 ? 50 : -50;
                gsap.from(card, {
                    scrollTrigger: {
                        trigger: card,
                        start: "top 80%",
                        toggleActions: "play none none none"
                    },
                    duration: 1,
                    y: direction,
                    opacity: 0,
                    ease: "power2.out",
                    delay: i * 0.1
                });
            });

            // Hover animations for cards
            cards.forEach(card => {
                const overlay = card.querySelector(".card-overlay");
                const content = card.querySelector(".card-content");

                // Initial state
                gsap.set(content, { y: 20, opacity: 0 });

                // Hover animation
                card.addEventListener("mouseenter", () => {
                    gsap.to(overlay, {
                        opacity: 0.7,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    gsap.to(content, {
                        y: 0,
                        opacity: 1,
                        duration: 0.7,
                        ease: "power3.out"
                    });
                });

                card.addEventListener("mouseleave", () => {
                    gsap.to(overlay, {
                        opacity: 0.5,
                        duration: 0.5,
                        ease: "power2.out"
                    });
                    gsap.to(content, {
                        y: 20,
                        opacity: 0,
                        duration: 0.5,
                        ease: "power2.in"
                    });
                });

                // Initial reveal animation
                ScrollTrigger.create({
                    trigger: card,
                    start: "top 80%",
                    onEnter: () => {
                        gsap.to(content, {
                            y: 0,
                            opacity: 1,
                            duration: 1,
                            ease: "power3.out",
                            delay: 0.2
                        });
                    }
                });
            });
        });
    });

    return (
        <>
            <div className="w-[100%] lg:w-[85%] m-auto pt-16 pb-16 industry-container">
                <div className="p-2">
                    <h2 className="text-4xl lg:text-6xl text-[#c86e3b] text-ind">Industry Insight</h2>
                </div>

                <div className="mt-6 industry-section">
                    <h3 className="p-2 text-lg">Market Sector</h3>
                </div>

                <div className="mt-2 p-2 flex gap-3 overflow-x-scroll md:overflow-x-hidden category-container">
                    {['All', 'Residential Area', 'Commercial Area', 'Industrial Area', 'Development', 'Real Estate Investment Trusts'].map((category, index) => (
                        <div
                            key={index}
                            className="p-2 whitespace-nowrap flex justify-center items-center text-center px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out category-btn"
                        >
                            <p>{category}</p>
                        </div>
                    ))}
                </div>

                <div className="w-[100%] flex flex-col lg:flex-row gap-0 p-2 mt-4">
                    {/* Main Card */}
                    <div className="relative w-[100%] lg:w-[50%] pb-16 cursor-pointer group overflow-hidden industry-card"
                        style={{ backgroundImage: 'url(/images/industry/1.jpg)', backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="absolute inset-0 bg-[#3E3F29] opacity-50 transition-all duration-500 ease-in-out z-10 card-overlay"></div>
                        <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center card-content">
                            <div className="flex gap-2">
                                <div className="p-2 z-10 text-black text-center bg-white px-6 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                    <p>Residential Area</p>
                                </div>
                            </div>
                            <div className="text-white z-10 text-lg cursor-pointer hover:text-black">
                                <p>Read More</p>
                            </div>
                        </div>
                        <div className="flex z-10 h-full w-[90%] m-auto p-2 card-content">
                            <h2 className="text-white pt-6 z-10 text-md lg:text-3xl font-bold industry-text">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic eligendi voluptatem quam aperiam quibusdam nulla doloremque porro facere provident! Voluptatem.
                            </h2>
                        </div>
                    </div>

                    {/* Secondary Cards */}
                    <div className="w-[100%] lg:w-[50%] flex flex-col lg:flex-row flex-wrap">
                        {[
                            { bg: '#239BA7', category: 'Residential Area', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
                            { bg: '#D25D5D', category: 'Industrial Area', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit.' },
                            { bg: '#A2AF9B', category: 'Development', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor, sit amet consectetur adipisicing elit.' },
                            { bg: '#FCF8DD', category: 'Commercial Area', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing.' }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="relative pb-16 w-[100%] lg:w-[50%] industry-card"
                                style={{
                                    backgroundImage: `url(/images/industry/${index + 1}.jpg)`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            >
                                <div
                                    className="absolute inset-0 opacity-50 transition-all duration-500 ease-in-out z-10 card-overlay"
                                    style={{ backgroundColor: item.bg }}
                                ></div>
                                <div className="w-[90%] border-black mt-4 m-auto flex justify-between items-center card-content">
                                    <div className="flex gap-2">
                                        <div className="p-2 z-10 text-[16px] text-black text-center bg-white px-2 border-2 border-[#c86e3b] rounded-4xl hover:bg-[#c86e3b] hover:text-white cursor-pointer transition-all duration-300 delay-150 ease-in-out">
                                            <p className="text-[12px]">{item.category}</p>
                                        </div>
                                    </div>
                                    <div className="text-white z-10 text-[16px] cursor-pointer hover:text-black">
                                        <p>Read More</p>
                                    </div>
                                </div>
                                <div className="flex z-10 h-full w-[90%] m-auto p-2 items-center card-content">
                                    <h2 className="text-white z-10 text-md lg:text-xl font-bold industry-text">
                                        {item.text}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndustryInsights;