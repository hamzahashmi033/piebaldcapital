"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

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
    <div className="w-screen bg-[#f0eee8] mt-18 ">
      <div className="py-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl text-center text-[#c86e3b] font-bold py-4">
          Digital and Operational Transformation
        </h2>
        <p className="text-base md:text-lg lg:text-lg text-center text-black">
          We enhance our clients' operational efficiency through advanced
          technological
          <br className="" />
          solutions, process automation, and organizational optimization.
        </p>
      </div>
      <div className="w-full py-10">
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          // pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          className="w-[90%] max-w-[1400px] mx-auto"
        >
          {serviceCards.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row bg-white  overflow-hidden shadow-2xl min-h-[500px]">
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
                <div className="p-10 w-full lg:w-1/2 bg-[#e8e4d4] text-white flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl lg:text-3xl font-semibold mb-4 text-[#c86e3b]">
                      {card.title}
                    </h2>
                    {/* <p className="text-lg mb-4">{card.description}</p> */}
                    <ul className="space-y-3 text-base text-black">
                      {card.bullets.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <IoIosCheckmarkCircleOutline className="text-white-400 mt-1 text-xl shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="mt-8 inline-flex items-center gap-2 text-white bg-[#c86e3b] hover:bg-orange-900 px-5 py-3 rounded-lg text-base font-semibold transition-all">
                    {card.cta} →
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
