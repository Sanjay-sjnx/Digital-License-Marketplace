import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import WhyChooseUs from './components/WhyChooseUs.jsx';
import Testimonials from './components/Testimonials.jsx';
import ContactForm from './components/ContactForm.jsx';
import ChatWidget from './components/ChatWidget.jsx';

export default function App() {
  return (
    <div className="font-sans text-gray-800 dark:bg-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="mt-20">
        <Hero />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <ContactForm />
      </main>
      <ChatWidget />
    </div>
  );
}
