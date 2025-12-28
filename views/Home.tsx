import React from 'react';
import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';
import { projects } from '../data';
import LazyImage from '../components/LazyImage';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.05
    }
  }
};

const projectVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 40 
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
    }
  }
};

const Home: React.FC = () => {
  return (
    <div className="min-h-screen pt-32 px-6 md:px-12 pb-24">
      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24 md:gap-y-32 w-full max-w-[1800px] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((project, index) => (
          <motion.div key={project.slug} variants={projectVariants}>
            <Link 
              to={`/work/${project.slug}`}
              className="group block"
            >
              <div className="relative w-full aspect-[4/3] bg-[#f0f0f0] overflow-hidden mb-6 transition-all duration-700 ease-out group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] group-hover:-translate-y-1">
                <LazyImage 
                  src={`https://picsum.photos/seed/${project.slug}/1200/900`} 
                  alt={project.title}
                  className="w-full h-full object-cover filter grayscale contrast-[0.9] brightness-[1.05] group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-500" />
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="flex justify-between items-baseline border-b border-neutral-200 pb-2 mb-2 group-hover:border-neutral-400 transition-colors duration-500">
                  <h2 className="text-lg md:text-xl font-normal tracking-wide text-neutral-900 uppercase">
                    {project.title}
                  </h2>
                  <span className="text-xs font-medium tracking-widest text-neutral-400">
                    {project.year}
                  </span>
                </div>
                <div className="flex justify-between items-start text-xs text-neutral-500 uppercase tracking-wider">
                  <span>{project.category}</span>
                  <span>{project.location}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Home;