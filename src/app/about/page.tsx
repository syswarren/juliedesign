import type { Metadata } from 'next';
import FloatingMenu from '@/components/FloatingMenu';
import WorkExperience from '@/components/WorkExperience';
import Links from '@/components/Links';
import AboutFooter from '@/components/AboutFooter';
import GradientBlur from '@/components/GradientBlur';
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
    <div className="min-h-screen flex flex-col bg-true-gray-800 text-true-gray-200">
      {/* Floating Menu */}
      <FloatingMenu />

      {/* Header */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        <header className="w-full flex flex-col pt-20 sm:pt-32 md:pt-40" style={{ paddingBottom: '32px' }}>
          <h1 className="font-bold mb-1 text-white" style={{ fontSize: '20px' }}>Behind the work</h1>
          <p className="text-true-gray-300" style={{ fontSize: '20px' }}>15+ years of design, strategy, and getting things done.</p>
        </header>
      </div>

      {/* Main Content */}
      <div className="w-full mx-auto px-6 sm:px-6 lg:px-8" style={{ maxWidth: '600px' }}>
        {/* Bio */}
        <section className="w-full flex flex-col" style={{ paddingTop: '10px', paddingBottom: '32px' }}>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I&apos;m Julie Chabin.<br />I design digital products, shape brands, and build tools—mostly for early-stage startups where nothing exists yet, and everything needs to happen fast.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I&apos;ve spent over 15 years in tech, most notably leading Product Design at Product Hunt from 2018 to 2023. Before that, I worked at AngelList, Deezer, and other product-focused teams where I learned how to ship fast, think systemically, and keep things simple.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Today, I work as a founding product designer and advisor. I help founders define their first product, craft early brand and web presence, and get from idea to funding without wasting time on the wrong details.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Lately, I&apos;ve been working on AI-first tools—designing interfaces that balance clarity, speed, and trust in systems that learn as they go. It&apos;s a space full of hype, and I try to bring restraint, structure, and real usability into it.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Design, for me, isn&apos;t just UI. It&apos;s how a product communicates, how it feels, how it earns attention. I move between product design, web design, and brand depending on what the project needs. I don&apos;t care about silos, the goal is to ship something real.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            When I&apos;m not designing for others, I build my own tools. Mostly out of curiosity. Sometimes out of frustration. I like solving the small, annoying problems that make life harder than it needs to be.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            I live in the sunny south of France with my partner, our daughter, and our cat (yes, he&apos;s just like the Product Hunt cat). I like to read sci-fi and fantasy, watch K-dramas, and play video games when I can. I speak English and French, sometimes both in the same sentence.
          </p>
          <p className="mb-6 max-w-xl text-true-gray-200 paragraph-text">
            Want the résumé version? Check my LinkedIn. Otherwise—say hi.
          </p>
        </section>

        {/* Work Experience */}
        <section className="w-full pt-12 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Work experience</h2>
          <WorkExperience experiences={workExperiences} />
        </section>

        {/* Links */}
        <section className="w-full pt-12 pb-16 flex flex-col">
          <h2 className="font-semibold mb-4 text-left text-white page-text">Interviews & posts</h2>
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