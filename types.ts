export interface Project {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  description: string;
  thumbnail: string;
  gallery: string[];
}

export interface Education {
  institution: string;
  degree?: string;
  dates: string;
}

export interface ExtraCurricular {
  title: string;
  dates?: string;
  year?: string;
  description?: string;
}

export interface Experience {
  company: string;
  dates?: string;
  year?: string;
  description?: string;
}

export interface Profile {
  name: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
  education: Education[];
  extraCurriculars: ExtraCurricular[];
  internships: Experience[];
  professionalExperience: Experience[];
  selfEmployment: Experience[];
}