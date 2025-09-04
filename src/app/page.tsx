import dynamic from 'next/dynamic';
import InfiniteGallery from '@/components/InfiniteGallery';
import GradientBlur from '@/components/GradientBlur';
import WorkPrinciples from '@/components/WorkPrinciples';
import CompanyLogos from '@/components/CompanyLogos';
import SayHiButton from '@/components/SayHiButton';
import { galleryItems } from '@/data/galleryData';
// Defer non-critical client components to shrink main chunk
const Stars = dynamic(() => import('@/components/Stars'), { ssr: false });
const ScrollToTop = dynamic(() => import('@/components/ScrollToTop'), { ssr: false });
const FloatingMenu = dynamic(() => import('@/components/FloatingMenu'), { ssr: false });
const ClientUpdates = dynamic(() => import('@/components/ClientUpdates'), { ssr: false });
const RevealFooter = dynamic(() => import('@/components/RevealFooter'), { ssr: false });
import { workPrinciples } from '@/data/workPrinciplesData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200 relative z-10">
      <ScrollToTop />
      <Stars />
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Main Content Container */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        {/* Header */}
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Julie Chabin</h1>
          <p className="text-true-gray-300" style={{ fontSize: '20px' }}>One head, several hats. Mostly design.</p>
        </header>

        {/* Intro */}
        <section className="w-full flex flex-col" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I help turn ideas into real, thoughtful products—easy to use, hard to ignore, and ready to grow.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Previously, I led design at Product Hunt. I created a strong user experience and brand, shaped strategy, and scaled design with a small, fast-moving remote team.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Now I work with founders to build their product&apos;s first version, raise funds, and get noticed. I also vibe code my own tools. It starts with curiosity, and always ends in learning.
          </p>
          <SayHiButton className="px-6 py-2 mt-4 btn-custom w-fit page-text rounded-full" />
        </section>
      </div>

      {/* Gallery - Full Width */}
      <section className="w-full py-16 bg-true-gray-800">
        <InfiniteGallery items={galleryItems} height="60vh" speedPxPerSec={30} />
      </section>

      {/* Main Content Container - Continued */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8 rounded-b-3xl bg-true-gray-800 mb-64" style={{ maxWidth: '600px' }}>
        {/* Company Logos */}
        <section className="w-full py-4 flex flex-col">
          <h2 className="font-normal mb-4 text-center text-true-gray-400 page-text">Teams I&apos;ve collaborated with</h2>
          <CompanyLogos />
        </section>

        {/* Work Principles */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-6 text-left text-white page-text">Work principles</h2>
          <WorkPrinciples principles={workPrinciples} />
        </section>

        {/* Updates - Client-side rendered to avoid SSR issues */}
        <ClientUpdates />
      </div>

      {/* Reveal Footer with Video Background */}
      <RevealFooter />

      {/* Progressive Blur Effect */}
      <GradientBlur />
    </div>
  );
}
