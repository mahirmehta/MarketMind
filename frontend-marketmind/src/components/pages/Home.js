import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Table from '../Table';
import Cards from '../Cards';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Table />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;