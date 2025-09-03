import InfiniteGallery from '@/components/InfiniteGallery';
import Image from 'next/image';
import GradientBlur from '@/components/GradientBlur';
import ClientUpdates from '@/components/ClientUpdates';
import WorkPrinciples from '@/components/WorkPrinciples';
import FloatingMenu from '@/components/FloatingMenu';
import RevealFooter from '@/components/RevealFooter';
import CompanyLogos from '@/components/CompanyLogos';
import SayHiButton from '@/components/SayHiButton';
import ScrollToTop from '@/components/ScrollToTop';
import { galleryItems } from '@/data/galleryData';
import Stars from '@/components/Stars';
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
          {/* Small above-the-fold hero image (LCP candidate) */}
          <div className="mt-4">
            <Image
              src="/apple-touch-icon.png"
              alt="Julie Chabin logo"
              width={120}
              height={120}
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 25vw, 120px"
              className="rounded-md"
            />
          </div>
        </header>

        {/* Intro */}
        <section className="w-full flex flex-col" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I help turn ideas into real, thoughtful products—easy to use, hard to ignore, and ready to grow.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Previously, I led design at Product Hunt. I created features, shaped strategy, and scaled design with a small, fast-moving remote team.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Now I work with founders to shape their product&apos;s first version, raise funds, and get noticed. I also build my own tools. It starts with curiosity, and always ends in learning.
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
