import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Code, Lightbulb, Users } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
// import Lokesh from '../assets/WhatsApp Image 2025-04-21 at 15.27.51_80c7403c.jpg'
import Lokeshnath from '../assets/Pic.jpg'

const AboutSection: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const statsItems = [
    { icon: <Code />, value: 'I am ', label: 'Fresher' },
    { icon: <Award />, value: '5+', label: 'Projects Completed' },
    { icon: <Users />, value: '3+', label: 'Happy Clients' },
    { icon: <Lightbulb />, value: '10+', label: 'Ideas' },
  ];

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
    <section id="about" className="section bg-gray-50 dark:bg-dark-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get to know me
          </motion.p>
          <AnimatedText 
            text="About Me" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-200 dark:bg-primary-900/30 rounded-lg z-0" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-secondary-200 dark:bg-secondary-900/30 rounded-lg z-0" />
            <img 
              src={Lokeshnath}
              alt="About Me" 
              className="rounded-lg shadow-xl relative z-10 w-full object-cover"
            />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={itemVariants}
            >
              Aspiring Full Stack Developer
            </motion.h3>

            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              Hello! I'm Lokeshnath, an aspiring Full Stack Developer with a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React.js. With hands-on experience through internships, I’ve built responsive, user-friendly, and SEO-optimized web applications that merge clean design with functionality.
            </motion.p>

            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              Currently expanding my back-end expertise with Node.js and Python, I'm on a mission to become a well-rounded developer capable of handling both ends of the stack. I have a working knowledge of Express.js, MongoDB, SQL, and RESTful API development, along with proficiency in tools like Git, Postman, and DevTools for collaborative, test-driven workflows.
            </motion.p>

            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              When I'm not deep-diving into code, you'll find me exploring design trends, participating in tech webinars, or enjoying a hike with my camera in hand.
            </motion.p>

            <motion.div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
              variants={containerVariants}
            >
              {statsItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="text-center p-4 bg-white dark:bg-dark-700 rounded-lg shadow-md"
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="text-primary-600 dark:text-primary-400 mb-2 flex justify-center">
                    {item.icon}
                  </div>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;