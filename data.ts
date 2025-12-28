import { Project, Profile } from './types';

// Helper function to get image URL for Vite
// Vite will process these paths correctly when images exist
function getImageUrl(relativePath: string): string {
  return new URL(relativePath, import.meta.url).href;
}

export const projects: Project[] = [
  {
    slug: "nirvaan",
    title: "NIRVAAN",
    category: "Residential",
    year: "2023",
    location: "Hyderabad, India",
    description: "A penthouse in the Deccan region embodying a super minimalist approach. A muted color palette combined with tactile materials enhances the sensory experience.",
    thumbnail: getImageUrl('../assets/images/nirvaan/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/nirvaan/image-1.jpg'),
      getImageUrl('../assets/images/nirvaan/image-2.jpg'),
      getImageUrl('../assets/images/nirvaan/image-3.jpg'),
    ]
  },
  {
    slug: "svara",
    title: "SVARA",
    category: "Residential",
    year: "2023",
    location: "Kanpur, India",
    description: "A five-room penthouse designed with a vibrant palette and Indian art forms. Interiors seamlessly integrate green spaces with strategically placed glass doors.",
    thumbnail: getImageUrl('../assets/images/svara/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/svara/image-1.jpg'),
      getImageUrl('../assets/images/svara/image-2.jpg'),
      getImageUrl('../assets/images/svara/image-3.jpg'),
    ]
  },
  {
    slug: "stories-pavilion",
    title: "STORIES: PARALYMPIC PAVILION",
    category: "College Work",
    year: "2024",
    location: "Milan, Italy",
    description: "A pavilion for the Milano-Cortina 2026 Winter Olympic Games dedicated to the Paralympic spirit, situated in Parco Sempione.",
    thumbnail: getImageUrl('../assets/images/stories-pavilion/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/stories-pavilion/image-1.jpg'),
      getImageUrl('../assets/images/stories-pavilion/image-2.jpg'),
      getImageUrl('../assets/images/stories-pavilion/image-3.jpg'),
    ]
  },
  {
    slug: "tattva",
    title: "TATTVA",
    category: "Residential",
    year: "2024",
    location: "Kanpur, India",
    description: "Capturing the balance between a free-spirited ambiance and a deep connection to nature. A harmonious dialogue between tradition and modern design.",
    thumbnail: getImageUrl('../assets/images/tattva/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/tattva/image-1.jpg'),
      getImageUrl('../assets/images/tattva/image-2.jpg'),
      getImageUrl('../assets/images/tattva/image-3.jpg'),
    ]
  },
  {
    slug: "lake-house",
    title: "LAKE HOUSE RENOVATION",
    category: "Internship (RP Interiors)",
    year: "2025",
    location: "Liguria, Italy",
    description: "An intimate spatial experience integrating wood and glass. Mirrors visually expand the interior, enhancing depth and openness.",
    thumbnail: getImageUrl('../assets/images/lake-house/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/lake-house/image-1.jpg'),
      getImageUrl('../assets/images/lake-house/image-2.jpg'),
      getImageUrl('../assets/images/lake-house/image-3.jpg'),
    ]
  },
  {
    slug: "earth-and-aether",
    title: "EARTH AND AETHER",
    category: "Competition",
    year: "2025",
    location: "Conceptual",
    description: "An amphitheater imagined as a spiritual journey. An inverted metal-mesh dome and reflecting water pool create a dialogue between soul and nature.",
    thumbnail: getImageUrl('../assets/images/earth-and-aether/thumbnail.jpg'),
    gallery: [
      getImageUrl('../assets/images/earth-and-aether/image-1.jpg'),
      getImageUrl('../assets/images/earth-and-aether/image-2.jpg'),
      getImageUrl('../assets/images/earth-and-aether/image-3.jpg'),
    ]
  }
];

export const profile: Profile = {
  name: "Rishabh Gupta",
  bio: "I'm Rishabh Gupta, an architect and Interior and spatial designer driven by the desire to craft spaces that resonate with emotion and purpose. Currently pursuing a Master of Science in Interior and Spatial Design at Politecnico di Milano (2023-2025). Previously: Bachelor of Architecture (2015-2020).",
  contact: {
    email: "rishabh.gupta@mail.polimi.it",
    phone: "+39 351 372 6677",
    location: "Milan, Italy"
  },
  education: [
    {
      institution: "Swaraj India Public School",
      dates: "2000–2015"
    },
    {
      institution: "Babu Banarasi Das University",
      degree: "Bachelor of Architecture (B.Arch)",
      dates: "2015–2020"
    },
    {
      institution: "Politecnico di Milano",
      degree: "Master of Science (M.Sc) in Interior and Spatial Design",
      dates: "2023–2025"
    }
  ],
  extraCurriculars: [
    {
      title: "National Association of Students of Architecture (NASA), India",
      year: "2017"
    },
    {
      title: "Annual NASA Design Competition (ANDC)",
      year: "2017"
    },
    {
      title: "NSS & UNICEF Programs",
      dates: "2016–2021"
    },
    {
      title: "International Architectural Competitions & Workshops",
      dates: "2020–2025"
    },
    {
      title: "IASDR Design Congress & Digital Design Days",
      year: "2024"
    },
    {
      title: "Erasmus Workshops & Exchange Enhance Programs",
      dates: "2023–2025",
      description: "Attended multiple workshops across European countries under Erasmus initiatives, gaining cross-cultural design exposure and collaboration experience."
    }
  ],
  internships: [
    {
      company: "Future Construction",
      year: "2016"
    },
    {
      company: "NECL (A Unit of National Building Construction Corporation)",
      dates: "2018–2019"
    },
    {
      company: "R.P. Interior Design S.a.s., Milan",
      year: "2025"
    }
  ],
  professionalExperience: [
    {
      company: "Lomos Enterprise",
      dates: "2020–2021"
    },
    {
      company: "Intaglio",
      year: "2021"
    }
  ],
  selfEmployment: [
    {
      company: "VEUM Atelier",
      dates: "2021–2025",
      description: "Co-founded an architectural and design firm. Led and executed over 10 theme-based interior projects — residential, commercial, and industrial — from conceptual sketches to final handover, integrating diverse design styles and client requirements."
    }
  ]
};