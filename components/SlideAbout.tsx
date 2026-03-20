'use client';

export default function SlideAbout() {
  const skills = ['Python', 'Rust', 'TypeScript', 'C++', 'FastAPI', 'Next.js', 'PyTorch', 'TensorFlow', 'PostgreSQL', 'Redis', 'Docker', 'AWS Bedrock', 'Apache Airflow', 'Elasticsearch'];
  const interests = ['Graph Theory', 'LLM Agents', 'Computer Vision', 'Distributed Systems'];

  return (
    <div className="w-full h-full flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 w-full h-full py-8 md:py-12">
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-[#52525B] dark:text-[#A1A1AA] uppercase mb-6">About</h2>
            <p className="text-lg leading-relaxed text-[#0B0B0C] dark:text-[#F5F5F4]">
              I bridge the gap between theoretical machine learning and scalable production systems. With experience spanning from research at ISRO to architecting enterprise AI solutions at Wappnet Systems, my engineering philosophy centers on optimizing compute economics and solving high-concurrency constraints.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-24 text-sm text-[#52525B] dark:text-[#A1A1AA]">Focus</div>
              <div className="flex-1 text-sm">Agentic AI, RAG Architectures, Graph Algorithms</div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 text-sm text-[#52525B] dark:text-[#A1A1AA]">Location</div>
              <div className="flex-1 text-sm">Ahmedabad, India / Remote</div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-24 text-sm text-[#52525B] dark:text-[#A1A1AA]">Status</div>
              <div className="flex-1 text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#23252A] dark:bg-[#D4D4D8] animate-pulse"></span>
                AI Engineer at Wappnet Systems
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center space-y-10">
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map(skill => (
                <span key={skill} className="px-3 py-1.5 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] rounded-md text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-[#52525B] dark:text-[#A1A1AA]">Interests</h3>
            <div className="flex flex-wrap gap-2">
              {interests.map(interest => (
                <span key={interest} className="px-3 py-1.5 bg-white dark:bg-[#111214] border border-[#D4D4D8] dark:border-[#23252A] rounded-md text-sm text-[#52525B] dark:text-[#A1A1AA]">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
