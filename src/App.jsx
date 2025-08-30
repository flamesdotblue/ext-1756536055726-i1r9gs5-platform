import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import NewsGrid from './components/NewsGrid';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-neutral-900">
      <NavBar />
      <main className="flex-1">
        <Hero />
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <NewsGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
