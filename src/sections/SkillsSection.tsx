import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, GitBranch, Globe, Server, Wrench } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Skill } from '../types';

const skills: Skill[] = [
  // Frontend
  { 
    id: 1, 
    name: 'React', 
    level: 70, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  { 
    id: 2, 
    name: 'HTML', 
    level: 95, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  { 
    id: 3, 
    name: 'CSS', 
    level: 95, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
  { 
    id: 4, 
    name: 'JavaScript', 
    level: 80, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  { 
    id: 5, 
    name: 'Bootstrap', 
    level: 80, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'
  },
  { 
    id: 6, 
    name: 'Tailwind CSS', 
    level: 65, 
    category: 'frontend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg'
  },
  
  // Backend
  { 
    id: 7, 
    name: 'Node.js', 
    level: 60, 
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  { 
    id: 8, 
    name: 'Express', 
    level: 60, 
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'
  },
  { 
    id: 10, 
    name: 'Python', 
    level: 75, 
    category: 'backend',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
  },
  
  // Database
  { 
    id: 12, 
    name: 'MongoDB', 
    level: 65, 
    category: 'database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
  },
  { 
    id: 13, 
    name: 'PostgreSQL', 
    level: 60, 
    category: 'database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  { 
    id: 14, 
    name: 'Firebase', 
    level: 65, 
    category: 'database',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
  },
  
  // Tools
  { 
    id: 16, 
    name: 'Git', 
    level: 90, 
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  { 
    id: 17, 
    name: 'GitHub', 
    level: 70, 
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'
  },
  { 
    id: 18, 
    name: 'Vercel', 
    level: 65, 
    category: 'tools',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg'
  },
  { 
    id: 19, 
    name: 'Render', 
    level: 75, 
    category: 'tools',
    icon: 'https://media.licdn.com/dms/image/v2/D4E0BAQGGDoFoqHtOvA/company-logo_200_200/company-logo_200_200/0/1702595267620/renderco_logo?e=2147483647&v=beta&t=ZYrxKUyruOEupgw5Lr5amgwgBCJq8VXH8r05Qr5CeQc'
  }
];


type SkillCategory = 'frontend' | 'backend' | 'database' | 'tools';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('frontend');

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: <Globe className="w-5 h-5" /> },
    { id: 'backend', label: 'Backend', icon: <Server className="w-5 h-5" /> },
    { id: 'database', label: 'Database', icon: <Database className="w-5 h-5" /> },
    { id: 'tools', label: 'Tools', icon: <Wrench className="w-5 h-5" /> },
  ];

  const filteredSkills = skills.filter(skill => skill.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="skills" className="section bg-gradient-to-br from-violet-50 to-cyan-50 dark:from-violet-950 dark:to-cyan-950">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            What I can do
          </motion.p>
          <AnimatedText 
            text="My Skills" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`flex items-center px-6 py-3 rounded-full ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white'
                  : 'bg-white dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-dark-600'
              } transition-all duration-300 shadow-lg`}
              onClick={() => setActiveCategory(category.id as SkillCategory)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className="card p-6 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm"
                whileHover={{ 
                  y: -5, 
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  scale: 1.02
                }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-8 h-8 mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                    <span className="text-primary-600 dark:text-primary-400 font-medium">{skill.level}%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 dark:bg-dark-600 rounded-full h-2.5 overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full bg-gradient-to-r from-primary-500 to-accent-500"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <img 
            src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg"
            alt="GitHub"
            className="inline-block w-12 h-12 mb-4 dark:invert"
          />
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skill set to stay current with the latest technologies and industry best practices.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;