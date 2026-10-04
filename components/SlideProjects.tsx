'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github, Play, X } from 'lucide-react';

type ProjectOrigin = 'personal' | 'experience';

type Project = {
  id: string;
  title: string;
  origin: ProjectOrigin;
  /** Where it lived: independent product, or employer and role. */
  context: string;
  description: string;
  highlights: string[];
  stack: string[];
  outcome: string;
  link: string;
  github: string;
  linkLabel?: string;
  youtube?: string;
  demoVideo?: string;
  demoPoster?: string;
  demoCaption?: string;
};

const ORIGIN_LABEL: Record<ProjectOrigin, string> = {
  personal: 'Personal',
  experience: 'From experience',
};

const PROJECTS: Project[] = [
  {
    id: 'browser-agent',
    title: 'browser-agent',
    origin: 'personal',
    context: 'Independent product',
    description: 'BYOK Chrome extension that acts on the web like a user — a streaming agent loop with permission-gated click and type, settings UX, remote MCP, and an encrypted vault for keys and OAuth.',
    highlights: [
      'Bring-your-own-key agent that reads the page and acts only after permission-gated click and type.',
      'Settings UX, remote MCP, and an encrypted vault for API keys and OAuth.',
      'Act and browse agents, session compaction, and a CI-built install zip.',
    ],
    stack: ['TypeScript', 'React', 'Chrome MV3', 'MCP'],
    outcome: 'v0.5.1 on GitHub Releases. Built as a product surface, not a notebook.',
    link: 'https://github.com/dhruvbhavsar0612/browser-agent/releases/latest',
    linkLabel: 'Latest Release',
    github: 'https://github.com/dhruvbhavsar0612/browser-agent',
    demoVideo: '/demos/browser-agent-launch.mp4',
    demoPoster: '/demos/browser-agent-launch-poster.png',
    demoCaption: 'Launch walkthrough — act & browse agents on the live web',
  },
  {
    id: 'teleai',
    title: 'TeleAI Indic',
    origin: 'personal',
    context: 'Independent product',
    description: 'Asymmetric voice AI platform: a person speaks, and the model answers in real time with concise written output only.',
    highlights: [
      'Speech in, text out — built on the idea that speaking is faster than typing, while reading is faster than listening.',
      'Separate voice and chat surfaces at voice.teleai.tech and chat.teleai.tech.',
      'Deployed on AWS with GitHub Actions CI/CD.',
    ],
    stack: ['Python', 'FastAPI', 'OpenAI Realtime', 'Twilio', 'React'],
    outcome: 'Live voice and chat products, not a local demo.',
    link: 'https://teleai.tech',
    github: '#',
    youtube: 'Iuzq0llaz78',
  },
  {
    id: 'fastapi-smith',
    title: 'fastapi-smith',
    origin: 'personal',
    context: 'Open source',
    description: 'CLI that scaffolds a production-ready FastAPI project and ships versioned releases to PyPI.',
    highlights: [
      'Generates a FastAPI service with project conventions already in place.',
      'Release flow publishes versioned packages to PyPI through GitHub Actions.',
    ],
    stack: ['Python', 'PyPI', 'GitHub Actions'],
    outcome: 'Published on PyPI for scaffolding FastAPI projects.',
    link: 'https://pypi.org/project/fastapi-smith/',
    github: 'https://github.com/dhruvbhavsar0612/fastsql-project-setup',
  },
  {
    id: 'rustlette',
    title: 'rustlette',
    origin: 'personal',
    context: 'Open source',
    description: 'Starlette-inspired ASGI framework. Phase 1 is a pure-Python reimplementation, with a later path toward Rust acceleration.',
    highlights: [
      'Reimplements the ASGI surface in Python first, so the framework shape is usable before any native code.',
      'Rust acceleration is planned and not wired yet — benchmarks are still open.',
    ],
    stack: ['Python', 'Rust'],
    outcome: 'Public exploration of ASGI internals.',
    link: '#',
    github: 'https://github.com/dhruvbhavsar0612/rustlette',
  },
  {
    id: 'maritime-routing',
    title: 'Maritime Routing Engine',
    origin: 'experience',
    context: 'Wappnet Systems · SDE 2, AI & Data Science',
    description: 'Navigation API that computes optimal sea routes on a 50,000+ node graph for the Finnish government.',
    highlights: [
      'Contraction Hierarchies and Dijkstra over a 50,000+ node maritime graph.',
      'Shipped as an API while leading AI engineering at Wappnet Systems.',
      'MVP completed and accepted for patent filing under Finnish regulations.',
    ],
    stack: ['Python', 'FastAPI', 'GeoPandas', 'NetworkX'],
    outcome: 'Query latency from 2s to under 100ms (p99).',
    link: '#',
    github: '#',
  },
  {
    id: 'solar-irradiance',
    title: 'Solar Irradiance Forecasting',
    origin: 'experience',
    context: 'ISRO · Research Intern · Oct 2023 — Jan 2024',
    description: 'LSTM+CNN forecast of solar insolation from multi-sensor satellite archives at the Indian Space Research Organisation.',
    highlights: [
      'Hybrid model trained on 23 satellite sensor instruments.',
      'ETL over 200GB+ of raster archives, plus a continuous retraining pipeline on NVIDIA CuDNN.',
      'Production updates ran without manual intervention once the pipeline was in place.',
    ],
    stack: ['PyTorch', 'OpenCV', 'SciPy', 'CUDA'],
    outcome: 'Beat ARIMA/SARIMA baselines by 40% in high-fluctuation weather.',
    link: 'https://docs.google.com/document/d/1b1HilH_0Ng_UYp0jWPxDoLoTEweULtL-/edit',
    linkLabel: 'Write-up',
    github: '#',
  },
  {
    id: 'healthcare-crm',
    title: 'Healthcare CRM AI Copilot',
    origin: 'experience',
    context: 'Wappnet Systems · nolea.ai',
    description: 'Healthcare CRM copilot: a recommendation engine and a RAG assistant for natural-language questions over the database.',
    highlights: [
      'As AI Engineer, shipped nolea.ai: fine-tuned embeddings and GPU-accelerated collaborative filtering on Elasticsearch, plus a RAG assistant.',
      'As Data Engineering Intern on the same domain, built 53 Airflow DAGs into production-ready profiles and the team’s first RAG over people profiles.',
      'DBSCAN geographic clustering for daily recommendations improved match accuracy by 35%.',
    ],
    stack: ['FastAPI', 'Elasticsearch', 'PostgreSQL', 'AWS'],
    outcome: 'Matching accuracy up 35%, with a live copilot for natural-language queries.',
    link: '#',
    github: '#',
  },
];

const FILTERS: { id: 'all' | ProjectOrigin; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'personal', label: 'Personal' },
  { id: 'experience', label: 'From experience' },
];

function ProjectDemoVideo({
  src,
  poster,
  title,
  caption,
}: {
  src: string;
  poster?: string;
  title: string;
  caption?: string;
}) {
  const [modalOpen, setModalOpen] = useState(false);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

  const closeModal = useCallback(() => {
    modalVideoRef.current?.pause();
    setModalOpen(false);
  }, []);

  useEffect(() => {
    if (!modalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen, closeModal]);

  const videoShellClass =
    'w-full aspect-video rounded-lg overflow-hidden border border-[#D4D4D8] dark:border-[#23252A] bg-[#0B0B0C] shadow-sm';

  return (
    <div className="space-y-2 max-w-2xl w-full">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        {caption && (
          <p className="text-xs text-[#52525B] dark:text-[#A1A1AA] uppercase tracking-wider">{caption}</p>
        )}
        <button
          type="button"
          onClick={() => setModalOpen(true)}
          className="inline-flex items-center gap-1.5 text-xs font-medium text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] transition-colors self-start sm:self-auto"
        >
          <Play size={14} aria-hidden />
          Expand demo
        </button>
      </div>

      {/* Inline preview — native controls; expand opens modal on small viewports */}
      <div className={`${videoShellClass} hidden sm:block`}>
        <video
          className="w-full h-full object-contain"
          controls
          playsInline
          preload="metadata"
          poster={poster}
          src={src}
        />
      </div>

      <button
        type="button"
        onClick={() => setModalOpen(true)}
        className={`${videoShellClass} sm:hidden relative group text-left`}
        aria-label={`Watch ${title} demo`}
      >
        {poster ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={poster} alt="" className="w-full h-full object-cover opacity-90" />
        ) : (
          <div className="w-full h-full bg-[#111214]" />
        )}
        <span className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
          <span className="flex items-center gap-2 rounded-full bg-white/95 dark:bg-[#111214]/95 px-4 py-2 text-sm font-medium text-[#0B0B0C] dark:text-[#F5F5F4] border border-[#D4D4D8] dark:border-[#23252A]">
            <Play size={16} fill="currentColor" aria-hidden />
            Watch demo
          </span>
        </span>
      </button>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${title} demo`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={closeModal}
                className="absolute -top-10 right-0 sm:-right-2 flex items-center gap-1 text-sm text-[#F5F5F4] hover:text-white transition-colors"
                aria-label="Close demo"
              >
                <X size={18} aria-hidden />
                Close
              </button>
              <div className={`${videoShellClass} border-[#23252A]`}>
                <video
                  ref={modalVideoRef}
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  autoPlay
                  preload="metadata"
                  poster={poster}
                  src={src}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SlideProjects() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]['id']>('all');
  const [activeId, setActiveId] = useState(PROJECTS[0].id);

  const visibleProjects = PROJECTS.filter((project) => filter === 'all' || project.origin === filter);
  const activeProject = visibleProjects.find((project) => project.id === activeId) ?? visibleProjects[0];

  const selectFilter = (next: (typeof FILTERS)[number]['id']) => {
    setFilter(next);
    const visible = PROJECTS.filter((project) => next === 'all' || project.origin === next);
    if (!visible.some((project) => project.id === activeId) && visible[0]) {
      setActiveId(visible[0].id);
    }
  };

  const groups: { key: string; label: string; items: Project[] }[] =
    filter === 'all'
      ? [
          { key: 'personal', label: 'Personal', items: visibleProjects.filter((project) => project.origin === 'personal') },
          { key: 'experience', label: 'From experience', items: visibleProjects.filter((project) => project.origin === 'experience') },
        ]
      : [{ key: filter, label: ORIGIN_LABEL[filter], items: visibleProjects }];

  return (
    <div className="w-full h-full flex flex-col md:flex-row gap-6 md:gap-8 py-8">
      {/* Left Rail - Project List */}
      <div className="w-full md:w-[34%] md:sticky md:top-0 md:self-start md:max-h-full md:overflow-y-auto flex flex-col gap-4 md:border-r border-[#D4D4D8] dark:border-[#23252A] pb-2 md:pb-0 md:pr-6 shrink-0">
        <div className="space-y-3">
          <h2 className="hidden md:block text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase">Projects</h2>
          <p className="hidden md:block text-xs leading-relaxed text-[#52525B] dark:text-[#A1A1AA]">
            Personal is work I own — products and open source. From experience is work shipped at Wappnet and ISRO.
          </p>
          <div className="flex gap-2 overflow-x-auto" role="tablist" aria-label="Filter projects">
            {FILTERS.map((item) => {
              const selected = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => selectFilter(item.id)}
                  className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    selected
                      ? 'bg-[#0B0B0C] dark:bg-[#F5F5F4] text-[#F5F5F4] dark:text-[#0B0B0C] border-transparent'
                      : 'bg-white dark:bg-[#111214] border-[#D4D4D8] dark:border-[#23252A] text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row md:flex-col gap-3 md:gap-4 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory md:snap-none">
          {groups.map((group) => (
            <div key={group.key} className="contents md:flex md:flex-col md:gap-2">
              <div className="shrink-0 self-center md:self-auto text-[11px] font-bold tracking-widest uppercase text-[#52525B] dark:text-[#A1A1AA] px-1 md:px-1 md:pt-1">
                {group.label}
              </div>
              {group.items.map((project) => {
                const index = PROJECTS.findIndex((item) => item.id === project.id);
                const isActive = project.id === activeProject.id;
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => setActiveId(project.id)}
                    className={`text-left px-4 py-3 md:py-3.5 rounded-lg transition-all shrink-0 snap-start w-[75vw] md:w-auto ${
                      isActive
                        ? 'bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] text-[#0B0B0C] dark:text-[#F5F5F4]'
                        : 'text-[#52525B] dark:text-[#A1A1AA] hover:text-[#0B0B0C] dark:hover:text-[#F5F5F4] hover:bg-white/50 dark:hover:bg-[#111214]/50 border border-transparent'
                    }`}
                  >
                    <div className="text-xs mb-1 opacity-60">0{index + 1}</div>
                    <div className="font-medium whitespace-nowrap md:whitespace-normal">{project.title}</div>
                    <div className="text-xs mt-1 opacity-70 whitespace-nowrap md:whitespace-normal">{project.context}</div>
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Main Panel - Project Details */}
      <div className="w-full md:flex-1 flex flex-col justify-start relative min-h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col space-y-6"
          >
            <div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-3">
                <span
                  className={`text-[11px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded-full border ${
                    activeProject.origin === 'personal'
                      ? 'border-[#0B0B0C] dark:border-[#F5F5F4] text-[#0B0B0C] dark:text-[#F5F5F4]'
                      : 'border-[#D4D4D8] dark:border-[#23252A] bg-white dark:bg-[#111214] text-[#52525B] dark:text-[#A1A1AA]'
                  }`}
                >
                  {ORIGIN_LABEL[activeProject.origin]}
                </span>
                <span className="text-sm text-[#52525B] dark:text-[#A1A1AA]">{activeProject.context}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{activeProject.title}</h3>
              <p className="text-lg text-[#52525B] dark:text-[#A1A1AA] leading-relaxed max-w-2xl">
                {activeProject.description}
              </p>
            </div>

            <ul className="space-y-3 max-w-2xl">
              {activeProject.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#52525B] dark:bg-[#A1A1AA] shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {activeProject.demoVideo && (
              <ProjectDemoVideo
                src={activeProject.demoVideo}
                poster={activeProject.demoPoster}
                title={activeProject.title}
                caption={activeProject.demoCaption}
              />
            )}

            {activeProject.youtube && (
              <div className="max-w-lg w-full aspect-video rounded-lg overflow-hidden border border-[#D4D4D8] dark:border-[#23252A]">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeProject.youtube}`}
                  title={`${activeProject.title} demo`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  className="w-full h-full"
                />
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#D4D4D8] dark:border-[#23252A] pt-6">
              <div className="space-y-3">
                <div className="text-xs text-[#52525B] dark:text-[#A1A1AA] uppercase tracking-wider">Stack</div>
                <div className="flex flex-wrap gap-2">
                  {activeProject.stack.map(tech => (
                    <span key={tech} className="px-2.5 py-1 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] rounded-md text-sm">
                      {tech}
                    </span>
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
                  <ExternalLink size={16} /> {activeProject.linkLabel ?? 'Live Demo'}
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
