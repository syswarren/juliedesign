export interface WorkExperienceItem {
  logo: string;
  company: string;
  title: string;
  startDate: string;
  endDate: string;
}

export const workExperiences: WorkExperienceItem[] = [
  {
    logo: "/company-logos/coven.png",
    company: "Coven",
    title: "Design and Product advisor",
    startDate: "2023",
    endDate: "Present"
  },
  {
    logo: "/company-logos/producthunt_logo.jpeg",
    company: "Product Hunt",
    title: "Head of Product Design",
    startDate: "2018",
    endDate: "2023"
  },
  {
    logo: "/company-logos/angellist_logo.jpeg",
    company: "AngelList",
    title: "Senior Product Designer",
    startDate: "2017",
    endDate: "2018"
  },
  {
    logo: "/company-logos/tm_sf_logo.jpeg",
    company: "TM",
    title: "Senior Product Designer",
    startDate: "2015",
    endDate: "2017"
  }
]; 