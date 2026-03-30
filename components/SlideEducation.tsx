'use client';

import { GraduationCap, MapPin, Calendar } from 'lucide-react';

const EDUCATION = [
  {
    id: 'ucla',
    degree: 'Master of Engineering, Artificial Intelligence',
    school: 'University of California, Los Angeles (UCLA)',
    location: 'Los Angeles, CA',
    period: 'Sep 2026 (Incoming)',
    details: [],
  },
  {
    id: 'gtu',
    degree: 'Bachelor of Engineering, Computer Science (AI/ML)',
    school: 'Gujarat Technological University',
    location: 'Ahmedabad, India',
    period: '2024',
    details: ['CGPA: 9.6 / 10'],
  },
];

export default function SlideEducation() {
  return (
    <div className="w-full h-full flex items-center">
      <div className="w-full max-w-3xl mx-auto space-y-10 py-8">
        <h2 className="text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase mb-6">Education</h2>

        <div className="grid grid-cols-1 gap-6">
          {EDUCATION.map((edu) => (
            <div
              key={edu.id}
              className="p-8 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] rounded-xl flex flex-col gap-5"
            >
              <div className="flex items-start gap-4">
                <div className="p-2.5 bg-[#F5F5F4] dark:bg-[#23252A] rounded-lg shrink-0">
                  <GraduationCap size={22} className="text-[#52525B] dark:text-[#A1A1AA]" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-bold tracking-tight">{edu.degree}</h3>
                  <p className="text-[#52525B] dark:text-[#A1A1AA]">{edu.school}</p>
                </div>
              </div>

              <div className="flex gap-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
                <span className="flex items-center gap-1.5"><Calendar size={14} /> {edu.period}</span>
                <span className="flex items-center gap-1.5"><MapPin size={14} /> {edu.location}</span>
              </div>

              {edu.details.length > 0 && (
                <div className="border-t border-[#D4D4D8] dark:border-[#23252A] pt-4">
                  {edu.details.map((detail, i) => (
                    <span key={i} className="text-sm font-medium">{detail}</span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
