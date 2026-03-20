'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function SlideHome() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        <div className="flex flex-col justify-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
              Dhruv<br />Bhavsar
            </h1>
            <p className="text-xl text-[#52525B] dark:text-[#A1A1AA] max-w-md leading-relaxed">
              AI Systems Engineer & Researcher specializing in Agentic Workflows, Graph Algorithms, and Large-Scale RAG Architectures.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="flex items-center gap-2 bg-[#0B0B0C] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#0B0B0C] px-6 py-3 rounded-full font-medium hover:bg-[#23252A] dark:hover:bg-[#D4D4D8] transition-colors">
              View Projects <ArrowRight size={18} />
            </button>
            <button className="flex items-center gap-2 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] text-[#0B0B0C] dark:text-[#F5F5F4] px-6 py-3 rounded-full font-medium hover:bg-[#F5F5F4] dark:hover:bg-[#23252A] transition-colors">
              Certificates
            </button>
          </div>
        </div>
        
        <div className="hidden md:flex items-center justify-center w-full">
          <div className="w-full max-w-[32rem] md:max-w-[40rem] aspect-square relative flex items-center justify-center">
            <Image 
              src="/hero-graphic.svg" 
              alt="Hero Graphic" 
              fill 
              className="object-contain"
              priority
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
