"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import SwiperBtn from "../SwiperBtn";


const serviceCards = [
  {
    image: "/images/digital/AI.jpg",
    label: "AI & SaaS",
    title: "AI and SaaS Solutions",
    description: "",
    bullets: [
      "Specialized CRM implementation to strengthen customer relationships and centralize commercial information.",
      "ERP systems tailored for real estate and finance, integrating accounting, operations, and resource management.",
      "Predictive analytics tools to forecast risks, trends, and opportunities.",
      "Automated financial reporting to reduce errors and save time during monthly close.",
      "Property management platforms with real-time control of income, expenses, and occupancy.",
    ],
    cta: "Technology Assessment",
  },
  {
    image: "/images/digital/Automation.avif",
    label: "System Integration",
    title: "Systems Integration & Automation",
    description: "",
    bullets: [
      "Enterprise systems connectivity to ensure seamless data flow across platforms.",
      "Workflow automation across operations, finance, and administration.",
      "Specialized API integration with CRMs, ERPs, banks, and external tools.",
      "Information silo elimination to enhance collaboration and organizational visibility.",
      "Unified executive dashboards with real-time KPIs and performance metrics.",
    ],
    cta: "Systems Audit",
  },
  {
    image: "/images/digital/business.webp",
    label: "Optimization",
    title: "Business Process Optimization",
    description: "",
    bullets: [
      "Detailed mapping and analysis of current processes to identify bottlenecks.",
      "Detection of inefficiencies causing time, resource, or financial waste.",
      "Workflow redesign aligned with best practices and available technology.",
      "Lean methodology implementation to maximize value with minimal waste.",
      "Change management and training programs to ensure smooth adoption.",
    ],
    cta: "Process Diagnosis",
  },
];

export default function DigitalSlider() {
  return (
    <div className="w-screen bg-[#e8e4d4] pb-26">
      <div className="py-12 ">
        <h2 className="text-3xl  md:text-4xl lg:text-5xl main-head text-center text-[#c86e3b] mt-16 font-bold py-4">
          Digital and Operational Transformation
        </h2>
        <p className="text-base md:text-lg lg:text-lg px-8 md:px-6  text-center text-black">
          We enhance our clients' operational efficiency through advanced
          technological
          <br/>
          solutions, process automation, and organizational optimization.
        </p>
      </div>
      <div className="w-full py-10 ">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="w-[90%] max-w-[1400px] mx-auto rounded-3xl shadow-2xl bg-white"
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row overflow-hidden rounded-3xl shadow-4xl min-h-[530px]">
                <div className="relative w-full lg:w-1/2 h-72 lg:h-auto">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-white text-orange-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide z-10">
                    {card.label}
                  </div>
                </div>
                <div className="p-10 w-full lg:w-1/2 bg-white text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl lg:text-3xl playfair font-bold mb-4 text-[#c86e3b]">
                      {card.title}
                    </h2>
                    {/* <p className="text-lg mb-4">{card.description}</p> */}
                    <ul className="space-y-3 text-base text-black">
                      {card.bullets.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <IoIosCheckmarkCircleOutline className="text-white-400 mt-1 text-xl shrink-0" />
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-10">
                  <SwiperBtn cta={card.cta} />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
