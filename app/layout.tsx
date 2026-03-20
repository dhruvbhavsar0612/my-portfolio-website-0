import type {Metadata} from 'next';
import { Inter } from 'next/font/google';
import './globals.css'; // Global styles

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Dhruv Bhavsar - Portfolio',
  description: 'AI engineer building backend systems and product-first tools.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-[#F5F5F4] dark:bg-[#0B0B0C] text-[#0B0B0C] dark:text-[#F5F5F4] transition-colors duration-300" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
