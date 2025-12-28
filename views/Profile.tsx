import React from 'react';
import { motion } from 'framer-motion';
import { profile } from '../data';

const Profile: React.FC = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-32 px-6 md:px-12 flex flex-col justify-center items-center pb-24"
    >
      <div className="max-w-2xl w-full">
        <h1 className="sr-only">Profile</h1>
        
        <div className="mb-16 md:mb-24">
          <p className="text-lg md:text-2xl leading-relaxed font-light text-neutral-800 antialiased">
            {profile.bio}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-neutral-100 pt-12">
          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Education</h3>
            <ul className="space-y-4 text-sm font-light text-neutral-600">
              <li className="flex flex-col">
                <span className="text-neutral-900 font-normal">M.Sc. Interior & Spatial Design</span>
                <span>Politecnico di Milano</span>
                <span className="text-neutral-400 text-xs mt-1">2023 — 2025</span>
              </li>
              <li className="flex flex-col">
                <span className="text-neutral-900 font-normal">Bachelor of Architecture</span>
                <span>India</span>
                <span className="text-neutral-400 text-xs mt-1">2015 — 2020</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Contact</h3>
            <ul className="space-y-4 text-sm font-light text-neutral-600">
              <li className="flex flex-col">
                <span className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${profile.contact.email}`} className="hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-200 w-max">
                  {profile.contact.email}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Phone</span>
                <a href={`tel:${profile.contact.phone.replace(/\s/g, '')}`} className="hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-200 w-max">
                  {profile.contact.phone}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-neutral-400 text-xs uppercase tracking-wider mb-1">Base</span>
                <span>{profile.contact.location}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;