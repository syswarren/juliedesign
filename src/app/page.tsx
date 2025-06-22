import InfiniteGallery from '@/components/InfiniteGallery';
import GradientBlur from '@/components/GradientBlur';
import WorkExperience from '@/components/WorkExperience';
import Updates from '@/components/Updates';
import WorkPrinciples from '@/components/WorkPrinciples';
import FloatingMenu from '@/components/FloatingMenu';
import HiddenFooter from '@/components/HiddenFooter';
import { galleryItems } from '@/data/galleryData';
import { workExperiences } from '@/data/workExperienceData';
import { updates } from '@/data/updatesData';
import { workPrinciples } from '@/data/workPrinciplesData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Main Content Container */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        {/* Header */}
        <header className="w-full flex flex-col" style={{ paddingTop: '160px', paddingBottom: '32px' }}>
          <h1 className="font-bold text-white" style={{ fontSize: '20px' }}>Julie Chabin</h1>
          <p className="text-white" style={{ fontSize: '20px' }}>One head, several hats. Mostly design.</p>
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
            Now I work with founders to shape their product's first version, raise funds, and get noticed.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I also build my own tools. It starts with curiosity, and always ends in learning.
          </p>
          <a href="#contact" className="px-6 py-2 mt-4 btn-custom w-fit page-text rounded-full">Say hi</a>
        </section>
      </div>

      {/* Gallery - Full Width */}
      <section className="w-full py-16 bg-true-gray-800">
        <InfiniteGallery items={galleryItems} height="60vh" animationDuration={60} />
      </section>

      {/* Main Content Container - Continued */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8 rounded-b-3xl bg-true-gray-800 mb-64" style={{ maxWidth: '600px' }}>
        {/* Updates */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Updates</h2>
          <Updates updates={updates} />
        </section>

        {/* Work Principles */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-6 text-left text-white page-text">Work principles</h2>
          <WorkPrinciples principles={workPrinciples} />
        </section>

        {/* Work Experience */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Work experience</h2>
          <WorkExperience experiences={workExperiences} />
        </section>
      </div>

      {/* Hidden Footer with Video Background */}
      <HiddenFooter />

      {/* Progressive Blur Effect */}
      <GradientBlur />
    </div>
  );
}
