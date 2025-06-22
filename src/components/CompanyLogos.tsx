import Image from 'next/image';

export default function CompanyLogos() {
  const logos = [
    {
      name: "AngelList",
      src: "/company-logos/cloud/angellist.png",
      alt: "AngelList",
      height: "h-8",
      width: "w-32",
      imgWidth: 128,
      imgHeight: 32
    },
    {
      name: "Product Hunt",
      src: "/company-logos/cloud/producthunt.svg",
      alt: "Product Hunt",
      width: "w-[150px]",
      imgWidth: 150,
      imgHeight: 40
    },
    {
      name: "GitBook",
      src: "/company-logos/cloud/gitbook.svg",
      alt: "GitBook",
      width: "w-[140px]",
      imgWidth: 140,
      imgHeight: 40
    },
    {
      name: "Deezer",
      src: "/company-logos/cloud/Logo_Deezer_2023.svg",
      alt: "Deezer",
      height: "h-16",
      width: "w-32",
      imgWidth: 128,
      imgHeight: 64
    },
    {
      name: "Yubo",
      src: "/company-logos/cloud/yubo.svg",
      alt: "Yubo",
      height: "h-9",
      width: "w-16",
      imgWidth: 64,
      imgHeight: 36
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto flex flex-wrap justify-center items-center gap-8 max-w-lg sm:max-w-xl lg:max-w-none">
        {logos.map((logo, index) => {
          // For logos with only width class, use fill with container
          if (logo.width && !logo.height) {
            return (
              <div key={index} className={`${logo.width} relative`} style={{ height: '40px' }}>
                <Image
                  alt={logo.alt}
                  src={logo.src}
                  fill
                  className="object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert"
                />
              </div>
            );
          }
          
          // For logos with both width and height, or only height
          return (
            <Image
              key={index}
              alt={logo.alt}
              src={logo.src}
              width={logo.imgWidth}
              height={logo.imgHeight}
              className={`${logo.height || ''} ${logo.width} object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert`}
            />
          );
        })}
      </div>
    </div>
  );
} 