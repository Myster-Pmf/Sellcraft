import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import BangladeshMap from './components/BangladeshMap';
import Pricing from './components/Pricing';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <section id="features">
          <Features />
        </section>
        <BangladeshMap />
        <section id="pricing">
          <Pricing />
        </section>
        <section id="demo">
          <Demo />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;