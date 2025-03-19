
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-black to-gray-700">
            Genius<span className="text-primary">AI</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === '/' ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/trial" 
            className={`font-medium text-sm transition-colors hover:text-primary ${
              location.pathname === '/trial' ? 'text-primary' : 'text-foreground/80'
            }`}
          >
            Try Pro
          </Link>
          <Link 
            to="/login" 
            className="ml-2"
          >
            <Button variant="outline" size="sm" className="rounded-full px-4">
              Sign In
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass animate-fade-in absolute top-full left-0 w-full px-4 py-4">
          <nav className="flex flex-col space-y-4 items-start">
            <Link 
              to="/" 
              className={`font-medium text-sm transition-colors w-full px-4 py-2 rounded-md hover:bg-primary/10 ${
                location.pathname === '/' ? 'text-primary bg-primary/10' : 'text-foreground/80'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/trial" 
              className={`font-medium text-sm transition-colors w-full px-4 py-2 rounded-md hover:bg-primary/10 ${
                location.pathname === '/trial' ? 'text-primary bg-primary/10' : 'text-foreground/80'
              }`}
            >
              Try Pro
            </Link>
            <Link 
              to="/login" 
              className="w-full mt-2"
            >
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
