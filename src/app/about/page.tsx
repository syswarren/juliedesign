import type { Metadata } from 'next';
import FloatingMenu from '@/components/FloatingMenu';
import WorkExperience from '@/components/WorkExperience';
import Links from '@/components/Links';
import AboutFooter from '@/components/AboutFooter';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import Stars from '@/components/Stars';
import GradientBlur from '@/components/GradientBlur';
import InteractiveBio from '@/components/InteractiveBio';
import { workExperiences } from '@/data/workExperienceData';
import { links } from '@/data/linksData';

export const metadata: Metadata = {
  title: 'About — Julie Chabin',
  description: 'Product designer with 15+ years in tech, formerly Head of Product Design at Product Hunt. Now helping early-stage startups shape their first products and brands.',
  openGraph: {
    title: 'About — Julie Chabin',
    description: 'Product designer with 15+ years in tech, formerly Head of Product Design at Product Hunt. Now helping early-stage startups shape their first products and brands.',
    url: 'https://juliechabin.com/about',
  },
  twitter: {
    title: 'About — Julie Chabin',
    description: 'Product designer with 15+ years in tech, formerly Head of Product Design at Product Hunt. Now helping early-stage startups shape their first products and brands.',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200 relative z-10">
      <Stars />
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <div className="flex items-center sm:-ml-8">
            <Link href="/" aria-label="Back to home" className="hidden sm:inline-flex text-true-gray-300 hover:text-white transition-colors cursor-pointer mr-2">
              <ChevronLeft size={24} />
            </Link>
            <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Behind the work</h1>
          </div>
          <p className="text-true-gray-300" style={{ fontSize: '20px' }}>15+ years of design, strategy, and getting things done.</p>
        </header>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        {/* Bio */}
        <section className="w-full flex flex-col" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
          <InteractiveBio />
        </section>

        {/* Work Experience */}
        <section className="w-full pt-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Work experience</h2>
          <WorkExperience experiences={workExperiences} />
        </section>

        {/* Links */}
        <section className="w-full pt-12 pb-16 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Dive into my brain</h2>
          <Links links={links} />
        </section>
      </div>

      {/* Custom Footer */}
      <AboutFooter />

      {/* Progressive Blur Effect */}
      <GradientBlur />
    </div>
  );
} 