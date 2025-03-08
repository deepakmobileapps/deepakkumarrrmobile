import React, { useEffect } from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

const Skills = () => {
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

  const skillCategories: SkillCategory[] = [
    {
      title: "Android Development",
      skills: [
        "Jetpack Compose",
        "XML Layouts",
        "MVVM Architecture",
        "Android SDK",
        "Material Design",
        "Kotlin",
        "Java",
        "Android Navigation",
        "Data Binding"
      ]
    },
    {
      title: "Kotlin Multiplatform",
      skills: [
        "Compose Multiplatform",
        "Ktor",
        "Koin",
        "Decompose",
        "Moko-MVVM",
        "Kotlinx Serialization",
        "KMP Shared Logic"
      ]
    },
    {
      title: "Architecture & Tools",
      skills: [
        "Clean Architecture",
        "Dagger-Hilt",
        "Retrofit",
        "Room Database",
        "Flow",
        "Coroutines",
        "LiveData",
        "Gradle",
        "Git"
      ]
    },
    {
      title: "UI/UX & Testing",
      skills: [
        "UI Performance",
        "Animation",
        "Responsive Design",
        "JUnit",
        "Espresso",
        "UI Testing",
        "Mockk",
        "TDD"
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-brand-600 font-medium mb-2 block animate-on-scroll">My Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-on-scroll">Technical Skills</h2>
            <p className="text-gray-600 max-w-2xl mx-auto animate-on-scroll">
              I've developed a comprehensive skill set focusing on mobile development technologies, 
              particularly in the Android and Kotlin Multiplatform ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div 
                key={categoryIndex}
                className="bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 animate-on-scroll"
                style={{ animationDelay: `${categoryIndex * 100}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4 text-brand-700">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-pill animate-on-scroll"
                      style={{ animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 bg-gray-50 rounded-xl p-8 shadow-sm border border-gray-100 animate-on-scroll">
            <h3 className="text-2xl font-semibold mb-6 text-center">Why Work With Me?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-brand-600">Technical Excellence</h4>
                <p className="text-gray-600">Deep understanding of Android & KMP development with best practices and modern architecture patterns.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-kotlin-purple">Problem Solver</h4>
                <p className="text-gray-600">A creative problem-solving mindset to tackle complex development challenges efficiently.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h4 className="text-lg font-semibold mb-2 text-android-green">Results Driven</h4>
                <p className="text-gray-600">Track record of delivering high-quality, maintainable applications that meet business objectives.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
