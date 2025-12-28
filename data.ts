import { Project, Profile } from './types';

export const projects: Project[] = [
  {
    slug: "nirvaan",
    title: "NIRVAAN",
    category: "Residential",
    year: "2023",
    location: "Hyderabad, India",
    description: "A penthouse in the Deccan region embodying a super minimalist approach. A muted color palette combined with tactile materials enhances the sensory experience."
  },
  {
    slug: "svara",
    title: "SVARA",
    category: "Residential",
    year: "2023",
    location: "Kanpur, India",
    description: "A five-room penthouse designed with a vibrant palette and Indian art forms. Interiors seamlessly integrate green spaces with strategically placed glass doors."
  },
  {
    slug: "stories-pavilion",
    title: "STORIES: PARALYMPIC PAVILION",
    category: "College Work",
    year: "2024",
    location: "Milan, Italy",
    description: "A pavilion for the Milano-Cortina 2026 Winter Olympic Games dedicated to the Paralympic spirit, situated in Parco Sempione."
  },
  {
    slug: "tattva",
    title: "TATTVA",
    category: "Residential",
    year: "2024",
    location: "Kanpur, India",
    description: "Capturing the balance between a free-spirited ambiance and a deep connection to nature. A harmonious dialogue between tradition and modern design."
  },
  {
    slug: "lake-house",
    title: "LAKE HOUSE RENOVATION",
    category: "Internship (RP Interiors)",
    year: "2025",
    location: "Liguria, Italy",
    description: "An intimate spatial experience integrating wood and glass. Mirrors visually expand the interior, enhancing depth and openness."
  },
  {
    slug: "earth-and-aether",
    title: "EARTH AND AETHER",
    category: "Competition",
    year: "2025",
    location: "Conceptual",
    description: "An amphitheater imagined as a spiritual journey. An inverted metal-mesh dome and reflecting water pool create a dialogue between soul and nature."
  }
];

export const profile: Profile = {
  name: "Rishabh Gupta",
  bio: "I'm Rishabh Gupta, an architect and Interior and spatial designer driven by the desire to craft spaces that resonate with emotion and purpose. Currently pursuing a Master of Science in Interior and Spatial Design at Politecnico di Milano (2023-2025). Previously: Bachelor of Architecture (2015-2020).",
  contact: {
    email: "rishabh.gupta@mail.polimi.it",
    phone: "+39 351 372 6677",
    location: "Milan, Italy"
  }
};