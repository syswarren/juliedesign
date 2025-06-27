'use client'

import { useContactModal } from './ContactModalContext';

export default function InteractiveBio() {
  const { openModal } = useContactModal();

  return (
    <>
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
        Want the résumé version? <a href="https://linkedin.com/in/juliechabin" target="_blank" rel="noopener noreferrer" className="link-dotted">Check my LinkedIn</a>. Otherwise—<button onClick={openModal} className="link-dotted-button">say hi</button>.
      </p>
    </>
  );
} 