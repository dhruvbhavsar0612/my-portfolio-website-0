'use client';

import { FileText, Award, ExternalLink } from 'lucide-react';

const CERTIFICATES = [
  {
    id: 'employee-of-year',
    title: 'Employee of the Year (2024)',
    issuer: 'Wappnet Systems',
    date: '2024',
    link: '#'
  },
  {
    id: 'ml-stanford',
    title: 'Supervised Machine Learning',
    issuer: 'DeepLearning.AI & Stanford',
    date: '2022',
    link: 'https://coursera.org/verify/52U7CECRWXQF'
  },
  {
    id: 'rest-api',
    title: 'Rest API Intermediate',
    issuer: 'HackerRank',
    date: '2022',
    link: 'https://www.hackerrank.com/certificates/82de3d56e0b7'
  },
  {
    id: 'python-ds-ml',
    title: 'Python for Data Science and ML',
    issuer: 'Udemy',
    date: '2021',
    link: 'https://ude.my/UC-c99fdf81-e38c-417a-92fa-4eb95f696c7b'
  }
];

export default function SlideCertificates() {
  return (
    <div className="w-full h-full flex flex-col justify-center py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        
        {/* Certificates Grid */}
        <div className="space-y-6">
          <h2 className="text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase mb-2">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {CERTIFICATES.map(cert => (
              <a 
                key={cert.id} 
                href={cert.link}
                target={cert.link !== '#' ? "_blank" : "_self"}
                rel={cert.link !== '#' ? "noopener noreferrer" : ""}
                className="group p-5 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] rounded-xl hover:border-[#0B0B0C] dark:hover:border-[#D4D4D8] transition-colors flex flex-col h-full"
              >
                <div className="flex justify-between items-start mb-4">
                  <Award className="text-[#52525B] dark:text-[#A1A1AA] group-hover:text-[#0B0B0C] dark:group-hover:text-[#F5F5F4] transition-colors" size={20} />
                  <ExternalLink className="text-[#D4D4D8] dark:text-[#23252A] group-hover:text-[#52525B] dark:group-hover:text-[#A1A1AA] transition-colors" size={16} />
                </div>
                <h3 className="font-medium text-sm mb-1">{cert.title}</h3>
                <div className="text-xs text-[#52525B] dark:text-[#A1A1AA] mt-auto pt-4 flex justify-between">
                  <span>{cert.issuer}</span>
                  <span>{cert.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Contact & Resume */}
        <div className="flex flex-col justify-center space-y-8 md:pl-12 md:border-l border-[#D4D4D8] dark:border-[#23252A]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Let&apos;s build something.</h2>
            <p className="text-[#52525B] dark:text-[#A1A1AA] max-w-sm">
              Currently open for new opportunities. Feel free to reach out if you&apos;re looking for a developer, have a question, or simply want to connect.
            </p>
          </div>

          <div className="space-y-4 pt-4">
            <a href="mailto:dbhavsar9898@gmail.com" className="block text-lg hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
              dbhavsar9898@gmail.com
            </a>
            
            <div className="flex gap-6 pt-4">
              <a href="https://linkedin.com/in/dhruv4real" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
                LinkedIn
              </a>
              <a href="https://github.com/dhruvbhavsar0612" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
                GitHub
              </a>
              <a href="https://wellfound.com/u/dhruv-bhavsar-9" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
                Wellfound
              </a>
            </div>
          </div>

          <div className="pt-8 mt-auto">
            <button className="flex items-center gap-2 bg-[#0B0B0C] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#0B0B0C] px-6 py-3 rounded-full font-medium hover:bg-[#23252A] dark:hover:bg-[#D4D4D8] transition-colors w-fit">
              <FileText size={18} /> Download Resume
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
