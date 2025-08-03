'use client'
import React from 'react';

import Header from '@/widgets/Header';
import Banner from '@/widgets/Banner';
import './styles.css';
import ScrollContext from '@/context/SmoothScrollContext';
import CoreServicesPreview from '@/widgets/CoreServicesPreview';

export default function App() {
  return (
    <>
      <ScrollContext>
        <Header />
        <Banner />
        <CoreServicesPreview />

      </ScrollContext>
    </>
  );
}
