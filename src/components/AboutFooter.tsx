import Image from 'next/image';

export default function AboutFooter() {
  return (
    <footer className="w-full bg-true-gray-800 pt-24 pb-[100px] relative">
      <div className="w-full flex justify-center">
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto overflow-y-hidden scrollbar-hide" style={{ minWidth: '600px' }}>
          {/* Image 1 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(-1.5deg)' }}
          >
            <Image 
              src="/about/ab_1.png" 
              alt="About image 1"
              fill
              priority
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* Image 2 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(1.8deg)' }}
          >
            <Image 
              src="/about/ab_2.png" 
              alt="About image 2"
              fill
              priority
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* Image 3 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(-0.7deg)' }}
          >
            <Image 
              src="/about/ab_3.png" 
              alt="About image 3"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* Image 4 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(1.2deg)' }}
          >
            <Image 
              src="/about/ab_4.png" 
              alt="About image 4"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* Image 5 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(-1.9deg)' }}
          >
            <Image 
              src="/about/ab_5.png" 
              alt="About image 5"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>

          {/* Image 6 */}
          <div 
            className="relative w-32 h-32 rounded-lg overflow-hidden bg-true-gray-700 flex-shrink-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-105"
            style={{ transform: 'rotate(0.3deg)' }}
          >
            <Image 
              src="/about/ab_6.png" 
              alt="About image 6"
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Styled footer message */}
      <div className="mt-16 pt-8">
        <p className="text-true-gray-400 text-xl text-center" style={{ fontFamily: '"Jacquard 12", serif', fontWeight: 'normal', textShadow: '2px -2px #000000' }}>
          Thanks for stopping by!
        </p>
      </div>
    </footer>
  );
} 