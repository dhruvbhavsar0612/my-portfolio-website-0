'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar } from 'lucide-react';

const EXPERIENCES = [
  {
    id: 'sde2',
    role: 'SDE 2, AI & Data Science',
    company: 'Wappnet Systems',
    location: 'Ahmedabad, India',
    period: 'Jan 2025 — Present',
    bullets: [
      'Lead a team of 6–7 AI engineers: plan system architecture from client requirements, conduct code reviews, manage client communication across the full delivery cycle, and drive adoption of AI-assisted development (Claude Code, Codex, GitHub Copilot) across the department.',
      'Deployed voice AI agents for pharmacy clients handling 500+ inbound calls daily: answer general queries, check refill availability, escalate to staff, and act as real-time multilingual mediators on contact-centre calls; reduced reception call volume by 70%.',
      'Developed an AI frontdesk: businesses connect documents, websites, or Google Places data to a deployable chat widget resolving repetitive queries at point of contact; onboarded 20+ customers on a live voice-enabled plan.',
      'Built maritime routing API for the Finnish government: Contraction Hierarchies on a 50,000+ node graph cut query latency from 2 s to under 100 ms (p99); MVP accepted for patent filing under Finnish regulations.',
    ],
  },
  {
    id: 'ai-engineer',
    role: 'AI Engineer',
    company: 'Wappnet Systems',
    location: 'Ahmedabad, India',
    period: 'Jul 2024 — Dec 2024',
    subtitle: 'Employee of the Year 2024 · 4× Quarterly Awards',
    bullets: [
      'Architected osora.ai enterprise agentic copilot on AWS Bedrock: multi-agent state machine with Redis for active memory and PostgreSQL for long-term recall, reducing token consumption by 63% via separated Reasoning and IO agents, with custom MCP servers for Slack, Jira, Notion, Google Workspace, and Outlook.',
      'Delivered nolea.ai healthcare CRM copilot: fine-tuned embedding models with GPU-accelerated collaborative filtering on Elasticsearch, plus a RAG assistant for natural-language queries across the healthcare database.',
    ],
  },
  {
    id: 'data-intern',
    role: 'Data Engineering Intern',
    company: 'Wappnet Systems',
    location: 'Ahmedabad, India',
    period: 'Jan 2024 — Jun 2024',
    bullets: [
      'Engineered 53 Apache Airflow DAGs to ingest and transform multi-source healthcare records into production-ready profiles; implemented DBSCAN geographic clustering for daily recommendations, improving match accuracy by 35%.',
      'Built the team\'s first RAG system using Approximate Nearest Neighbor search over people profiles; deployed auto-scaling geocoding service on AWS Lambda using Polars and PySpark.',
    ],
  },
  {
    id: 'isro-intern',
    role: 'Research Intern',
    company: 'Indian Space Research Organisation (ISRO)',
    location: 'Ahmedabad, India',
    period: 'Oct 2023 — Jan 2024',
    bullets: [
      'Trained an LSTM+CNN hybrid model for solar insolation prediction fusing 23 satellite sensor instruments, outperforming ARIMA/SARIMA baselines by 40% during high-fluctuation weather events.',
      'Engineered the full ETL pipeline over 200 GB+ of satellite raster archives and deployed a continuous retraining pipeline with NVIDIA CuDNN for zero-intervention production updates.',
    ],
  },
];

export default function SlideExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = EXPERIENCES[activeIndex];

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-8 py-8">
      <div className="w-full md:w-1/3 flex flex-col gap-2 border-b md:border-b-0 md:border-r border-[#D4D4D8] dark:border-[#23252A] pb-6 md:pb-0 md:pr-6">
        <h2 className="text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase mb-4">Experience</h2>
        {EXPERIENCES.map((exp, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={exp.id}
              onClick={() => setActiveIndex(index)}
              className={`text-left px-4 py-4 rounded-lg transition-all ${
                isActive
                  ? 'bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] text-[#0B0B0C] dark:text-[#F5F5F4]'
                  : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] hover:bg-white/50 dark:hover:bg-[#111214]/50 border border-transparent'
              }`}
            >
              <div className="text-xs mb-1 opacity-60">{exp.period}</div>
              <div className="font-medium">{exp.role}</div>
              <div className="text-xs mt-1 opacity-70">{exp.company}</div>
            </button>
          );
        })}
      </div>

      <div className="w-full md:w-2/3 flex flex-col justify-center relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">{active.role}</h3>
              <p className="text-lg text-[#52525B] dark:text-[#A1A1AA]">{active.company}</p>
              {'subtitle' in active && active.subtitle && (
                <p className="text-sm text-[#52525B] dark:text-[#A1A1AA] mt-1 italic">{active.subtitle}</p>
              )}
            </div>

            <div className="flex gap-6 text-sm text-[#52525B] dark:text-[#A1A1AA]">
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {active.period}</span>
              <span className="flex items-center gap-1.5"><MapPin size={14} /> {active.location}</span>
            </div>

            <ul className="space-y-4 border-t border-[#D4D4D8] dark:border-[#23252A] pt-8">
              {active.bullets.map((bullet, i) => (
                <li key={i} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#52525B] dark:bg-[#A1A1AA] shrink-0" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
