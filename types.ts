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

export interface Profile {
  name: string;
  bio: string;
  contact: {
    email: string;
    phone: string;
    location: string;
  };
}