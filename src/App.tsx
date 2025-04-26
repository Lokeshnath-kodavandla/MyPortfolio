import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import ThemeProvider from './context/ThemeContext';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import CertificationsSection from './sections/CertificationsSection';
import EducationSection from './sections/EducationSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  
  const sections = [
    'home', 
    'about', 
    'skills', 
    'projects', 
    'certificates', 
    'education', 
    'contact'
  ];
  
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const section of sections) {
        const element = sectionRefs.current[section];
        if (!element) continue;
        
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;
        
        if (
          scrollPosition >= offsetTop && 
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <ThemeProvider>
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        <Navbar 
          activeSection={activeSection} 
          onNavClick={handleNavClick} 
        />
        
        <main className="flex-grow">
          <div 
            ref={el => sectionRefs.current['home'] = el} 
            id="home"
          >
            <HeroSection onNavClick={handleNavClick} />
          </div>
          
          <div 
            ref={el => sectionRefs.current['about'] = el} 
            id="about"
          >
            <AboutSection />
          </div>
          
          <div 
            ref={el => sectionRefs.current['skills'] = el} 
            id="skills"
          >
            <SkillsSection />
          </div>
          
          <div 
            ref={el => sectionRefs.current['projects'] = el} 
            id="projects"
          >
            <ProjectsSection />
          </div>
          
          <div 
            ref={el => sectionRefs.current['certificates'] = el} 
            id="certificates"
          >
            <CertificationsSection />
          </div>
          
          <div 
            ref={el => sectionRefs.current['education'] = el} 
            id="education"
          >
            <EducationSection />
          </div>
          
          <div 
            ref={el => sectionRefs.current['contact'] = el} 
            id="contact"
          >
            <ContactSection />
          </div>
        </main>
        
        <Footer onScrollToTop={scrollToTop} />
      </div>
    </ThemeProvider>
  );
}

export default App;