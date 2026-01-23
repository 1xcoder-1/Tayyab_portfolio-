import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const CommandTMSPage = () => {
  const projectDetails = {
    title: "COMMAND TMS",
    tags: ["DesignSystem", "Saas"],
    description: "A comprehensive Transportation Management System with a robust design system, focusing on efficiency and usability for logistics operations.",
    images: [
      "https://framerusercontent.com/images/Jtnq93J0CMfJ4WbWSHVfwXX9NU.jpg?scale-down-to=512&width=5760&height=3240",
      "https://framerusercontent.com/images/VbkkKj0YIsuFUcFgrQjP3c024HY.jpg?scale-down-to=512&width=5760&height=3240",
      "https://framerusercontent.com/images/jlyFVF4QgOtL8hl0kXvi0YHf1D0.jpg?scale-down-to=512&width=5760&height=3240"
    ],
    role: "Lead Designer",
    timeline: "4 weeks",
    challenge: "Creating a scalable design system that accommodates complex logistics workflows while maintaining consistency and usability.",
    solution: "Established a comprehensive design system with reusable components, clear hierarchies, and contextual help features to guide users through complex operations."
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {projectDetails.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {projectDetails.title}
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl">
            {projectDetails.description}
          </p>
        </motion.div>

        {/* Project Images Gallery */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectDetails.images.map((image, index) => (
              <div 
                key={index} 
                className="aspect-video rounded-xl overflow-hidden shadow-lg"
              >
                <img 
                  src={image} 
                  alt={`${projectDetails.title} view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Project Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
              <p className="text-gray-600 leading-relaxed">
                COMMAND TMS is a sophisticated Transportation Management System designed to streamline logistics operations for freight companies. 
                The system features a comprehensive design system that ensures consistency and efficiency across all user interactions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Challenge</h2>
              <p className="text-gray-600 leading-relaxed">
                {projectDetails.challenge}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Solution</h2>
              <p className="text-gray-600 leading-relaxed">
                {projectDetails.solution}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Comprehensive design system with 100+ reusable components</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Advanced shipment tracking and analytics dashboard</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Automated route optimization and cost calculation</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Integration with multiple carrier APIs and EDI systems</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Right Column - Project Stats */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Info</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Role</h4>
                  <p className="text-lg font-medium text-gray-900">{projectDetails.role}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Timeline</h4>
                  <p className="text-lg font-medium text-gray-900">{projectDetails.timeline}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Platform</h4>
                  <p className="text-lg font-medium text-gray-900">Web Application</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full flex items-center justify-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">
                  <Github className="w-5 h-5" />
                  View Code
                </button>
                
                <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <ExternalLink className="w-5 h-5" />
                  Live Demo
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technologies</h3>
              
              <div className="flex flex-wrap gap-2">
                {['Figma', 'React', 'Typescript', 'Design System'].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm border border-gray-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CommandTMSPage;