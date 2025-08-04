'use client'
import React from 'react';

import Header from '@/widgets/Header';
import Banner from '@/widgets/Banner';
import './styles.css';
import ScrollContext from '@/context/SmoothScrollContext';
import CoreServicesPreview from '@/widgets/CoreServicesPreview';
import Map from '@/widgets/Map';

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />
        <Map />

      </ScrollContext>
    </>
  );
}
