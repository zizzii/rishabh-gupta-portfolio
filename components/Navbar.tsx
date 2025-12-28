import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { profile } from '../data';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-baseline px-6 py-6 md:px-12 md:py-8 bg-white/90 backdrop-blur-sm transition-all duration-300">
      <div className="text-sm font-medium tracking-wide uppercase text-neutral-900">
        <Link to="/" className="hover:opacity-50 transition-opacity">
          {profile.name}
        </Link>
      </div>
      
      <div className="flex space-x-8 md:space-x-12 text-xs md:text-sm font-medium tracking-widest text-neutral-500">
        <Link 
          to="/" 
          className={`hover:text-neutral-900 transition-colors uppercase ${location.pathname === '/' || location.pathname.startsWith('/work') ? 'text-neutral-900' : ''}`}
        >
          Work
        </Link>
        <Link 
          to="/profile" 
          className={`hover:text-neutral-900 transition-colors uppercase ${location.pathname === '/profile' ? 'text-neutral-900' : ''}`}
        >
          Profile
        </Link>
        <a 
          href={`mailto:${profile.contact.email}`}
          className="hover:text-neutral-900 transition-colors uppercase hidden md:inline-block"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;