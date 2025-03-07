
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-6 md:mb-0">
              <a href="#home" className="text-xl font-display font-bold flex items-center">
                <span className="mr-1 text-kotlin-purple">App</span>
                <span className="text-android-green">X</span>
                <span className="text-white">Orbit</span>
              </a>
              <p className="text-gray-400 mt-2 max-w-md">
                Building high-performance, scalable, and user-centric mobile applications with Android and Kotlin Multiplatform.
              </p>
            </div>
            
            <div className="flex flex-col items-center">
              <button 
                onClick={scrollToTop}
                className="bg-gray-800 hover:bg-gray-700 text-white p-4 rounded-full mb-4 transition-colors"
                aria-label="Scroll to top"
              >
                <ArrowUp size={20} />
              </button>
              <div className="flex space-x-6 my-4">
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} />
                </a>
                <a 
                  href="mailto:hello@example.com" 
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <nav className="flex flex-wrap justify-center mb-4 md:mb-0">
              <a href="#home" className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Home</a>
              <a href="#about" className="px-4 py-2 text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#skills" className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Skills</a>
              <a href="#projects" className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="px-4 py-2 text-gray-400 hover:text-white transition-colors">Contact</a>
            </nav>
            
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} AppXOrbit by Deepak. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
