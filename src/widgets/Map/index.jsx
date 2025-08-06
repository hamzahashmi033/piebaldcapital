'use client'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
const Map = () => {
    useGSAP(() => {
        // Split the text into characters
        const split = new SplitText('.mapHead', {
            type: 'chars,words,lines',
            linesClass: 'overflow-hidden'
        });

        // Create a timeline for sequenced animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".mapSection",
                start: "top 60%", 
                end: "bottom 30%",
                toggleActions: "play none none none",
            }
        });


        // Animation for heading characters
        tl.from(split.chars, {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'back.out(1.5)',
            stagger: 0.02,
            rotation: 10,
            scale: 0.5
        });




    });
    return (
        <section className="mapSection w-full h-[500px] bg-[url('/images/map/map.png')] bg-cover bg-center bg-no-repeat mt-30">
            <div className="w-[100%] lg:w-[60%] m-auto h-full flex justify-center items-center">
                <h2 className="mapHead text-white text-center text-6xl  lg:text-[72px] font-extrabold main-head leading-none">Explore Our Global Academic Affiliates
                </h2>
            </div>
        </section>
    )
}
export default Map