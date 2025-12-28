import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { projects } from '../data';
import { ArrowLeft } from 'lucide-react';
import LazyImage from '../components/LazyImage';

const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  // Generate deterministic placeholder images based on slug
  const images = [1, 2, 3, 4].map(i => `https://picsum.photos/seed/${slug}-${i}/1600/1200`);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex flex-col md:flex-row"
    >
      {/* Fixed Left Sidebar - Info */}
      <div className="w-full md:w-1/3 md:h-screen md:sticky md:top-0 md:overflow-y-auto flex flex-col bg-white z-10 no-scrollbar">
        {/* Sticky Header Section containing Title & Metadata */}
        <div className="pt-32 px-6 md:px-12 pb-12 bg-white sticky top-0 z-20">
          <Link to="/" className="inline-flex items-center text-xs tracking-widest uppercase text-neutral-400 hover:text-neutral-900 transition-colors mb-12">
            <ArrowLeft className="w-3 h-3 mr-2" /> Back to Work
          </Link>

          <h1 className="text-2xl md:text-3xl font-light uppercase tracking-wide text-neutral-900 mb-8 leading-tight">
            {project.title}
          </h1>

          <div className="grid grid-cols-2 gap-y-6 gap-x-4 text-xs tracking-widest uppercase text-neutral-500">
            <div>
              <span className="block text-neutral-300 mb-1">Year</span>
              {project.year}
            </div>
            <div>
              <span className="block text-neutral-300 mb-1">Location</span>
              {project.location}
            </div>
            <div className="col-span-2">
              <span className="block text-neutral-300 mb-1">Category</span>
              {project.category}
            </div>
          </div>
        </div>

        {/* Scrollable Description Section */}
        <div className="px-6 md:px-12 pb-12">
          <p className="text-sm leading-relaxed text-neutral-600 max-w-md font-light">
            {project.description}
          </p>
        </div>
      </div>

      {/* Scrollable Right Content - Images */}
      <div className="w-full md:w-2/3 bg-white px-6 md:px-12 pt-0 md:pt-32 pb-32">
        <div className="flex flex-col space-y-16 md:space-y-32">
          {images.map((src, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={idx}
              className="w-full bg-[#f9f9f9]"
            >
               <LazyImage 
                src={src} 
                alt={`${project.title} view ${idx + 1}`} 
                className="w-full h-auto object-cover grayscale brightness-[1.02] contrast-[0.95] transition-opacity duration-700"
              />
            </motion.div>
          ))}
        </div>
        
        {/* Next Project Link */}
        <div className="mt-32 pt-12 border-t border-neutral-100">
            {(() => {
                const currentIndex = projects.findIndex(p => p.slug === slug);
                const nextProject = projects[(currentIndex + 1) % projects.length];
                return (
                    <Link to={`/work/${nextProject.slug}`} className="group block">
                        <span className="text-xs uppercase tracking-widest text-neutral-400 mb-2 block">Next Project</span>
                        <span className="text-xl md:text-2xl font-light uppercase tracking-wide text-neutral-900 group-hover:text-neutral-500 transition-colors">
                            {nextProject.title}
                        </span>
                    </Link>
                )
            })()}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;