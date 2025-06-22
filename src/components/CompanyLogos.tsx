export default function CompanyLogos() {
  const logos = [
    {
      name: "AngelList",
      src: "/company-logos/cloud/angellist.png",
      alt: "AngelList",
      height: "h-8",
      width: "w-32"
    },
    {
      name: "Product Hunt",
      src: "/company-logos/cloud/producthunt.svg",
      alt: "Product Hunt",
      width: "w-[150px]"
    },
    {
      name: "GitBook",
      src: "/company-logos/cloud/gitbook.svg",
      alt: "GitBook",
      width: "w-[140px]"
    },
    {
      name: "Deezer",
      src: "/company-logos/cloud/Logo_Deezer_2023.svg",
      alt: "Deezer",
      height: "h-16",
      width: "w-32"
    },
    {
      name: "Yubo",
      src: "/company-logos/cloud/yubo.svg",
      alt: "Yubo",
      height: "h-9",
      width: "w-16"
    }
  ];

  return (
    <div className="py-12">
      <div className="mx-auto flex flex-wrap justify-center items-center gap-8 max-w-lg sm:max-w-xl lg:max-w-none">
        {logos.map((logo, index) => (
          <img
            key={index}
            alt={logo.alt}
            src={logo.src}
            className={`${logo.height || ''} ${logo.width} object-contain opacity-60 hover:opacity-100 transition-opacity duration-300 brightness-0 invert`}
          />
        ))}
      </div>
    </div>
  );
} 