'use client';

import { motion, AnimatePresence } from 'motion/react';
import SlideHome from './SlideHome';
import SlideAbout from './SlideAbout';
import SlideExperience from './SlideExperience';
import SlideEducation from './SlideEducation';
import SlideProjects from './SlideProjects';
import SlideCertificates from './SlideCertificates';

interface CarouselViewportProps {
  activeIndex: number;
  direction: number;
  onNavigate: (index: number) => void;
}

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

export default function CarouselViewport({ activeIndex, direction, onNavigate }: CarouselViewportProps) {
  const slides = [
    <SlideHome key="home" onNavigate={onNavigate} />,
    <SlideAbout key="about" />,
    <SlideExperience key="experience" />,
    <SlideEducation key="education" />,
    <SlideProjects key="projects" />,
    <SlideCertificates key="certificates" />,
  ];

  return (
    <div className="relative w-full h-full">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full overflow-y-auto md:overflow-hidden"
        >
          {slides[activeIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
