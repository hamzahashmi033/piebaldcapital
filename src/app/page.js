'use client'
import React from 'react';

import Header from '@/widgets/Header';
import Banner from '@/widgets/Banner';
import './styles.css';
import ScrollContext from '@/context/SmoothScrollContext';
import CoreServicesPreview from '@/widgets/CoreServicesPreview';
import About from '@/widgets/AboutUs';

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />
        <About/>

      </ScrollContext>
    </>
  );
}
