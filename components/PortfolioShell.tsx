'use client';

import { useState, useEffect, useCallback } from 'react';
import TopTabs from './TopTabs';
import CarouselViewport from './CarouselViewport';
import { Github, Linkedin, Mail } from 'lucide-react';

const SLIDES = ['Home', 'About', 'Projects', 'Certificates'];

export default function PortfolioShell() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const navigateTo = useCallback((newIndex: number) => {
    setDirection(newIndex > activeSlideIndex ? 1 : -1);
    setActiveSlideIndex(newIndex);
  }, [activeSlideIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        if (activeSlideIndex < SLIDES.length - 1) {
          navigateTo(activeSlideIndex + 1);
        }
      } else if (e.key === 'ArrowLeft') {
        if (activeSlideIndex > 0) {
          navigateTo(activeSlideIndex - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlideIndex, navigateTo]);

  return (
    <div className="flex flex-col h-full w-full max-w-7xl mx-auto px-6 md:px-12 py-8">
      <header className="flex justify-between items-center z-10 shrink-0">
        <div className="text-xl font-bold tracking-tighter">DB.</div>
        <TopTabs 
          slides={SLIDES} 
          activeIndex={activeSlideIndex} 
          onSelect={navigateTo} 
        />
      </header>
      
      <div className="flex-1 relative mt-12 mb-8 overflow-hidden">
        <CarouselViewport 
          activeIndex={activeSlideIndex} 
          direction={direction} 
        />
      </div>

      <footer className="flex justify-between items-center text-sm text-[#52525B] dark:text-[#A1A1AA] shrink-0 z-10">
        <div>0{activeSlideIndex + 1} / 0{SLIDES.length}</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] transition-colors"><Github size={18} /></a>
          <a href="#" className="hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] transition-colors"><Linkedin size={18} /></a>
          <a href="mailto:dbhavsar9898@gmail.com" className="hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] transition-colors"><Mail size={18} /></a>
        </div>
      </footer>
    </div>
  );
}
