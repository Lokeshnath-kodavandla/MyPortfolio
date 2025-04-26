import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Project } from '../types';
import smartlabour from '../assets/labourpic.png'
// import health from '../assets/heath.png'
import maps from '../assets/maps.png'
// import fooddeliveryapp from '../assets/deliveryapp.png'

const projects: Project[] = [
  {
    id: 1,
    title: "Smart Labour Services",
    description: "A dedicated frontend project focusing on connecting skilled laborers with customers through a clean UI and responsive design.",
    image:  smartlabour,
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://smartlabourservices.vercel.app/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/smart-labour.git",
    category: "frontend"
  },
  {
    id: 2,
    title: "Resume Builder Web App",
    description: "Created a responsive tool using HTML, CSS, and JavaScript for generating resumes with live preview and PDF export.",
    image: "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lokeshnath-kodavandla.github.io/Final-task/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/Final-task",
    category: "frontend"
  },
  {
    id: 3,
    title: "Client Websites (Freelance)",
    description: "Delivered 2 paid projects—a portfolio for a video editor and a student—using custom HTML/CSS layouts with mobile responsiveness.",
    image: "https://images.pexels.com/photos/6476584/pexels-photo-6476584.jpeg?auto=compress&cs=tinysrgb&w=600",
    technologies: ["HTML", "CSS","JavaScript","React"],
    demoUrl: "https://lokeshnath-kodavandla.github.io/Gani/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/Gani",
    category: "frontend"
  },
  {
    id: 4,
    title: "Interactive Map App",
    description: "Built using Leaflet.js and OpenStreetMap API with real-time marker placement, place name fetching, and cleanup functionality.",
    image: maps,
    technologies: ["JavaScript", "Leaflet.js", "OpenStreetMap API"],
    demoUrl: "https://lokeshnath-kodavandla.github.io/MapApp-VirtuNexa/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/MapApp-VirtuNexa",
    category: "frontend"
  },
  {
    id: 5,
    title: "Health Benefits App",
    description: "Frontend app providing health tips, including hydration reminders and food recommendations, for better daily routines.",
    image:  "https://lilacinfotech.com/lilac_assets/images/blog/top-20-best-healthcare-mobile-app-ideas-in-2023.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demoUrl: "https://lokeshnath-kodavandla.github.io/Health-virtuNexa/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/Health-virtuNexa",
    category: "frontend"
  },
  {
    id: 6,
    title: "Food Delivery Web App",
    description: "Developed during internship at EY GDS & AICTE using MERN stack. Includes search, authentication, dynamic routing, and deployment.",
    image:  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMbhPGVU29iuNjgUEjefkdUPomqpd4IM59Xsl4wZmFbZhAYTwNhyhhToA3jSZzOllJcHg&usqp=CAU",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    demoUrl: "https://speeddeliverycom.vercel.app/",
    githubUrl: "https://github.com/Lokeshnath-kodavandla/Speed-Food-Delivery-App",
    category: "fullstack"
  }
];


type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'mobile';

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'mobile', label: 'Mobile' },
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
    <section id="projects" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My recent work
          </motion.p>
          <AnimatedText 
            text="Featured Projects" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              className={`px-6 py-3 rounded-full ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 dark:bg-dark-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-600'
              } transition-all duration-300`}
              onClick={() => setActiveCategory(category.id as ProjectCategory)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden group"
                whileHover={{ y: -10 }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full flex justify-between items-center">
                      <motion.a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-primary-600 hover:bg-primary-700 p-2 rounded-full"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink size={18} />
                      </motion.a>
                      <motion.a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white bg-dark-800 hover:bg-dark-900 p-2 rounded-full"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.a 
            href="https://github.com/Lokeshnath-kodavandla"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={18} />
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;