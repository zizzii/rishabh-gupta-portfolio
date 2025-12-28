import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './views/Home';
import ProjectDetail from './views/ProjectDetail';
import Profile from './views/Profile';
import { profile } from './data';

// Helper to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="bg-white min-h-screen flex flex-col text-neutral-900 font-sans selection:bg-neutral-200 selection:text-neutral-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work/:slug" element={<ProjectDetail />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
        
        <footer className="py-24 px-6 md:px-12 border-t border-neutral-100 mt-auto bg-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            
            {/* Email Column */}
            <div className="flex flex-col">
              <span className="text-neutral-300 text-[10px] uppercase tracking-widest mb-4">Email</span>
              <a 
                href={`mailto:${profile.contact.email}`} 
                className="text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-200 w-max"
              >
                {profile.contact.email}
              </a>
            </div>

            {/* Phone Column */}
            <div className="flex flex-col">
              <span className="text-neutral-300 text-[10px] uppercase tracking-widest mb-4">Phone</span>
              <a 
                href={`tel:${profile.contact.phone.replace(/\s/g, '')}`} 
                className="text-sm font-light text-neutral-600 hover:text-neutral-900 transition-colors border-b border-transparent hover:border-neutral-200 w-max"
              >
                {profile.contact.phone}
              </a>
            </div>

            {/* Base Column */}
            <div className="flex flex-col">
              <span className="text-neutral-300 text-[10px] uppercase tracking-widest mb-4">Base</span>
              <span className="text-sm font-light text-neutral-600">
                {profile.contact.location}
              </span>
            </div>

            {/* Copyright/Role Column */}
            <div className="flex flex-col md:items-end mt-8 md:mt-0">
              <span className="text-sm font-light text-neutral-400 mb-2">Architect / Spatial Designer</span>
              <span className="text-[10px] text-neutral-300 uppercase tracking-widest">
                &copy; {new Date().getFullYear()} {profile.name}
              </span>
            </div>
            
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;