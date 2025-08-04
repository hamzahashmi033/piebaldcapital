'use client'
import React from 'react';

import Header from '@/widgets/Header';
import Banner from '@/widgets/Banner';
import './styles.css';
import ScrollContext from '@/context/SmoothScrollContext';
import CoreServicesPreview from '@/widgets/CoreServicesPreview';
import Map from '@/widgets/Map';
import Section2 from '@/widgets/Section2';
import Section3 from '@/widgets/Section3';
import About from '@/widgets/AboutUs';

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />
        <Section2 />
        <Section3 />
        <Map />
        <About/>

      </ScrollContext>
    </>
  );
}
