'use client';

import { useState } from "react";
import Button from "../Button";

const consultationOptions = [
  "Financial Services",
  "Real Estate Development",
  "Digital Transformation",
  "General Inquiry",
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    consultationType: "",
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      id="contact"
      className="w-screen mt-16 py-24  "
      lang="en"
    >
      <div className="px-7 md:px-16 lg:px-34 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column - Text Content */}
        <div className="relative z-10">
          <div className="absolute -left-5 top-3 h-20 w-1 bg-[#c86e3b] rounded-md hidden md:block"></div>

          <h2 className="text-5xl font-extrabold text-[#c86e3b] mb-6 main-head leading-snug">
            Contact
          </h2>
          <p className="text-black text-lg leading-relaxed">
            Tell us what you need and one of our specialized advisors will contact you within <strong>24 business hours</strong>.
            <br /><br />
            Please select the type of consultation to route your message appropriately. We're here to help you move forward with confidence.
          </p>
        </div>

        {/* Right Column - Form */}
        <form
          className="bg-[#ffffffe6] backdrop-blur-md p-10  rounded-3xl shadow-xl border border-[#e8e4d4] space-y-6"
        >
          {/* Consultation Type */}
          <div>
            <label htmlFor="consultationType" className="block mb-1 text-sm font-semibold text-[#c86e3b]">
              Select consultation type:
            </label>
            <select
              name="consultationType"
              id="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              className="w-full border border-[#d9d3c6] rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86e3b]/50"
              required
            >
              <option value="">-- Select --</option>
              {consultationOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>

          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-1 text-sm font-semibold text-[#c86e3b]">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-[#d9d3c6] rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86e3b]/50"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-semibold text-[#c86e3b]">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-[#d9d3c6] rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86e3b]/50"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-1 text-sm font-semibold text-[#c86e3b]">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-[#d9d3c6] rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-[#c86e3b]/50"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="justify-center  flex">
            <Button text='Submit'/>
          </div>
        </form>
      </div>

      {/* Contact Info */}
      {/* <div className=" mt-20">
        <p className="text-lg font-semibold text-[#c86e3b]">Contact Information</p>
        <p className="text-gray-800 mt-1">Tel: <a href="tel:+17866126784" className="underline hover:text-[#c86e3b]">+1 (786) 612-6784</a></p>
        <p className="text-gray-800">Email: <a href="mailto:info@piebaldcapital.com" className="underline hover:text-[#c86e3b]">info@piebaldcapital.com</a></p>
      </div> */}
      </div>
    </section>
  );
};

export default ContactSection;
