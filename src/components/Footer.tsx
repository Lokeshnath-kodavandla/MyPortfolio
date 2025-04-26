import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Code, Github, Linkedin, Mail, Twitter } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Lokeshnath-kodavandla", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/lokeshnath-kodavandla/", label: "LinkedIn" },
    { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
    { icon: <Mail size={20} />, href: "mailto:kodavandlalokeshnath@gmail", label: "Email" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-dark-900 text-white py-12 relative">
      <div className="absolute left-0 right-0 top-0 h-2 bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-primary-400" />
              <span className="text-xl font-semibold">Portfolio</span>
            </div>
            <p className="text-gray-400 mb-6">
              A Full Stack Developer specialized in creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="bg-gray-800 dark:bg-dark-800 hover:bg-primary-600 dark:hover:bg-primary-600 p-2 rounded-full transition-colors duration-300"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <motion.a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {item}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Hyderabad</li>
              <li>kodavandlalokeshnath@gmail</li>
              <li>+91 9059568329</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 dark:border-dark-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Portfolio. All rights reserved.
          </p>
          
          <motion.button
            onClick={onScrollToTop}
            className="bg-primary-600 hover:bg-primary-700 p-3 rounded-full shadow-lg"
            whileHover={{ scale: 1.1, rotate: 360, transition: { duration: 0.5 } }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;