
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from './Button';

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple animation when component mounts
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const social = socialRef.current;

    if (title) title.classList.add('animate-slide-up');
    
    setTimeout(() => {
      if (subtitle) subtitle.classList.add('animate-slide-up');
    }, 200);
    
    setTimeout(() => {
      if (cta) cta.classList.add('animate-slide-up');
    }, 400);
    
    setTimeout(() => {
      if (social) social.classList.add('animate-slide-up');
    }, 600);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28 md:pt-32">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-3/5 h-full">
        <div className="absolute top-1/4 right-1/4 w-32 h-32 md:w-64 md:h-64 rounded-full bg-brand-200/50 filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 md:w-80 md:h-80 rounded-full bg-kotlin-purple/20 filter blur-3xl"></div>
        <div className="absolute top-1/2 right-1/2 w-24 h-24 md:w-48 md:h-48 rounded-full bg-android-green/20 filter blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-brand-100/80 text-brand-700 mb-6 opacity-0 animate-fade-in" style={{animationDelay: '0ms', animationFillMode: 'forwards'}}>
            Android & Kotlin Multiplatform Developer
          </span>
          
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0"
          >
            Hi, I'm <span className="text-gradient">Deepak</span>
            <br />
            I build <span className="relative">
              mobile experiences
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-brand-500 rounded-full"></span>
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto opacity-0"
          >
            Specializing in Android, Jetpack Compose, and Kotlin Multiplatform 
            to create high-performance, scalable, and user-centric applications.
          </p>
          
          <div 
            ref={ctaRef} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView()}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById('about')?.scrollIntoView()}
            >
              About Me
            </Button>
          </div>
          
          <div 
            ref={socialRef}
            className="flex items-center justify-center space-x-6 opacity-0"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand-600 transition-colors"
            >
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView()}
          className="text-gray-600 hover:text-brand-600 transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
