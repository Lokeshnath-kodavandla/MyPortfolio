import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Education } from '../types';

const educationHistory: Education[] = [
  {
    id: 1,
    degree: "Learning Skills on Frontend",
    institution: "Self",
    location: "Hyderabad",
    startDate: "2024",
    endDate: "2026",
    description: "Developing skills"
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "Sr & Bgnr Government Arts and Science College",
    location: "Khammam",
    startDate: "2021",
    endDate: "2024",
    description: "Graduated with Bachelor of Science in Computer Science."
  },
];

const EducationSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="education" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Academic background
          </motion.p>
          <AnimatedText 
            text="Education & Training" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-dark-700" />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative z-10"
          >
            {educationHistory.map((edu, index) => (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                className={`flex flex-col md:flex-row mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="md:w-1/2 md:pr-8 md:pl-8 relative">
                  {/* Timeline dot */}
                  <div className="hidden md:block absolute top-0 w-5 h-5 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-dark-900 -left-[44px] md:-right-[29px] md:left-auto" />
                  
                  <motion.div 
                    className="card p-6"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                  >
                    <div className="flex items-start mb-3">
                      <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-3">
                        <BookOpen className="text-primary-600 dark:text-primary-400" size={20} />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-500 mb-4">
                      <Calendar size={14} className="mr-1" />
                      <span>{edu.startDate} - {edu.endDate}</span>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </motion.div>
                </div>
                
                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
