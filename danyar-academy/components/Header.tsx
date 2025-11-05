'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4" role="navigation" aria-label="Main navigation">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <BookOpen size={32} className="text-green-500" />
            <span>Danyar Academy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/#courses" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Courses
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              About
            </Link>
            <Link href="/instructors" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Instructors
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors">
              Contact
            </Link>
            <Link
              href="/#courses"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              href="/#courses"
              className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/instructors"
              className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Instructors
            </Link>
            <Link
              href="/blog"
              className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/#courses"
              className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
