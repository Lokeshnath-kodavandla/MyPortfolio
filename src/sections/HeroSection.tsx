import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, Send } from 'lucide-react';
import ParticlesBackground from '../components/ParticlesBackground';
import AnimatedText from '../components/AnimatedText';
import pdf from '../assets/Lokeshnath kodavandla Resume Fresher.pdf'
import logo from '../assets/logo.png'

interface HeroSectionProps {
  onNavClick: (sectionId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavClick }) => {
  return (
    <section id="home" className="min-h-screen relative flex items-center">
      <ParticlesBackground />
      
      <div className="container-custom pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <motion.div 
              className="text-sm uppercase tracking-widest text-primary-600 dark:text-primary-400 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Welcome to my portfolio
            </motion.div>
            
            <h1 className="mb-4">
              <span className="block text-4xl sm:text-5xl lg:text-6xl mb-2">
                Hi, I'm <span className="text-primary-600 dark:text-primary-400">Lokeshnath Kodavandla</span>
              </span>
              <AnimatedText 
                text="Frontend developer" 
                className="text-2xl sm:text-3xl lg:text-4xl text-gray-700 dark:text-gray-300"
              />
            </h1>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Aspiring developer passionate about building beautiful, functional, and user-friendly 
              websites using modern technologies.
            </motion.p>
            
            <div className="flex flex-wrap gap-4">
            <motion.a
                href={pdf}
                download
                className="btn btn-primary flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <FileDown className="mr-2 h-5 w-5" />
                Download CV
              </motion.a>

              
              <motion.button
                className="btn btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                onClick={() => onNavClick('contact')}
              >
                <Send className="mr-2 h-5 w-5" />
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-primary-200 dark:bg-primary-900/30 absolute -top-6 -left-6 z-0 animate-pulse-slow" />
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-secondary-200 dark:bg-secondary-900/30 absolute -bottom-6 -right-6 z-0 animate-pulse-slow" />
              <img 
                src={logo} 
                alt="Lokeshnath Kodavandla" 
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover rounded-full border-4 border-white dark:border-dark-700 shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="w-8 h-12 border-2 border-gray-600 dark:border-gray-400 rounded-full flex justify-center p-1"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <motion.div className="w-1 h-2 bg-gray-600 dark:bg-gray-400 rounded-full" />
        </motion.div>
        <p className="text-xs text-center mt-2 text-gray-600 dark:text-gray-400">Scroll Down</p>
      </motion.div>
    </section>
  );
};

export default HeroSection;