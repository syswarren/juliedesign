import InfiniteGallery from '@/components/InfiniteGallery';
import GradientBlur from '@/components/GradientBlur';
import WorkExperience from '@/components/WorkExperience';
import Updates from '@/components/Updates';
import WorkPrinciples from '@/components/WorkPrinciples';
import FloatingMenu from '@/components/FloatingMenu';
import { galleryItems } from '@/data/galleryData';
import { workExperiences } from '@/data/workExperienceData';
import { updates } from '@/data/updatesData';
import { workPrinciples } from '@/data/workPrinciplesData';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <header className="w-full flex flex-col max-w-[600px] mx-auto" style={{ paddingTop: '100px', paddingBottom: '32px' }}>
        <h1 className="font-bold mb-1 text-white page-text">Julie Chabin</h1>
        <p className="text-true-gray-300 page-text">Product Designer</p>
      </header>

      {/* Intro */}
      <section className="w-full flex flex-col max-w-[600px] mx-auto" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
        <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
          I design digital products, lead teams, and shape strategies that drive business growth.
        </p>
        <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
          Previously, I led Product Design at Product Hunt where I was Head of Product Design from 2018 to 2023.
        </p>
        <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
          Since 2024, I work with early stage startups, helping them design their first product, raise fund and get noticed. When I'm not designing for others, I build apps for myself.
        </p>
        <a href="#contact" className="px-6 py-2 mt-4 btn-custom w-fit page-text rounded-full">Contact me</a>
      </section>

      {/* Gallery */}
      <section className="w-full py-16 bg-true-gray-800">
        <InfiniteGallery items={galleryItems} height="60vh" animationDuration={40} />
      </section>

      {/* Updates */}
      <section className="w-full py-12 flex flex-col max-w-[600px] mx-auto">
        <h2 className="font-semibold mb-4 text-left text-white page-text">Updates</h2>
        <Updates updates={updates} />
      </section>

      {/* Work Principles */}
      <section className="w-full py-12 flex flex-col max-w-[600px] mx-auto">
        <h2 className="font-semibold mb-6 text-left text-white page-text">Work principles</h2>
        <WorkPrinciples principles={workPrinciples} />
      </section>

      {/* Work Experience */}
      <section className="w-full py-12 flex flex-col max-w-[600px] mx-auto">
        <h2 className="font-semibold mb-4 text-left text-white page-text">Work experience</h2>
        <WorkExperience experiences={workExperiences} />
      </section>

      {/* Footer */}
      <footer className="w-full py-6 mt-auto flex text-true-gray-400 max-w-[600px] mx-auto" style={{ fontSize: '12px', lineHeight: '16px' }}>
        &copy; {new Date().getFullYear()} Julie Design. All rights reserved.
      </footer>

      {/* Progressive Blur Effect */}
      <GradientBlur />
    </div>
  );
}
