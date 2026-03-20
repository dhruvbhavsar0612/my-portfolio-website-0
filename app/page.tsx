import PortfolioShell from '@/components/PortfolioShell';

export default function Home() {
  return (
    <main className="h-[100dvh] w-screen overflow-hidden selection:bg-[#D4D4D8] dark:selection:bg-[#23252A] selection:text-[#0B0B0C] dark:selection:text-[#F5F5F4]">
      <PortfolioShell />
    </main>
  );
}
