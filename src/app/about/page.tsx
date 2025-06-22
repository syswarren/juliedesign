import FloatingMenu from '@/components/FloatingMenu';
import WorkExperience from '@/components/WorkExperience';
import CompanyLogos from '@/components/CompanyLogos';
import { workExperiences } from '@/data/workExperienceData';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <h1 className="font-bold mb-1 text-white" style={{ fontSize: '20px' }}>About</h1>
          <p className="text-true-gray-300" style={{ fontSize: '20px' }}>Designer, builder, and product strategist</p>
        </header>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        {/* Bio */}
        <section className="w-full flex flex-col" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I'm Julie Chabin, a product designer and strategist with over 8 years of experience building digital products that people love to use.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            My journey started in 2015 when I joined Product Hunt as their first designer. Over the next 6 years, I helped scale the platform from a small startup to a global community of makers, creators, and entrepreneurs.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            At Product Hunt, I led design across all products, from the main discovery platform to mobile apps, email products, and internal tools. I worked closely with the founding team to shape product strategy, design systems, and user experience.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Since leaving Product Hunt in 2021, I've been working with early-stage startups and founders to help them build their first products, raise funding, and get noticed in crowded markets.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I believe great design is invisible—it should feel effortless and intuitive. My approach combines user research, rapid prototyping, and strategic thinking to create products that solve real problems.
          </p>
        </section>

        {/* Company Logos */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Companies I've worked with</h2>
          <CompanyLogos />
        </section>

        {/* Work Experience */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Work experience</h2>
          <WorkExperience experiences={workExperiences} />
        </section>

        {/* Skills & Expertise */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-6 text-left text-white page-text">Skills & expertise</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-medium text-white page-text mb-3">Product Design</h3>
              <p className="text-true-gray-300 paragraph-text">
                User experience design, interface design, design systems, prototyping, user research, and usability testing.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white page-text mb-3">Product Strategy</h3>
              <p className="text-true-gray-300 paragraph-text">
                Product vision, roadmap planning, feature prioritization, market analysis, and competitive research.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white page-text mb-3">Leadership</h3>
              <p className="text-true-gray-300 paragraph-text">
                Design team management, cross-functional collaboration, stakeholder communication, and mentorship.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-white page-text mb-3">Tools & Technologies</h3>
              <p className="text-true-gray-300 paragraph-text">
                Figma, Sketch, Adobe Creative Suite, HTML/CSS, JavaScript, React, and various prototyping tools.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="w-full py-12 flex flex-col">
          <h2 className="font-semibold mb-6 text-left text-white page-text">Get in touch</h2>
          <p className="mb-6 text-true-gray-300 paragraph-text">
            I'm always interested in hearing about new opportunities and interesting projects. Whether you're a founder looking for design help, a company building a product team, or just want to chat about design and products, feel free to reach out.
          </p>
          <div className="space-y-3">
            <a href="mailto:hello@juliechabin.com" className="block text-true-gray-400 page-text hover:text-white transition-colors">
              hello@juliechabin.com
            </a>
            <a href="https://twitter.com/juliechabin" className="block text-true-gray-400 page-text hover:text-white transition-colors">
              @juliechabin
            </a>
            <a href="https://linkedin.com/in/juliechabin" className="block text-true-gray-400 page-text hover:text-white transition-colors">
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
} 