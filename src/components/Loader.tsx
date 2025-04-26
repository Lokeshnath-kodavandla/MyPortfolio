import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Code } from 'lucide-react';

const Loader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (minimum 1.5 seconds for animation to show)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: "afterChildren",
      }
    }
  };

  const logoVariants = {
    hidden: { scale: 0 },
    visible: { 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    exit: {
      scale: 0
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    }
  };

  if (!loading) return null;

  return (
    <motion.div 
      className="fixed inset-0 flex flex-col items-center justify-center bg-white dark:bg-dark-800 z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div
        variants={logoVariants}
        className="mb-6"
      >
        <Code size={64} className="text-primary-600 dark:text-primary-400" />
      </motion.div>
      
      <motion.div className="text-2xl font-semibold mb-6 text-primary-600 dark:text-primary-400">
        Portfolio
      </motion.div>
      
      <div className="w-64 h-1 bg-gray-200 dark:bg-dark-600 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-primary-600 dark:bg-primary-400"
          variants={progressVariants}
        />
      </div>
    </motion.div>
  );
};

export default Loader;