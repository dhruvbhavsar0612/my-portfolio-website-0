'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 'teleai',
    title: 'TeleAI Chat Platform',
    description: 'An intelligent AI-powered chat assistant serving as a digital chief of staff with seamless integrations across Gmail, Slack, Jira, and Notion.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'OpenAI', 'LangChain', 'AWS'],
    outcome: 'Architected an enterprise workflow automation solution with real-time synchronization.',
    link: 'https://chat.teleai.tech',
    github: 'https://github.com/dhruvbhavsar0612'
  },
  {
    id: 'maritime-routing',
    title: 'Maritime Routing Engine',
    description: 'High-performance navigation solution calculating optimal sea routes on a 50,000+ node graph using Contraction Hierarchies and Dijkstra\'s algorithm.',
    stack: ['Python', 'FastAPI', 'GeoPandas', 'NetworkX'],
    outcome: 'Reduced query latency from 2s to <100ms (p99). Successfully completed MVP leading to a patent filing.',
    link: '#',
    github: 'https://github.com/dhruvbhavsar0612'
  },
  {
    id: 'solar-irradiance',
    title: 'Solar Irradiance Forecasting',
    description: 'Hybrid LSTM+CNN architecture to forecast solar events using 200GB+ of multi-sensor satellite raster data for the Indian Space Research Organisation (ISRO).',
    stack: ['PyTorch', 'OpenCV', 'SciPy', 'CUDA'],
    outcome: 'Outperformed baseline ARIMA/SARIMA models by 40% during high-fluctuation weather events.',
    link: 'https://docs.google.com/document/d/1b1HilH_0Ng_UYp0jWPxDoLoTEweULtL-/edit',
    github: 'https://github.com/dhruvbhavsar0612'
  },
  {
    id: 'healthcare-crm',
    title: 'Healthcare CRM AI Copilot',
    description: 'Recommendation engine and RAG-based AI assistant enabling natural language queries across healthcare databases.',
    stack: ['FastAPI', 'Elasticsearch', 'PostgreSQL', 'AWS'],
    outcome: 'Improved matching accuracy by 35% using DBSCAN clustering and fine-tuned embeddings.',
    link: '#',
    github: 'https://github.com/dhruvbhavsar0612'
  }
];

export default function SlideProjects() {
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const activeProject = PROJECTS[activeProjectIndex];

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-8 py-8">
      {/* Left Rail - Project List */}
      <div className="w-full md:w-1/3 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-[#D4D4D8] dark:border-[#23252A] pb-6 md:pb-0 md:pr-6">
        <h2 className="text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase mb-4">Featured Work</h2>
        {PROJECTS.map((project, index) => {
          const isActive = index === activeProjectIndex;
          return (
            <button
              key={project.id}
              onClick={() => setActiveProjectIndex(index)}
              className={`text-left px-4 py-4 rounded-lg transition-all ${
                isActive 
                  ? 'bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] text-[#0B0B0C] dark:text-[#F5F5F4]' 
                  : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] hover:bg-white/50 dark:hover:bg-[#111214]/50 border border-transparent'
              }`}
            >
              <div className="text-xs mb-1 opacity-60">0{index + 1}</div>
              <div className="font-medium">{project.title}</div>
            </button>
          );
        })}
      </div>

      {/* Main Panel - Project Details */}
      <div className="w-full md:w-2/3 flex flex-col justify-center relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{activeProject.title}</h3>
              <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl">
                {activeProject.description}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#D4D4D8] dark:border-[#23252A] pt-8">
              <div className="space-y-2">
                <div className="text-xs text-[#52525B] dark:text-[#A1A1AA] uppercase tracking-wider">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="text-sm">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <div className="text-xs text-[#52525B] dark:text-[#A1A1AA] uppercase tracking-wider">Outcome</div>
                <div className="text-sm leading-relaxed">{activeProject.outcome}</div>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              {activeProject.link !== '#' && (
                <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
                  <ExternalLink size={16} /> Live Demo
                </a>
              )}
              {activeProject.github !== '#' && (
                <a href={activeProject.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-[#52525B] dark:hover:text-[#A1A1AA] transition-colors">
                  <Github size={16} /> Source Code
                </a>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
