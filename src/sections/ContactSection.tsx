import React from 'react';
import { motion } from 'framer-motion';
import { useForm, ValidationError } from '@formspree/react';
import { AtSign, Github, Linkedin, MapPin, Phone, Send } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';

const ContactSection: React.FC = () => {
  const [state, handleSubmit] = useForm("mkgrwzkj");  // Replace with your Formspree ID
  
  const contactInfo = [
    { icon: <AtSign size={20} />, text: "kodavandlalokeshnath@gmail", href: "mailto:kodavandlalokeshnath@gmail.com" },
    { icon: <Phone size={20} />, text: "+91 9059568329", href: "tel:+919059568329" },
    { icon: <MapPin size={20} />, text: "Hyderabad", href: "#" },
    { icon: <Github size={20} />, text: "github", href: "https://github.com/Lokeshnath-kodavandla" },
    { icon: <Linkedin size={20} />, text: "linkedin", href: "https://www.linkedin.com/in/lokeshnath-kodavandla/" },
  ];

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
    <section id="contact" className="section">
      <div className="container-custom">
        <div className="text-center mb-16">
          <motion.p 
            className="text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Get in touch
          </motion.p>
          <AnimatedText 
            text="Contact Me" 
            className="text-3xl md:text-4xl font-bold"
            once
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-semibold mb-6"
            >
              Let's talk about your project
            </motion.h3>
            
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 dark:text-gray-400 mb-8"
            >
              I'm interested in freelance opportunities – especially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using the form.
            </motion.p>
            
            <motion.div
              variants={containerVariants}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith('http') ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-2 rounded-full mr-4 text-primary-600 dark:text-primary-400">
                    {item.icon}
                  </div>
                  {item.text}
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-12 hidden md:block"
            >
              <img 
                src="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Contact" 
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="card p-8"
          >
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="bg-success-100 dark:bg-success-900/30 p-4 rounded-full inline-flex justify-center items-center mb-4">
                  <Send className="text-success-600 dark:text-success-400" size={32} />
                </div>
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you as soon as possible.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="name" className="label">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Name"
                    required
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="email" className="label">Email Address</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    className="input"
                    placeholder="example@gmail.com"
                    required
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="subject" className="label">Subject</label>
                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    className="input"
                    placeholder="Project discussion"
                    required
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                </motion.div>
                
                <motion.div 
                  className="mb-6"
                  variants={itemVariants}
                >
                  <label htmlFor="message" className="label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="input resize-none"
                    placeholder="Hello, I'm interested in working with you on a project..."
                    required
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} />
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  className="btn btn-primary w-full flex justify-center items-center"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {state.submitting ? (
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      <Send className="mr-2" size={18} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;