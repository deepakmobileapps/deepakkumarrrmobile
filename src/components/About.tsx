
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
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-brand-600 font-medium mb-2 block">ABOUT ME</span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Passionate <span className="text-gradient">Android & KMP</span> Developer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-500 to-kotlin-purple rounded-full mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            {/* Image - Centered & Takes 2/5 of the space on large screens */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-full max-w-sm mx-auto">
                <div className="absolute -inset-4 bg-gradient-to-r from-brand-200 to-kotlin-purple/30 rounded-xl blur-lg opacity-70"></div>
                <div className="bg-white p-2 rounded-xl shadow-lg relative z-10">
                  <img 
                    src="/lovable-uploads/1e201012-5721-49ed-a807-cea20bb328a0.png" 
                    alt="Deepak - Android & KMP Developer" 
                    className="rounded-lg w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Text Content - Takes 3/5 of the space on large screens */}
            <div className="lg:col-span-3 space-y-6">
              <div className="space-y-4 text-gray-600">
                <p className="text-lg">
                  I am a passionate <strong>Android & Kotlin Multiplatform Developer</strong> with a strong background in architecting, developing, and optimizing mobile applications.
                </p>
                <div className="p-4 bg-white rounded-lg border-l-4 border-brand-500 shadow-sm">
                  <p className="italic text-gray-700">
                    "I believe in crafting elegant solutions that not only meet technical requirements but also create delightful user experiences."
                  </p>
                </div>
                <p>
                  With expertise in <strong>Jetpack Compose, MVVM, Kotlin, and Compose Multiplatform</strong>, I have built and migrated feature-rich applications that enhance user experience and business efficiency.
                </p>
                <p>
                  With a deep understanding of <strong>Android & KMP development</strong>, a <strong>problem-solving mindset</strong>, and a <strong>track record of delivering impactful solutions</strong>, I thrive on building high-performance, scalable, and user-centric applications.
                </p>
                <p className="font-medium text-gray-800 text-lg">
                  Let's create something great together! 🚀
                </p>
              </div>
            </div>
          </div>
          
          {/* Highlight Cards */}
          <div className="mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {highlights.map((highlight, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:translate-y-[-5px] transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-gray-50 p-4 rounded-full mb-4">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{highlight.title}</h3>
                    <p className="text-gray-600">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
