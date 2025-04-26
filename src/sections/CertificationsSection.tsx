import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import { Certificate } from '../types';

const certificates: Certificate[] = [
  {
    id: 1,
    title: "EY GDS & AICTE | Full-Stack Web Development Intern",
    issuer: "Edunet",
    date: "2025",
    url: "https://drive.google.com/file/d/1xqBIeYRZxesEEmyQJiQgPytKuzysSUXm/view?usp=drivesdk"
  },
  {
    id: 2,
    title: "VirtuNexa Frontend developer Inter",
    issuer: "VirtuNexa",
    date: "2025",
    url: "https://www.linkedin.com/in/lokeshnath-kodavandla/"
  },
  {
    id: 3,
    title: "Edunet Foundation AI and ML course",
    issuer: "Edunet Foundation",
    date: "2024",
    url: "https://www.linkedin.com/posts/lokeshnath-kodavandla_certificate-of-internship-activity-7286341460835160064-W2j4?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAADXKO7IBCyt3jdgThz-w31H5opfdvxvx3Jg&utm_campaign=copy_link"
  },
   
];

const CertificationsSection: React.FC = () => {
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
    <section id="certificates" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            My credentials
          </motion.p>
          <AnimatedText 
            text="Certifications" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              variants={itemVariants}
              className="card p-6"
              whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="flex items-start mb-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                  <Award className="text-primary-600 dark:text-primary-400" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{certificate.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{certificate.issuer}</p>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500 dark:text-gray-500">{certificate.date}</span>
                <motion.a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 flex items-center text-sm"
                  whileHover={{ x: 5 }}
                >
                  View Certificate
                  <ExternalLink className="ml-1" size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CertificationsSection;