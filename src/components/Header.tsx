'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-600">Pure</span>
              <span className="text-2xl font-bold text-primary-800">Polish</span>
              <span className="ml-1 text-xl font-medium text-secondary-700">Cleaning</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              About
            </Link>
            <Link href="#services" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Services
            </Link>
            <Link href="#testimonials" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-secondary-700 hover:text-primary-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="btn-primary"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-secondary-700 hover:text-primary-600 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mt-4 bg-white rounded-lg shadow-soft animate-scale-in">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-secondary-700 hover:text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="#about"
                className="text-secondary-700 hover:text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#services"
                className="text-secondary-700 hover:text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className="text-secondary-700 hover:text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className="text-secondary-700 hover:text-primary-600 font-medium px-4 py-2 rounded-md hover:bg-primary-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="#contact"
                className="btn-primary w-full justify-center mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}