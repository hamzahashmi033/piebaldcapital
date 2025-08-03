"use client";
import React from "react";

import Header from "@/widgets/Header";
import Banner from "@/widgets/Banner";
import "./styles.css";
import ScrollContext from "@/context/SmoothScrollContext";
import CoreServicesPreview from "@/widgets/CoreServicesPreview";
import DigitalSlider from "@/widgets/Digital and operational transformation";
import ContactSection from "@/widgets/ContactUs";

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />
        <DigitalSlider />
        <ContactSection />
      </ScrollContext>
    </>
  );
}
