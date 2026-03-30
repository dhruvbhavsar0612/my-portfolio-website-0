'use client';

import { motion } from 'motion/react';
import { Home, User, Briefcase, GraduationCap, FolderKanban, Award } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TopTabsProps {
  slides: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  About: User,
  Experience: Briefcase,
  Education: GraduationCap,
  Projects: FolderKanban,
  Certificates: Award,
};

export default function TopTabs({ slides, activeIndex, onSelect }: TopTabsProps) {
  return (
    <div 
      role="tablist" 
      aria-label="Portfolio sections"
      className="flex gap-1 md:gap-2 bg-white dark:bg-[#111214] p-1 rounded-full border border-[#D4D4D8] dark:border-[#23252A]"
    >
      {slides.map((slide, index) => {
        const isActive = index === activeIndex;
        const Icon = ICON_MAP[slide];
        return (
          <button
            key={slide}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(index)}
            className={`relative px-3 md:px-4 py-1.5 text-xs md:text-sm font-medium rounded-full transition-colors ${
              isActive ? 'text-[#F5F5F4] dark:text-[#0B0B0C]' : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4]'
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-[#23252A] dark:bg-[#D4D4D8] rounded-full"
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10 flex items-center justify-center">
              {Icon && (
                <Icon size={16} className={isActive ? 'hidden' : 'md:hidden'} />
              )}
              <span className={isActive ? '' : 'hidden md:inline'}>
                {slide}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}
