import Link from 'next/link';
import { BookOpen, Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white mb-4">
              <BookOpen size={28} className="text-green-500" />
              <span>Danyar Academy</span>
            </Link>
            <p className="text-sm mb-4">
              Empowering learners worldwide with cutting-edge computer skills and AI training for career success.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-600 p-2 rounded-full transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-400 p-2 rounded-full transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-pink-600 p-2 rounded-full transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-red-600 p-2 rounded-full transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#courses" className="hover:text-white transition-colors">All Courses</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/instructors" className="hover:text-white transition-colors">Our Instructors</Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Course Categories */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/courses/ai" className="hover:text-white transition-colors">Artificial Intelligence</Link>
              </li>
              <li>
                <Link href="/courses/web-development" className="hover:text-white transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/courses/data-science" className="hover:text-white transition-colors">Data Science</Link>
              </li>
              <li>
                <Link href="/courses/cloud-computing" className="hover:text-white transition-colors">Cloud Computing</Link>
              </li>
              <li>
                <Link href="/courses/cybersecurity" className="hover:text-white transition-colors">Cybersecurity</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Mail size={18} className="mt-1 text-green-500" />
                <a href="mailto:info@danyaracademy.com" className="hover:text-white transition-colors">
                  info@danyaracademy.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="mt-1 text-green-500" />
                <a href="tel:+1234567890" className="hover:text-white transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="mt-1 text-green-500" />
                <span className="text-sm">
                  123 Learning Street<br />
                  Tech City, TC 12345
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Danyar Academy. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
