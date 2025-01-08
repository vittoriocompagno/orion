'use client';

import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    quote: "Orion ha rivoluzionato il modo in cui gestiamo le recensioni. Non potremmo più farne a meno.",
    author: "MARIO ROSSI",
    company: "Ristorante Da Mario",
    rating: 5
  },
  {
    quote: "L'analisi del sentiment ci ha permesso di capire davvero cosa pensano i nostri clienti.",
    author: "LAURA BIANCHI",
    company: "Hotel Bellavista",
    rating: 5
  },
  {
    quote: "Un tool indispensabile per chi vuole gestire la propria reputazione online in modo efficiente.",
    author: "GIUSEPPE VERDI",
    company: "Caffè Milano",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="px-6 md:px-4 py-24 md:py-20 bg-white border-b-4 border-gray-900">
      <div className="section-container">
        <h2 className="text-5xl md:text-7xl font-mono font-bold mb-4">FEEDBACK_</h2>
        <p className="text-xl mb-12 font-sans text-gray-700">Cosa dicono i nostri utenti</p>
        
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="border-2 p-8 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-surface border-gray-900">
              <Quote size={32} className="text-accent mb-4" />
              <p className="font-sans text-xl mb-6 text-gray-700">{testimonial.quote}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-mono text-lg text-accent">{testimonial.author}</div>
                  <div className="font-sans text-gray-700">{testimonial.company}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="border-2 p-8 shadow-brutal bg-surface border-gray-900">
            <Quote size={32} className="text-accent mb-4" />
            <p className="font-sans text-xl mb-6 text-gray-700">{testimonials[currentIndex].quote}</p>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-mono text-lg text-accent">{testimonials[currentIndex].author}</div>
                <div className="font-sans text-gray-700">{testimonials[currentIndex].company}</div>
              </div>
              <div className="flex gap-1">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-accent text-accent" />
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex justify-between items-center mt-8">
            <button 
              onClick={prevTestimonial}
              className="p-3 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-accent' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <button 
              onClick={nextTestimonial}
              className="p-3 border-2 border-gray-900 shadow-brutal hover:translate-x-1 hover:-translate-y-1 transition-transform bg-white"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 