
import React from 'react';
import { Code, Smartphone, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8 text-brand-600" />,
      title: "Android & KMP Expert",
      description: "Proficient in Jetpack Compose, MVVM architecture, and Kotlin Multiplatform for cross-platform application development.",
    },
    {
      icon: <Smartphone className="h-8 w-8 text-kotlin-purple" />,
      title: "Feature Development",
      description: "Designed and implemented sophisticated UI components and core features that elevate the user experience while meeting business objectives.",
    },
    {
      icon: <Zap className="h-8 w-8 text-android-green" />,
      title: "Performance Optimization",
      description: "Diagnosed and improved rendering performance in both XML-based views and Jetpack Compose for smooth UI experiences.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Image */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-200 to-kotlin-purple/30 rounded-xl blur-lg opacity-70"></div>
                <img 
                  src="/lovable-uploads/1e201012-5721-49ed-a807-cea20bb328a0.png" 
                  alt="Deepak - Android & KMP Developer" 
                  className="relative rounded-xl shadow-lg max-w-full h-auto object-cover z-10"
                />
              </div>
            </div>
            
            {/* Text Content */}
            <div className="order-1 md:order-2">
              <span className="text-brand-600 font-medium mb-2 block">About Me</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Passionate <span className="text-gradient">Android & KMP</span> Developer
              </h2>
              
              <div className="space-y-4 text-gray-600">
                <p>
                  I am a passionate <strong>Android & Kotlin Multiplatform Developer</strong> with a strong background in architecting, developing, and optimizing mobile applications.
                </p>
                <p className="p-3 bg-gray-100 rounded-lg border-l-4 border-brand-500 italic">
                  "I believe in crafting elegant solutions that not only meet technical requirements but also create delightful user experiences."
                </p>
                <p>
                  With expertise in <strong>Jetpack Compose, MVVM, Kotlin, and Compose Multiplatform</strong>, I have built and migrated feature-rich applications that enhance user experience and business efficiency.
                </p>
                <p>
                  With a deep understanding of <strong>Android & KMP development</strong>, a <strong>problem-solving mindset</strong>, and a <strong>track record of delivering impactful solutions</strong>, I thrive on building high-performance, scalable, and user-centric applications.
                </p>
                <p className="font-medium text-gray-800">
                  Let's create something great together! 🚀
                </p>
              </div>
            </div>
            
            {/* Highlight Cards */}
            <div className="col-span-1 md:col-span-2 space-y-6 mt-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 card-hover"
                  >
                    <div className="flex items-start">
                      <div className="bg-gray-50 p-3 rounded-lg mr-4">
                        {highlight.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                        <p className="text-gray-600">{highlight.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
