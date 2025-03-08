
import React, { useEffect, useRef } from 'react';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Button from './Button';

const Home = () => {
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
    
    if (subtitle) {
      subtitle.classList.remove('opacity-0');
      subtitle.classList.add('animate-fade-in');
    }
    
    if (cta) {
      cta.classList.remove('opacity-0');
      cta.classList.add('animate-fade-in');
    }
    
    if (social) {
      social.classList.remove('opacity-0');
      social.classList.add('animate-fade-in');
    }
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-28 md:pt-32">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-brand-50"></div>
      <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-brand-200/30 filter blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full bg-kotlin-purple/10 filter blur-3xl"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-sm md:text-base font-medium px-4 py-1.5 rounded-full bg-brand-100/70 text-brand-700 mb-6 animate-fade-in" style={{animationDelay: '0ms', animationFillMode: 'forwards'}}>
            Mobile Development Specialist
          </span>
          
          <h1 
            ref={titleRef} 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Crafting exceptional
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-brand-600 via-kotlin-purple to-android-green">
              digital experiences
            </span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I transform innovative concepts into thoughtful, intuitive experiences 
            that resonate with users and bring visionary ideas to life.
          </p>
          
          <div 
            ref={ctaRef} 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})}
            >
              View Portfolio
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={scrollToContact}
            >
              Get in Touch
            </Button>
          </div>
          
          <div 
            ref={socialRef}
            className="flex items-center justify-center space-x-6"
          >
            <a 
              href="https://github.com/deepakmobileapps" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 transition-colors duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/deepak-kumar13/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-brand-600 transition-colors duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({behavior: 'smooth'})}
          className="text-gray-400 hover:text-brand-600 transition-colors duration-300"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Home;
