import Image from 'next/image';
import { MoveUpRight } from 'lucide-react';

interface WorkExperienceItem {
  logo: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

interface WorkExperienceProps {
  experiences: WorkExperienceItem[];
}

export default function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <div>
      <div className="space-y-2">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="flex items-center py-4 pb-6 last:border-b-0"
            style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            {/* Logo */}
            <div className="flex-shrink-0 mr-4">
              <Image 
                src={experience.logo} 
                alt={`${experience.company} logo`}
                width={48}
                height={48}
                priority={index < 2}
                sizes="48px"
                className="w-12 h-12 rounded-xs object-cover"
              />
            </div>
            
            {/* Company and Title */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-white page-text mb-1">
                {experience.company}
              </h3>
              <p className="text-true-gray-300 page-text">
                {experience.title}
              </p>
            </div>
            
            {/* Dates */}
            <div className="flex-shrink-0 text-right">
              <p className="text-true-gray-400 page-text">
                {experience.startDate} - {experience.endDate}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* View more link */}
      <div className="mt-6 text-center">
        <a 
          href="https://linkedin.com/in/juliechabin" 
          target="_blank"
          rel="noopener noreferrer"
          className="text-true-gray-400 page-text hover:text-white transition-colors inline-flex items-center gap-1 group"
        >
          View more on LinkedIn
          <MoveUpRight size={16} className="group-hover:text-white transition-colors" />
        </a>
      </div>
    </div>
  );
} 