import {ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar';

const CamhomeTemplatePage = () => {
  const projectDetails = {
    title: "Camhome Template",
    tags: ["Framer", "Template"],
    description: "A modern home automation and security template designed for Framer, featuring sleek interfaces for controlling smart home devices.",
    images: [
      "https://framerusercontent.com/images/6BzTpMXghcswxSpaZzRtLNmnRg.png?scale-down-to=512&width=2880&height=1900",
      "https://framerusercontent.com/images/JAg7KfuVKcig6IypiiOoaTXI6aE.jpg?scale-down-to=512&width=2880&height=1900",
      "https://framerusercontent.com/images/2TgzUSBwFMLj5FfgFrpbiESOOMM.jpg?scale-down-to=512&width=2880&height=1900"
    ],
    role: "UI Designer",
    timeline: "1.5 weeks",
    challenge: "Creating an intuitive interface for complex home automation systems that feels approachable to users of all technical levels.",
    solution: "Developed a visual dashboard with clear status indicators, simple controls, and organized device groups that prioritize frequently used functions."
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
                The Camhome Template is a cutting-edge design solution for home automation and security interfaces. 
                It combines sleek aesthetics with functional controls to create an intuitive user experience for managing smart home devices.
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
                  <span>Unified dashboard for all connected home devices</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Security camera feeds with real-time alerts</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Climate control with energy efficiency monitoring</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span>Voice command integration and automation scheduling</span>
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
                  <p className="text-lg font-medium text-gray-900">Framer Template</p>
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
                {['Figma', 'Framer', 'CSS', 'Animations'].map((tech, index) => (
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

export default CamhomeTemplatePage;