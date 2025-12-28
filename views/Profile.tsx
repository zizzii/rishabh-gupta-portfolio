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
          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Education</h3>
              <div className="pl-4 border-l border-neutral-200">
                <ul className="space-y-4 text-sm font-light text-neutral-600">
                  {profile.education.map((edu, index) => (
                    <li key={index} className="flex flex-col">
                      {edu.degree && (
                        <span className="text-neutral-900 font-normal">{edu.degree}</span>
                      )}
                      <span>{edu.institution}</span>
                      <span className="text-neutral-400 text-xs mt-1">{edu.dates}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Extra Curriculars</h3>
              <div className="pl-4 border-l border-neutral-200">
                <ul className="space-y-4 text-sm font-light text-neutral-600">
                  {profile.extraCurriculars.map((extra, index) => (
                    <li key={index} className="flex flex-col">
                      <span className="text-neutral-900 font-normal">{extra.title}</span>
                      {(extra.dates || extra.year) && (
                        <span className="text-neutral-400 text-xs mt-1">
                          {extra.dates || extra.year}
                        </span>
                      )}
                      {extra.description && (
                        <span className="text-neutral-600 text-xs mt-2 leading-relaxed">
                          {extra.description}
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-neutral-400 mb-6">Experience</h3>
              
              <div className="pl-4 border-l border-neutral-200 space-y-10">
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Internships</h4>
                  <ul className="space-y-4 text-sm font-light text-neutral-600">
                    {profile.internships.map((internship, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="text-neutral-900 font-normal">{internship.company}</span>
                        {(internship.dates || internship.year) && (
                          <span className="text-neutral-400 text-xs mt-1">
                            {internship.dates || internship.year}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Professional Experience</h4>
                  <ul className="space-y-4 text-sm font-light text-neutral-600">
                    {profile.professionalExperience.map((exp, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="text-neutral-900 font-normal">{exp.company}</span>
                        {(exp.dates || exp.year) && (
                          <span className="text-neutral-400 text-xs mt-1">
                            {exp.dates || exp.year}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs uppercase tracking-wider text-neutral-500 mb-4">Self-Employment</h4>
                  <ul className="space-y-4 text-sm font-light text-neutral-600">
                    {profile.selfEmployment.map((exp, index) => (
                      <li key={index} className="flex flex-col">
                        <span className="text-neutral-900 font-normal">{exp.company}</span>
                        {(exp.dates || exp.year) && (
                          <span className="text-neutral-400 text-xs mt-1">
                            {exp.dates || exp.year}
                          </span>
                        )}
                        {exp.description && (
                          <span className="text-neutral-600 text-xs mt-2 leading-relaxed">
                            {exp.description}
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;