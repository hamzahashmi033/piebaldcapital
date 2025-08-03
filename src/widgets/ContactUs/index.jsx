'use client';

import { useState } from "react";

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
      className="py-16 px-6 lg:px-20 bg-gray-50"
      lang="en"
    >
      <div className="max-w-5xl mx-auto">
        {/* SEO and Accessibility */}
        <h2 className="text-4xl font-bold mb-6 text-center">Contact</h2>
        <p className="text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Tell us what you need and one of our specialized advisors will contact you within 24 business hours.
          Please select the type of consultation to route your message appropriately.
        </p>

        {/* Smart Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 rounded-xl shadow-lg">
          {/* Consultation Type */}
          <div className="md:col-span-2">
            <label htmlFor="consultationType" className="block mb-2 text-sm font-semibold text-gray-700">
              Select consultation type:
            </label>
            <select
              name="consultationType"
              id="consultationType"
              value={formData.consultationType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
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
            <label htmlFor="name" className="block mb-2 text-sm font-semibold text-gray-700">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-semibold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            />
          </div>

          {/* Message */}
          <div className="md:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-semibold text-gray-700">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="md:col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Contact Information */}
        <div className="text-center mt-12">
          <p className="text-lg font-medium">Contact Information</p>
          <p className="text-gray-700 mt-2">Tel: <a href="tel:+17866126784" className="underline">+1 (786) 612-6784</a></p>
          <p className="text-gray-700">Email: <a href="mailto:info@piebaldcapital.com" className="underline">info@piebaldcapital.com</a></p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
