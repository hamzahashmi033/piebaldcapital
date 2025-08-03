'use client'
import React from 'react';

import Header from '@/widgets/Header';
import Banner from '@/widgets/Banner';
import './styles.css';
import ScrollContext from '@/context/SmoothScrollContext';
import CoreServicesPreview from '@/widgets/CoreServicesPreview';
import Section2 from '@/widgets/Section2';

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />
        <Section2 />

      </ScrollContext>
    </>
  );
}
