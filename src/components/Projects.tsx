
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Button from './Button';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'android' | 'kmp'>('all');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Sample projects (these would typically come from an API or CMS)
  const projects: Project[] = [
    {
      id: 1,
      title: "KMP E-Commerce App",
      description: "A cross-platform e-commerce solution built with Kotlin Multiplatform and Compose Multiplatform for both Android and iOS.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      technologies: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "Koin", "Decompose"],
      githubUrl: "https://github.com/example/kmp-ecommerce",
      liveUrl: "https://example.com/kmp-ecommerce",
      featured: true,
    },
    {
      id: 3,
      title: "Fitness Tracking App",
      description: "Android application for fitness tracking with real-time monitoring and personalized workout plans.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      technologies: ["Android", "Kotlin", "Room", "Dagger-Hilt", "Firebase"],
      githubUrl: "https://github.com/example/fitness-app",
      featured: false,
    },
    {
      id: 4,
      title: "KMP Weather App",
      description: "Cross-platform weather application with location-based forecasts and animated visualizations.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      technologies: ["Kotlin Multiplatform", "Ktor", "Moko-MVVM", "Compose Multiplatform"],
      liveUrl: "https://example.com/kmp-weather",
      featured: false,
    },
  ];

  // Fixed filtering logic
  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => {
        if (selectedCategory === 'android') {
          return project.technologies.some(tech => 
            tech.toLowerCase().includes('android'));
        }
        if (selectedCategory === 'kmp') {
          return project.technologies.some(tech => 
            tech.toLowerCase().includes('kotlin multiplatform') || 
            tech.toLowerCase().includes('kmp'));
        }
        return false;
      });

  return (
    <section id="projects" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-600 font-medium mb-2 block animate-on-scroll">My Work</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 animate-on-scroll">
              Explore a collection of my work showcasing Android and Kotlin Multiplatform development expertise.
            </p>
            
            {/* Filter tabs */}
            <div className="inline-flex bg-white p-1 rounded-lg shadow-sm border border-gray-100 mb-6 animate-on-scroll">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === 'all' 
                    ? 'bg-brand-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Projects
              </button>
              <button
                onClick={() => setSelectedCategory('android')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === 'android' 
                    ? 'bg-android-green text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Android
              </button>
              <button
                onClick={() => setSelectedCategory('kmp')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  selectedCategory === 'kmp' 
                    ? 'bg-kotlin-purple text-white' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kotlin Multiplatform
              </button>
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No projects found for the selected category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredProjects.map((project, index) => (
                <div 
                  key={project.id}
                  className={`bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md hover:-translate-y-1 animate-on-scroll ${
                    project.featured ? 'md:col-span-2' : ''
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className={`${project.featured ? 'md:flex' : ''}`}>
                    <div className={`${project.featured ? 'md:w-1/2' : ''} overflow-hidden`}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className={`p-6 ${project.featured ? 'md:w-1/2' : ''}`}>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex} 
                            className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                              tech.includes('Android') ? 'bg-android-green/10 text-android-green' :
                              tech.includes('Kotlin') ? 'bg-kotlin-purple/10 text-kotlin-purple' :
                              'bg-gray-100 text-gray-700'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-3">
                        {project.githubUrl && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            icon={<Github size={16} />}
                          >
                            View Code
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button 
                            variant="primary" 
                            size="sm"
                            icon={<ArrowUpRight size={16} />}
                          >
                            Live Demo
                          </Button>
                        )}
                        {!project.githubUrl && !project.liveUrl && (
                          <span className="text-sm text-gray-500 italic">Private Project</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="text-center mt-12">
            <Button variant="outline" icon={<Github size={20} />}>
              View More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
